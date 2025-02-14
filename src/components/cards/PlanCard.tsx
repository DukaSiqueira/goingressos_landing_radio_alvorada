import Image from "next/image";
import { Button } from "../ui/button";
import PaymentModal from "../modal/PaymentModal";
import { useState } from "react";
import { translate } from "@/utils/translate";

const PlanCard = ({ plan }: { plan: PlansResponse }) => {

  
  return (
    <div className="flex flex-col w-[24%] items-center  gap-y-2 p-4 border border-brand-medium shadow-lg rounded-lg">
      <Image src={`https://arquivos.devnx.com.br/${plan.image}`} alt={plan.title} width={200} height={200} />
      <h3 className="font-bold text-center text-lg">
        {plan.title || "Titulo"}
      </h3>
      <p className="font-bold text-center text-3xl">
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(plan.price || 0)} <small className="text-base">/{translate(plan.frequency_type)}</small>
      </p>
      <PaymentModal plan={plan} />
      <div>
        <h6 className="font-bold text-slate-600">Sobre o plano</h6>
        <p>{plan.description}</p>
        <p className="mt-4">Dia da cobrança: {plan.billing_day}</p>
      </div>
      
    </div>
  );
};

export default PlanCard;
