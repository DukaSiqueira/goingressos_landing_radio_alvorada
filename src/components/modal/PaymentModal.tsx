import React, { useCallback, useEffect, useState } from "react";
import { Payment } from "@mercadopago/sdk-react";

import Swal from "sweetalert2";
import Modal from ".";
import { preference } from "@/services/mercadopago";
import { IPaymentFormData } from "@mercadopago/sdk-react/esm/bricks/payment/type";
import { translate } from "@/utils/translate";

const PaymentDialog = ({ plan }: { plan: PlansResponse }) => {
  const [mpPreferenceId, setMpPreferenceId] = useState<string | null>(null);

  const generatePreference = useCallback(
    async (id: string) => {
      const pref = await preference
        .create({
          body: {
            items: [
              {
                id: id,
                title: `${plan.title} - ${plan.price}/${plan.frequency_type}`,
                unit_price: plan.price,
                quantity: 1,
              },
            ],
          },
        })
        .then((res) => {
          return res;
        })
        console.log(pref);
      if (pref) {
        return pref.id;
      }
      return null;
    },
    [plan.frequency_type, plan.price, plan.title]
  );

  const mpSubmitHandler = async (data: IPaymentFormData) => {
    const { token, payer } = data.formData;
    const email = payer.email;
    try {
      const response = await fetch("plan/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY || "",
        },
        body: JSON.stringify({
          preapproval_plan_id: plan.id,
          reason: plan.title,
          payer_email: email,
          card_token_id: token,
          auto_recurring: {
            frequency: plan.frequency,
            frequency_type: plan.frequency_type,
            transaction_amount: plan.transaction_amount,
            currency_id: plan.currency_id,
          },
          back_url: "https://www.goingressos.com.br/minha-conta/my-plans",
          status: "authorized",
          origin: "site",
        }),
      }).then((res) => res.json())
      .then((res) => {
        Swal.fire({
          title: "Sucesso!",
          text: "Pagamento realizado com sucesso!",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        });
        return res;
      })
      .catch((error) => {
        console.error("Erro no pagamento:", error);
        Swal.fire({
          title: "Erro",
          text: "Erro ao processar o pagamento. Verifique seus dados e tente novamente.",
          icon: "error",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        });
      });
      console.log(response);
      return response;
    } catch (error) {
      console.error("Erro no pagamento:", error);
      Swal.fire({
        title: "Erro",
        text: "Erro ao processar o pagamento. Verifique seus dados e tente novamente.",
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Ok",
      });
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData") || "{}");
    if (user.id) {
      generatePreference(`${user.id}-${plan.price}`).then((id) => {
        console.log(id);
        setMpPreferenceId(id as string);
      });
    }
  }, [generatePreference, plan.price]);

  return (
    <Modal
      title="Finalize sua Assinatura"
      btnText="Doe agora"
      btnClass="bg-brand-medium w-full"
    >
      <div className=" max-h-[80vh] overflow-y-auto">
        <div className="flex flex-col p-2 gap-y-2">
          <h3 className="font-bold text-center text-xl">
            {plan.title || "Titulo"}
          </h3>
          <p className="font-bold text-center text-3xl">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(plan.price || 0)}{" "}
            <small className="text-md">
              / {translate(plan.frequency_type)}
            </small>
          </p>
          <hr className="border-t-2 border-slate-500" />
          {mpPreferenceId ? (
            <Payment
              initialization={{
                amount: plan.price,
                preferenceId: mpPreferenceId,
              }}
              onSubmit={mpSubmitHandler}
              customization={{
                paymentMethods: {
                  creditCard: "all",
                  debitCard: "all",
                },
              }}
            />
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default PaymentDialog;
