export interface BankData {
    _id: string;
    fund_name: string;
    account_number: string;
    bank?: string;
    branch: string;
    nominal_interest?: number;
    real_interest_rate: number;
}