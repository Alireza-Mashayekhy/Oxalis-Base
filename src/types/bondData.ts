export interface BondData {
    _id?: string; // شناسه منحصر به فرد
    FUND_NAME?: string; // نام صندوق
    symbol: string; // این خاصیت الزامی است
    sub_industry?: string;
    name?: string;
    nominal_amount_per_unit?: number;
    total_nominal_amount?: number;
    accepted_amount?: number;
    publish_date?: string;
    maturity_date?: string;
    interest_payment_schedule?: string;
    nominal_interest_rate?: number | string;
    duration_months?: number;
    subject?: string;
    total_units?: number;
    accepted_units?: number;
    issuer?: string;
    subscription_guarantor?: string; // اضافه شده
    guarantor?: string;
    interest_payment_agent?: string;
    sponsor?: string; // اضافه شده
    market_maker?: string; // اضافه شده
    sales_agent?: string; // اضافه شده
    auditor?: string; // اضافه شده
    symbol_status?: string;
    block_trade_permission?: string;
}
