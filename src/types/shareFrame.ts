export interface ShareFrame {
  id: string;
  VENTURE_TYPE: string; // نوع صندوق
  VENTURE_NAME: string; // نام صندوق
  DOCUMENTS: string; // اوراق
  SYMBOL: string; // نماد
  INDUSTRY_GROUP: string; // گروه صنعت
  QUANTITY: number; // تعداد
  TOTAL_COST_PRICE: string; // قیمت تمام‌شده کل
  DAY_VALUE: string; // ارزش روز
  TOTAL_DAY_VALUE: number; // ارزش روز کل
  PROFIT_LOSS: string; // سود/زیان
  NET_SALE_VALUE: string; // خالص ارزش فروش کل
}
