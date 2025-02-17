export const translate = (text: string) => {
  const translations: { [key: string]: string } = {
    monthly: "Mensal",
    quarterly: "Trimestral",
    semi_annual: "Semestral",
    annual: "Anual",
    months: "Mês",
    days: "Dia",
    weeks: "Semana",
    years: "Ano",
    cancelled: "Cancelado",
    authorized: "Ativo",
    pending: "Pendente",
    paused: "Pausado",
  };
  return translations[text] || text;
};
