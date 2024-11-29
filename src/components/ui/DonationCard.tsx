import { Card, CardContent } from "@/components/ui/card";

interface DonationCardProps {
  value: number;
}

export function DonationCard({ value }: DonationCardProps) {
  return (
    <div className="flip-card w-[120px] h-[100px]">
      <div className="flip-card-inner">
        {/* Frente do card */}
        <Card className="flip-card-front">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#123e73]">
                R$ {value}
              </div>
              <p className="text-sm text-[#123e73]">por mês</p>
            </div>
          </CardContent>
        </Card>

        {/* Verso do card */}
        <Card className="flip-card-back bg-[#123e73]">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                R$ {value}
              </div>
              <p className="text-sm text-white">por mês</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 