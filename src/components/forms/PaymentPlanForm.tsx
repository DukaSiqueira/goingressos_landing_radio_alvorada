import Picker from "../picker";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectItem } from "../ui/select";

const PaymentPlanForm = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());
        
        console.log("Form submitted");
    };

  return (
    <form onSubmit={handleSubmit}>
      <Label>Número do cartão</Label>
      <Input id="card-number" type="text" placeholder="Número do cartão" />
      <Label>Validade</Label>
      <Input id="expiration-date" type="text" placeholder="MM/AA" />
      <Label>CVV</Label>
      <Input id="security-code" type="text" placeholder="CVV" />
      <Label>Nome do titular</Label>
      <Input id="cardholder-name" type="text" placeholder="Nome do titular" />
      <Label>Banco emissor</Label>
      <Picker
        placeholder="Selecione o banco emissor"
        onChange={(value) => console.log(value)}
      >
        <SelectItem value="" disabled>
          Banco emissor
        </SelectItem>
      </Picker>
      <div className="flex flex-row gap-x-4">
        <div>
          <Label>Tipo de documento</Label>
          <Select id="identification-type">
            <SelectItem value="" disabled>
              Tipo de documento
            </SelectItem>
          </Select>
        </div>
        <div>
          <Label>Número do documento</Label>
          <Input
            id="identification-number"
            type="text"
            placeholder="Número do documento"
          />
        </div>
      </div>
      <Label>E-mail</Label>
      <Input id="cardholder-email" type="email" placeholder="E-mail" />
      <Button type="submit" className="bg-brand-medium font-extrabold">
        Finalizar pagamento
      </Button>
    </form>
  );
};

export default PaymentPlanForm;
