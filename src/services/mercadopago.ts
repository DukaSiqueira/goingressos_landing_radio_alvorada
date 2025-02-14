import { MercadoPagoConfig, Preference } from "mercadopago";
import { initMercadoPago } from "@mercadopago/sdk-react";

const client = new MercadoPagoConfig({
  accessToken: process.env.NEXT_PUBLIC_MP_ACCESS_TOKEN ?? "",
});
initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY ?? "", {
  locale: "pt-BR",
});

const preference = new Preference(client);

export { preference };