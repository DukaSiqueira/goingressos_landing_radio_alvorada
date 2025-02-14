"use client";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { translate } from "@/utils/translate";
import { ChevronLeft, Trash } from "lucide-react";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const SubscribeDetails = () => {
  const [plan, setPlan] = useState<MySubscription>();
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState<string>();
  const path = usePathname();

  const statusStyle = (status: string) => {
    const statusStyles: { [key: string]: string } = {
      authorized: "text-green-600",
      cancelled: "text-red-600",
      pending: "text-yellow-600",
      paused: "text-cyan-600",
    };
    return `font-bold ${statusStyles[status] || "text-slate-600"}`;
  };

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    const plan = JSON.parse(sessionStorage.getItem("plan") ?? "{}");
    const subscription = JSON.parse(
      sessionStorage.getItem("subscription") ?? "{}"
    );
    if (token) {
      const id = path.split("/").pop();
      setPlan({ plan, subscription });
      setId(id);
      setLoading(false);
    } else {
      console.error("No auth token found");
      setLoading(false);
    }
  }, []);

  const handleCancelSubscription = async () => {
    const confirmacao = await Swal.fire({
      title: 'Confirmar cancelamento',
      text: "Tem certeza que deseja cancelar esta assinatura? Esta ação não poderá ser desfeita.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, cancelar',
      cancelButtonText: 'Não'
    });
    
    if (confirmacao.isConfirmed) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subscriptions/${id}/cancel`, {
          method: "POST",
          headers: {
            "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY,
          },
        });
        
        if (response.status === 200) {
          await Swal.fire({
            title: 'Sucesso!',
            text: 'Assinatura cancelada com sucesso!',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
          });
          sessionStorage.removeItem("subscription");
          sessionStorage.removeItem("plan");
          window.location.href = "/meus-planos";
        }
      } catch (error) {
        console.error("Erro ao cancelar assinatura:", error);
        Swal.fire({
          title: 'Erro',
          text: 'Erro ao cancelar a assinatura. Tente novamente.',
          icon: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok'
        });
      }
    }
  };

  if (id !== plan?.subscription.id) return notFound();

  return (
    <div className="flex flex-row p-4 bg-slate-100 gap-2 min-h-screen">
      <Navbar />

      <div className="p-4  w-10/12 bg-white rounded-lg shadow-md h-fit">
        <h2 className="text-xl">Detalhes da Assinatura</h2>
        <p className="text-base">Veja os detalhes da sua assinatura.</p>
        <hr className="divide-x divide-slate-500 my-2" />
        {loading ? (
          <p className="flex w-full text-center font-semibold text-slate-600 py-4">Carregando...</p>
        ) : (
          <div className="flex flex-row gap-4 flex-wrap">
            <div>
              <Label className="font-semibold">Titulo</Label>
              <p>{plan?.subscription.reason}</p>
            </div>
            <div>
              <Label className="font-semibold">Valor</Label>
              <p>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(
                  plan?.subscription.auto_recurring.transaction_amount || 0
                )}{" "}
                <small className="text-md">
                  /{" "}
                  {translate(
                    plan?.subscription.auto_recurring.frequency_type ?? "months"
                  )}
                </small>
              </p>
            </div>
            <div>
              <Label className="font-semibold">Status</Label>
              <p
                className={statusStyle(plan?.subscription.status ?? "pending")}
              >
                {translate(plan?.subscription.status ?? "pending")}{" "}
              </p>
            </div>
            <div>
              <Label className="font-semibold">Dia da Cobrança</Label>
              <p>{plan?.subscription.auto_recurring.billing_day ?? 10}</p>
            </div>
            <div>
              <Label className="font-semibold">Data de Assinatura</Label>
              <p>
                {Intl.DateTimeFormat("pt-BR").format(
                  new Date(plan?.subscription.date_created ?? new Date())
                )}
              </p>
            </div>
            <div>
              <Label className="font-semibold">Próxima Cobrança</Label>
              <p>
                {Intl.DateTimeFormat("pt-BR").format(
                  new Date(plan?.subscription.next_payment_date ?? new Date())
                )}
              </p>
            </div>
            <div>
              <Label className="font-semibold">Última Cobrança</Label>
              <p>
                {Intl.DateTimeFormat("pt-BR").format(
                  new Date(
                    plan?.subscription.summarized.last_charged_date ??
                      new Date()
                  )
                )}
              </p>
            </div>
            {plan?.subscription.status !== "cancelled" && (
              <Button
                className="text-red-600 border hover:bg-slate-200 border-red-600 bg-transparent w-full flex items-center py-2 gap-2 "
                onClick={handleCancelSubscription}
              >
                <Trash />
                Cancelar Assinatura
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default SubscribeDetails;
