import { BankData, BondData } from "@/types";

export const transformBondData = (data) => {
  const fundMap = {};

  data?.forEach((item) => {
    if (!fundMap[item.FUND_NAME]) {
      fundMap[item.FUND_NAME] = {
        key: item.FUND_NAME,
        data: {
          FUND_NAME: item.FUND_NAME,
        },
        children: [],
      };
    }

    fundMap[item.FUND_NAME].children.push({
      key: `${item.FUND_NAME}-${item.SYMBOL}`,
      data: {
        SYMBOL: item.SYMBOL,
        PARTICIPATION: item.PARTICIPATION,
        RATE: item.RATE,
        PRICE: item.PRICE,
        MATURITY_DATE: item.MATURITY_DATE,
        USER_PRICE: item.USER_PRICE,
        NUMBER_OF_MONTHS: item.NUMBER_OF_MONTHS,
        NOMINAL_VALUE: item.NOMINAL_VALUE,
        PREFERRED_INTEREST: item.PREFERRED_INTEREST,
        _id: item._id,
      },
    });
  });

  return Object.values(fundMap);
};

export const transformBankData = (data: BankData[]) => {
  const fundMap = {};

  data?.forEach((item) => {
    if (!fundMap[item.fund_name]) {
      fundMap[item.fund_name] = {
        key: item.fund_name,
        data: {
          fund_name: item.fund_name,
        },
        children: [],
      };
    }

    const bankKey = item.bank || "No Bank";
    const fundChildren = fundMap[item.fund_name].children;

    let bankNode = fundChildren.find(
      (child) => child.key === `${item.fund_name}-${bankKey}`
    );
    if (!bankNode) {
      bankNode = {
        key: `${item.fund_name}-${bankKey}`,
        data: {
          bank: bankKey,
        },
        children: [],
      };
      fundChildren.push(bankNode);
    }

    bankNode.children.push({
      key: `${item.fund_name}-${bankKey}-${item._id}`,
      data: {
        _id: item._id,
        account_number: item.account_number,
        branch: item.branch,
        nominal_interest: item.nominal_interest,
        real_interest_rate: item.real_interest_rate,
      },
    });
  });

  return Object.values(fundMap);
};

export const flattenTreeData = (treeData: any) => {
  const flatData = [];

  const traverse = (node, parentData = {}) => {
    const currentData = { ...parentData, ...node.data };

    if (node.children && node.children.length > 0) {
      node.children.forEach((child) => {
        traverse(child, currentData);
      });
    } else {
      flatData.push(currentData);
    }
  };

  treeData.forEach((node) => traverse(node));

  return flatData;
};

function normalizeSpaces(str: string) {
  // Function to remove all spaces, including ZWNJ
  return str
    .replace(/آ/g, "ا")
    .replace(/ی/g, "ي")
    .replace(/ک/g, "ك")
    .replace(/ه/g, "ة")
    .replace(/\u200c/g, "") // Remove zero-width non-joiner (half space)
    .replace(/\s+/g, ""); // Remove all spaces;
}

// Function to perform the search
export function searchBankDataTable(userInput: string, database: any) {
  // Normalize user input
  const normalizedUserInput = normalizeSpaces(userInput).toLowerCase();

  // Filter the database entries based on the normalized user input
  return database.filter((entry) => {
    // Normalize and check each relevant field
    return Object.values(entry).some(
      (value) =>
        typeof value === "string" &&
        normalizeSpaces(value).toLowerCase().includes(normalizedUserInput)
    );
  });
}

// Function to perform the search on Bond Data
// "I only used the fields that are displayed in the table structure for
//  the search.This is because if I didn't do this, the search results
// wouldn't seem very accurate to the user.While the search logic was
// working correctly, the condition was being applied to fields that
// the user couldn't see, making it not tangible or visible to the user."
// if you dont want this you can use filterDataTable function below

export function filterBondDataTable(
  userInput: string,
  database: BondData[]
  // fieldsToSearch: string[]
) {
  // Normalize user input by removing all spaces
  const normalizedUserInput = normalizeSpaces(userInput).toLowerCase();
  const fieldsToSearch = [
    "SYMBOL",
    "USER_PRICE",
    "NUMBER_OF_MONTHS",
    "PREFERRED_INTEREST",
  ];
  // Filter the database entries based on the normalized user input
  return database.filter((entry) => {
    // Normalize and check each relevant field
    return fieldsToSearch.some((field) => {
      const value = entry[field];
      if (typeof value === "string" || typeof value === "number") {
        return normalizeSpaces(String(value))
          .toLowerCase()
          .includes(normalizedUserInput);
      }
      return false;
    });
  });
}

// function to search all the fields in the datatable
// export function filterDataTable(userInput: string, database: any[]) {
//   // Normalize user input by removing all spaces

//   const normalizedUserInput = normalizeSpaces(userInput).toLowerCase();

//   // Filter the database entries based on the normalized user input
//   return database.filter((entry) => {
//     // Normalize and check each relevant field
//     return Object.values(entry).some((value) => {
//       if (typeof value === "string" || typeof value === "number") {
//         return normalizeSpaces(String(value))
//           .toLowerCase()
//           .includes(normalizedUserInput);
//       }
//       return false;
//     });
//   });
// }
// export const flattenTreeData = (treeData) => {
//   const flatData = [];

//   const traverse = (node) => {
//     if (node.children && node.children.length > 0) {
//       node.children.forEach((child) => {
//         flatData.push({
//           FUND_NAME: node.data.FUND_NAME,
//           SYMBOL: child.data.SYMBOL,
//           PARTICIPATION: child.data.PARTICIPATION,
//           RATE: child.data.RATE,
//           PRICE: child.data.PRICE,
//           MATURITY_DATE: child.data.MATURITY_DATE,
//           USER_PRICE: child.data.USER_PRICE,
//           NUMBER_OF_MONTHS: child.data.NUMBER_OF_MONTHS,
//           NOMINAL_VALUE: child.data.NOMINAL_VALUE,
//           PREFERRED_INTEREST: child.data.PREFERRED_INTEREST,
//         });
//         traverse(child); // Recursively traverse children
//       });
//     }
//   };

//   treeData.forEach((node) => traverse(node));

//   return flatData;
// };

// export const transformData = (data) => {
//   const fundMap = {};

//   data.forEach((item) => {
//     if (!fundMap[item.FUND_NAME]) {
//       fundMap[item.FUND_NAME] = {
//         key: item.FUND_NAME,
//         data: {
//           FUND_NAME: item.FUND_NAME,
//         },
//         children: {},
//       };
//     }

//     if (!fundMap[item.FUND_NAME].children[item.bank]) {
//       fundMap[item.FUND_NAME].children[item.bank] = {
//         key: `${item.FUND_NAME}-${item.bank}`,
//         data: { bank: item.bank },
//         children: [],
//       };
//     }

//     fundMap[item.FUND_NAME].children[item.bank].children.push({
//       key: item._id,
//       data: {
//         account_number: item.account_number,
//         branch: item.branch,
//         nominal_interest: item.nominal_interest,
//         real_interest_rate: item.real_interest_rate,
//       },
//     });
//   });

//   const result = Object.values(fundMap).map((fund) => ({
//     ...fund,
//     children: Object.values(fund.children),
//   }));
//   console.log({ result });

//   return result;
// };
