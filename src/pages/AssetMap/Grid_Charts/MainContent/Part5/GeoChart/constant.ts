
export const cityColorCodes = {
    'تهران': 'ir-5428',
    'مشهد': 'ir-hg',
    'شیراز': 'ir-bs',
    'اصفهان': 'ir-kb',
    'تبریز': 'ir-fa',
  };
  
  export const getCityColorCodes = (city) => {
    return cityColorCodes[city] || null; 
  };
  