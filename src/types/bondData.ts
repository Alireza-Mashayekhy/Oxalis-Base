export interface BondData {
    _id: string;
    FUND_NAME: string;
    SYMBOL: string; 
    PARTICIPATION?: string; 
    RATE?: string | number;
    PRICE?: string | number;
    MATURITY_DATE?: string; 
    USER_PRICE?: string; 
    NUMBER_OF_MONTHS?: string | number; 
    NOMINAL_VALUE?: string | number;
    PREFERRED_INTEREST?: string | number;
}