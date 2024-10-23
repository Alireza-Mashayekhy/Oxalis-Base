export interface BondFrame {
    id: string;
    VENTURE_TYPE: string;          // نوع صندوق
    VENTURE_NAME: string;          // نام صندوق
    ASSET: string;                 // دارایی
    SYMBOL: string;                // نماد
    PARTICIPATION: string;         // مشارکت
    RATE: string;                  // نرخ
    TYPE: string;                  // نوع
    MATURITY_DATE: string;         // تاریخ سررسید
    NOMINAL_VALUE: string;         // ارزش اسمی
    REMAINING_QUANTITY: string;    // تعداد مانده
    TOTAL_NOMINAL_AMOUNT: string;  // مبلغ اسمی كل
    TOTAL_COST_PRICE: string;      // قیمت تمام‌شده
    PROFIT_MATURITY: string;       // سررسید سود
    DAY_VALUE: string;             // ارزش روز
    TO_MATURITY: string;           // تا سررسید
    USER_PRICE: string;            // قیمت کاربر
    PRICE: string;                 // قیمت
    YTM_PURCHASE: string;          // YTM خرید
    YTM_MOMENT: string;            // YTM لحظه
    EXPERT_PRICE: string;          // قیمت کارشناسی
    TOTAL_EXPERT_VALUE: string;    // ارزش کل کارشناسی
    YTM_USER: string;              // YTM کاربر
}