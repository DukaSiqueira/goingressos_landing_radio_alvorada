import { Card, CardContent } from "@/components/ui/card";

interface DonationCardProps {
  value: number;
}

export function DonationCard({ value }: DonationCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-[#123e73]">
            R$ {value}
          </div>
          <p className="text-sm text-[#123e73]">por mês</p>
        </div>
      </CardContent>
    </Card>
  );
} 