"use client";

import MyPlanCard from "@/components/cards/MyPlanCard";
import Navbar from "@/components/layout/Navbar";
import { useEffect, useState } from "react";



const MeusPlanos = () => {
  const [plans, setPlans] = useState<MySubscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      getPlans(token).then((data) => {
        console.log(data);
        setPlans(data || []);
        setLoading(false);
      });
    } else {
      console.error("No auth token found");
      setLoading(false);
    }
  }, []);

  return (
    <div className="flex flex-row p-4 bg-slate-100 gap-2 min-h-screen">
      <Navbar />
      <div className="flex flex-col w-10/12 p-4 bg-white rounded-lg shadow-md h-fit">
        <h2 className="text-xl">Meus Planos</h2>
        <p className="text-base">Acesse seus planos de assinatura.</p>
        <hr className="divide-x divide-slate-500 my-2" />
        <div className="flex flex-row gap-4">
          {loading ? (
            <p className="text-center w-full">Carregando planos...</p>
          ) : (
            <div className="flex flex-row w-full gap-x-2 gap-y-4 flex-wrap">
              {plans.map((plan) => (
                <MyPlanCard {...plan} key={plan.subscription.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const getPlans = async (
  token: string
): Promise<Array<{ plan: PlansResponse; subscription: Subscription }>> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/plan/subscriptions`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((res) => res.json());

  return res;
};
export default MeusPlanos;
