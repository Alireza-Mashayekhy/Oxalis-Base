export interface SalesData {
    id: string;
    date: string; // Date fields can be represented as strings in ISO format (e.g., "2024-09-17")
    jalali_date: string;
    city: string;
    product: string;
    quantity_sold: number;
    unit_price: number;
    revenue: number;
    cost_of_goods_sold: number;
    profit: number;
  }
  
  // Interface for ManufacturingDataSerializer
  export interface ManufacturingData {
    id: string;
    date: string; // Date in ISO format
    jalali_date: string;
    city: string;
    product: string;
    quantity: number;
    quality_score: number;
    defective_percentage: number;
    inventory_stock: number;
    delayed_order: number;
    days_delayed?: string; // Optional field as it allows blanks
  }
  
  // Interface for HRDataSerializer
  export interface HRData {
    id: string;
    employee_code: number;
    name: string;
    department: string;
    job_title: string;
    city: string;
    hire_date: string; // Date in ISO format
    hire_date_jalali: string;
    salary: number;
    performance_score: number;
    training_hours: number;
    overtime_hours: number;
    total_payment: number;
  }
  
  // Interface for FinancialDataSerializer
  export interface FinancialData {
    id: string;
    date: string; // Date in ISO format
    jalali_date: string;
    income: number;
    expense: number;
    profit: number;
    cash: number;
    receivables: number;
    debt: number;
    exchange_rate: number;
    operating_cash_flow: number;
  }