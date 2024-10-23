import { AllAssets } from "@/types";

export const getFundNameFromAllAssets = (allassets: AllAssets[]): string[] => {
  const uniqueFunds = allassets?.reduce((acc, item) => {
    if (!acc.includes(item.fund)) {
      acc.push(item.fund);
    }
    return acc;
  }, []);

  return uniqueFunds;
};
export const getSelectedFundNameData = (
  data: AllAssets[],
  fundName: string
): AllAssets[] => {
  return data?.filter((item) => item.fund === fundName);
};
