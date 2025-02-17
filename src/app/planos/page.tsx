"use client";
import PlanCard from "@/components/cards/PlanCard";
import Navbar from "@/components/layout/Navbar";
import { useEffect, useState } from "react";

const PlansPage = () => {
  const [plans, setPlans] = useState<PlansResponse[]>([]);
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
        <h2 className="text-xl">Planos de assinatura</h2>
        <p className="text-base">
          Junte-se aos nossos assinantes e tenha acesso a recursos únicos para
          aprimorar sua experiencia
        </p>
        <hr className="divide-x divide-slate-500 my-2" />
        <div className="flex flex-row gap-4">
          {loading ? (
            <p className="text-center w-full">Carregando planos...</p>
          ) : (
            <div className="flex flex-row gap-x-2 gap-y-4 flex-wrap">
              {plans.map((plan) => (
                <PlanCard plan={plan} key={plan.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const getPlans = async (token: string) => {
  const res: PlansResponse[] = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/plan?status=active`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error:", error);
    });

  return res;
};

export default PlansPage;
