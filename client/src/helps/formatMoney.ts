export const formatMoney = (price: number): string => {
  return price.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};
