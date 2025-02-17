import { translate } from "@/utils/translate"
import { Button } from "../ui/button";

const MyPlanCard = ({ plan, subscription }: MySubscription) => {
    const statusStyle = (status: string) => {
        const statusStyles: { [key: string]: string } = {
            authorized: "text-green-600",
            cancelled: "text-red-600",
            pending: "text-yellow-600",
            paused: "text-cyan-600",
        };
        return `font-bold ${statusStyles[status] || "text-slate-600"}`;
    };

    const subscribeDetails = () => {
        sessionStorage.setItem("subscription", JSON.stringify(subscription));
        sessionStorage.setItem("plan", JSON.stringify(plan));
        window.location.href = "/meus-planos/"+ subscription.id;
    }

    return (
        <div className="flex flex-col w-[24%] items-center  gap-y-4 p-4 border border-brand-medium shadow-lg rounded-lg">
            <h3 className="font-bold text-center text-lg">
                {subscription.reason || "Titulo"}
            </h3>
            <p className="font-bold text-center text-3xl">
                {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(subscription.auto_recurring.transaction_amount || 0)} <small className="text-base">/{translate(subscription.auto_recurring.frequency_type)}</small>
            </p>
            <Button className="bg-brand-medium w-full" onClick={subscribeDetails}>
                Gerenciar Assinatura
            </Button>
            <p>
                Status: <b className={statusStyle(subscription.status)}>{translate(subscription.status)}</b>
            </p>
        </div>
    )
}

export default MyPlanCard;