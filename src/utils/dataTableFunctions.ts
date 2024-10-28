import { ColumnBodyOptions } from 'primereact/column';
import {
    BondFrame,
    CashFlowFrame,
    Data,
    Deposite_Frame,
    ShareFrame,
} from '@/types';
import TreeNode from 'primereact/api';

interface OrganizedData {
    [ventureType: string]: {
        [ventureName: string]: {
            [assetType: string]: Data[];
        };
    };
}
interface TreeNode {
    key: string;
    data: any;
    children?: TreeNode[];
}
interface bankAccountData {
    fund_name: string;
    account_number: string;
    nominal_interest: string | number | undefined;
    real_intrest_rate?: string | number | undefined;
}
interface EquityDataForDataTable {
    FUND_NAME: string;
    SYMBOL: string;
    PRICE?: string | number | undefined;
    RATE?: string | number | undefined;
    USER_PRICE?: string | number | undefined;
}

type Option = {
    value: string;
    label: string;
};

export const createTreeTableDataOldVersion = (data: Data[]): TreeNode[] => {
    const treeData: Map<string, TreeNode> = new Map();

    data.forEach((item) => {
        const ventureTypeKey = item.VENTURE_TYPE;
        const ventureNameKey = `${ventureTypeKey}_${item.VENTURE_NAME}`;
        const assetTypeKey = `${ventureNameKey}_${item.ASSET_TYPE}`;

        // Retrieve or create the VENTURE_TYPE node
        if (!treeData.has(ventureTypeKey)) {
            // ventureTypeKey is the key, and the object following it is the value.
            treeData.set(ventureTypeKey, {
                key: ventureTypeKey,
                // data: createEmptyDataObject(item, "name", item.VENTURE_TYPE),
                data: { name: item.VENTURE_TYPE, DAY_VALUE: 0 },
                children: [],
            });
        }
        // is used after the block of code that potentially adds a new entry to treeData to ensure that
        //  ventureTypeNode refers to the current node associated with ventureTypeKey,
        //  whether it was just created or already existed.
        const ventureTypeNode = treeData.get(ventureTypeKey);
        // Retrieve or create the VENTURE_NAME node within the VENTURE_TYPE node

        let ventureNameNode = ventureTypeNode.children.find(
            (node) => node.key === ventureNameKey
        );

        if (!ventureNameNode) {
            ventureNameNode = {
                key: ventureNameKey,
                // data: createEmptyDataObject(item, "name", item.VENTURE_NAME),
                data: { name: item.VENTURE_NAME, DAY_VALUE: 0 },
                children: [],
            };
            ventureTypeNode.children.push(ventureNameNode);
        }

        // Retrieve or create the ASSET_TYPE node within the VENTURE_NAME node
        let assetTypeNode = ventureNameNode.children.find(
            (node) => node.key === assetTypeKey
        );
        if (!assetTypeNode) {
            assetTypeNode = {
                key: assetTypeKey,
                // data: createEmptyDataObject(item, "name", item.ASSET_TYPE),
                data: { name: item.ASSET_TYPE, DAY_VALUE: 0 },
                children: [],
            };
            ventureNameNode.children.push(assetTypeNode);
        }

        // Aggregate DAY_VALUE at each level
        const dayValue = parseFloat(item.DAY_VALUE) || 0;
        ventureTypeNode.data.DAY_VALUE += dayValue;
        ventureNameNode.data.DAY_VALUE += dayValue;
        assetTypeNode.data.DAY_VALUE += dayValue;

        // Add all other item fields to the ASSET_TYPE node, excluding VENTURE_TYPE, VENTURE_NAME, and ASSET_TYPE
        const { VENTURE_TYPE, VENTURE_NAME, ASSET_TYPE, ...remainingFields } =
            item;
        assetTypeNode.children.push({
            key: `${assetTypeKey}_${item._id}`,
            data: remainingFields,
        });
    });

    return Array.from(treeData.values());
};
export const createTreeTableData = (data: Data[]): TreeNode[] => {
    const treeData: Map<string, TreeNode> = new Map();

    data.forEach((item) => {
        const ventureTypeKey = item.VENTURE_TYPE;
        const ventureNameKey = `${ventureTypeKey}_${item.VENTURE_NAME}`;
        const assetTypeKey = `${ventureNameKey}_${item.ASSET_TYPE}`;

        // Retrieve or create the VENTURE_TYPE node
        if (!treeData.has(ventureTypeKey)) {
            // ventureTypeKey is the key, and the object following it is the value.
            treeData.set(ventureTypeKey, {
                key: ventureTypeKey,
                // data: createEmptyDataObject(item, "name", item.VENTURE_TYPE),
                data: { name: item.VENTURE_TYPE, DAY_VALUE: 0 },
                children: [],
            });
        }
        // is used after the block of code that potentially adds a new entry to treeData to ensure that
        //  ventureTypeNode refers to the current node associated with ventureTypeKey,
        //  whether it was just created or already existed.
        const ventureTypeNode = treeData.get(ventureTypeKey);
        // Retrieve or create the VENTURE_NAME node within the VENTURE_TYPE node

        let ventureNameNode = ventureTypeNode.children.find(
            (node) => node.key === ventureNameKey
        );

        if (!ventureNameNode) {
            ventureNameNode = {
                key: ventureNameKey,
                // data: createEmptyDataObject(item, "name", item.VENTURE_NAME),
                data: { name: item.VENTURE_NAME, DAY_VALUE: 0 },
                children: [],
            };
            ventureTypeNode.children.push(ventureNameNode);
        }

        // Retrieve or create the ASSET_TYPE node within the VENTURE_NAME node
        let assetTypeNode = ventureNameNode.children.find(
            (node) => node.key === assetTypeKey
        );
        if (!assetTypeNode) {
            assetTypeNode = {
                key: assetTypeKey,
                // data: createEmptyDataObject(item, "name", item.ASSET_TYPE),
                data: { name: item.ASSET_TYPE, DAY_VALUE: 0 },
                children: [],
            };
            ventureNameNode.children.push(assetTypeNode);
        }

        // Aggregate DAY_VALUE at each level
        const dayValue = parseFloat(item.DAY_VALUE) || 0;
        ventureTypeNode.data.DAY_VALUE += dayValue;
        ventureNameNode.data.DAY_VALUE += dayValue;
        assetTypeNode.data.DAY_VALUE += dayValue;

        // Add all other item fields to the ASSET_TYPE node, excluding VENTURE_TYPE, VENTURE_NAME, and ASSET_TYPE
        const { VENTURE_TYPE, VENTURE_NAME, ASSET_TYPE, ...remainingFields } =
            item;
        assetTypeNode.children.push({
            key: `${assetTypeKey}_${item._id}`,
            data: remainingFields,
        });
    });

    return Array.from(treeData.values());
};
export const createTreeTableDataWithWeight = (data: Data[]): TreeNode[] => {
    const treeData: Map<string, TreeNode> = new Map();

    data.forEach((item) => {
        const ventureTypeKey = item.VENTURE_TYPE;
        const ventureNameKey = `${ventureTypeKey}_${item.VENTURE_NAME}`;
        const assetTypeKey = `${ventureNameKey}_${item.ASSET_TYPE}`;

        // Retrieve or create the VENTURE_TYPE node
        if (!treeData.has(ventureTypeKey)) {
            treeData.set(ventureTypeKey, {
                key: ventureTypeKey,
                data: {
                    name: item.VENTURE_TYPE,
                    DAY_VALUE: 0,
                    EFFECTIVE_YIELD: 0,
                    TOTAL_WEIGHT: 0,
                },
                children: [],
            });
        }
        const ventureTypeNode = treeData.get(ventureTypeKey);

        // Retrieve or create the VENTURE_NAME node within the VENTURE_TYPE node
        let ventureNameNode = ventureTypeNode.children.find(
            (node) => node.key === ventureNameKey
        );

        if (!ventureNameNode) {
            ventureNameNode = {
                key: ventureNameKey,
                data: {
                    name: item.VENTURE_NAME,
                    DAY_VALUE: 0,
                    EFFECTIVE_YIELD: 0,
                    TOTAL_WEIGHT: 0,
                },
                children: [],
            };
            ventureTypeNode.children.push(ventureNameNode);
        }

        // Retrieve or create the ASSET_TYPE node within the VENTURE_NAME node
        let assetTypeNode = ventureNameNode.children.find(
            (node) => node.key === assetTypeKey
        );
        if (!assetTypeNode) {
            assetTypeNode = {
                key: assetTypeKey,
                data: {
                    name: item.ASSET_TYPE,
                    DAY_VALUE: 0,
                    EFFECTIVE_YIELD: 0,
                    TOTAL_WEIGHT: 0,
                },
                children: [],
            };
            ventureNameNode.children.push(assetTypeNode);
        }

        // Aggregate DAY_VALUE and calculate weighted EFFECTIVE_YIELD at each level
        const dayValue = parseFloat(item.DAY_VALUE) || 0;
        const effectiveYield = parseFloat(item.EFFECTIVE_YIELD) || 0;
        ventureTypeNode.data.DAY_VALUE += dayValue;
        ventureNameNode.data.DAY_VALUE += dayValue;
        assetTypeNode.data.DAY_VALUE += dayValue;

        if (dayValue > 0 && !isNaN(effectiveYield) && effectiveYield > 0) {
            ventureTypeNode.data.EFFECTIVE_YIELD += dayValue * effectiveYield;
            ventureNameNode.data.EFFECTIVE_YIELD += dayValue * effectiveYield;
            assetTypeNode.data.EFFECTIVE_YIELD += dayValue * effectiveYield;

            ventureTypeNode.data.TOTAL_WEIGHT += dayValue;
            ventureNameNode.data.TOTAL_WEIGHT += dayValue;
            assetTypeNode.data.TOTAL_WEIGHT += dayValue;
        }

        // Add all other item fields to the ASSET_TYPE node, excluding VENTURE_TYPE, VENTURE_NAME, and ASSET_TYPE
        const { VENTURE_TYPE, VENTURE_NAME, ASSET_TYPE, ...remainingFields } =
            item;
        assetTypeNode.children.push({
            key: `${assetTypeKey}_${item._id}`,
            data: remainingFields,
        });
    });

    // Calculate the final weighted average for each node
    treeData.forEach((ventureTypeNode) => {
        if (ventureTypeNode.data.TOTAL_WEIGHT > 0) {
            ventureTypeNode.data.EFFECTIVE_YIELD /=
                ventureTypeNode.data.TOTAL_WEIGHT;
        }
        ventureTypeNode.children.forEach((ventureNameNode) => {
            if (ventureNameNode.data.TOTAL_WEIGHT > 0) {
                ventureNameNode.data.EFFECTIVE_YIELD /=
                    ventureNameNode.data.TOTAL_WEIGHT;
            }
            ventureNameNode.children.forEach((assetTypeNode) => {
                if (assetTypeNode.data.TOTAL_WEIGHT > 0) {
                    assetTypeNode.data.EFFECTIVE_YIELD /=
                        assetTypeNode.data.TOTAL_WEIGHT;
                }
            });
        });
    });

    return Array.from(treeData.values());
};
// export const createCashFlowTreeTableData = (
//   data: CashFlowFrame[]
// ): TreeNode[] => {
//   const treeData: Map<string, TreeNode> = new Map();

//   data.forEach((item) => {
//     const ventureTypeKey = item.VENTURE_TYPE;
//     const ventureNameKey = `${ventureTypeKey}_${item.VENTURE_NAME}`;
//     const assetTypeKey = `${ventureNameKey}_${item.DATE}`;

//     // Retrieve or create the VENTURE_TYPE node
//     if (!treeData.has(ventureTypeKey)) {
//       treeData.set(ventureTypeKey, {
//         key: ventureTypeKey,
//         data: { name: item.VENTURE_TYPE, CASH_FLOW: 0 },
//         children: [],
//       });
//     }
//     const ventureTypeNode = treeData.get(ventureTypeKey);

//     // Retrieve or create the VENTURE_NAME node within the VENTURE_TYPE node
//     let ventureNameNode = ventureTypeNode.children.find(
//       (node) => node.key === ventureNameKey
//     );
//     if (!ventureNameNode) {
//       ventureNameNode = {
//         key: ventureNameKey,
//         data: { name: item.VENTURE_NAME, CASH_FLOW: 0 },
//         children: [],
//       };
//       ventureTypeNode.children.push(ventureNameNode);
//     }

//     // Retrieve or create the ASSET_TYPE node within the VENTURE_NAME node
//     let assetTypeNode = ventureNameNode.children.find(
//       (node) => node.key === assetTypeKey
//     );
//     if (!assetTypeNode) {
//       assetTypeNode = {
//         key: assetTypeKey,
//         data: { name: item.DATE, CASH_FLOW: 0 },
//         children: [],
//       };
//       ventureNameNode.children.push(assetTypeNode);
//     }

//     // Aggregate DAY_VALUE at each level
//     const cf_value = parseFloat(item.CASH_FLOW) || 0;
//     ventureTypeNode.data.CASH_FLOW += cf_value;
//     ventureNameNode.data.CASH_FLOW += cf_value;
//     assetTypeNode.data.CASH_FLOW += cf_value;

//     // Add all other item fields to the ASSET_TYPE node, excluding VENTURE_TYPE, VENTURE_NAME, and ASSET_TYPE
//     const { VENTURE_TYPE, VENTURE_NAME, DATE, ...remainingFields } = item;
//     assetTypeNode.children.push({
//       key: `${assetTypeKey}_${item._id}`,
//       data: remainingFields,
//     });
//   });

//   return Array.from(treeData.values());
// };

export const createCashFlowTreeTableData = (data) => {
    const treeData = new Map();

    data.forEach((item) => {
        const dateKey = item.DATE;
        const symbolKey = `${dateKey}_${item.SYMBOL}`;
        const ventureTypeKey = `${symbolKey}_${item.VENTURE_TYPE}`;
        const ventureNameKey = `${ventureTypeKey}_${item.VENTURE_NAME}`;

        // Retrieve or create the DATE node
        if (!treeData.has(dateKey)) {
            treeData.set(dateKey, {
                key: dateKey,
                data: { name: item.DATE, CASH_FLOW: 0 },
                children: [],
            });
        }
        const dateNode = treeData.get(dateKey);

        // Retrieve or create the SYMBOL node within the DATE node
        let symbolNode = dateNode.children.find(
            (node) => node.key === symbolKey
        );
        if (!symbolNode) {
            symbolNode = {
                key: symbolKey,
                data: { name: item.SYMBOL, CASH_FLOW: 0 },
                children: [],
            };
            dateNode.children.push(symbolNode);
        }

        // Retrieve or create the VENTURE_TYPE node within the SYMBOL node
        let ventureTypeNode = symbolNode.children.find(
            (node) => node.key === ventureTypeKey
        );
        if (!ventureTypeNode) {
            ventureTypeNode = {
                key: ventureTypeKey,
                data: { name: item.VENTURE_TYPE, CASH_FLOW: 0 },
                children: [],
            };
            symbolNode.children.push(ventureTypeNode);
        }

        // Retrieve or create the VENTURE_NAME node within the VENTURE_TYPE node
        let ventureNameNode = ventureTypeNode.children.find(
            (node) => node.key === ventureNameKey
        );
        if (!ventureNameNode) {
            ventureNameNode = {
                key: ventureNameKey,
                data: { name: item.VENTURE_NAME, CASH_FLOW: 0 },
                children: [],
            };
            ventureTypeNode.children.push(ventureNameNode);
        }

        // Aggregate CASH_FLOW at each level
        const cashFlowValue = parseFloat(item.CASH_FLOW) || 0;
        dateNode.data.CASH_FLOW += cashFlowValue;
        symbolNode.data.CASH_FLOW += cashFlowValue;
        ventureTypeNode.data.CASH_FLOW += cashFlowValue;
        ventureNameNode.data.CASH_FLOW += cashFlowValue;

        // Add all other item fields to the VENTURE_NAME node, excluding DATE, SYMBOL, VENTURE_TYPE, and VENTURE_NAME
        const { DATE, SYMBOL, VENTURE_TYPE, VENTURE_NAME, ...remainingFields } =
            item;
        ventureNameNode.children.push({
            key: `${ventureNameKey}_${item._id}`,
            data: remainingFields,
        });
    });

    return Array.from(treeData.values());
};

export const createDepositeTreeTableData = (
    data: Deposite_Frame[]
): TreeNode[] => {
    const treeData: Map<string, TreeNode> = new Map();

    data.forEach((item) => {
        const bankKey = item.BANK;
        const ventureTypeKey = `${bankKey}_${item.VENTURE_TYPE}`;
        const ventureNameKey = `${ventureTypeKey}_${item.VENTURE_NAME}`;

        // Retrieve or create the VENTURE_TYPE node
        if (!treeData.has(bankKey)) {
            treeData.set(bankKey, {
                key: bankKey,
                data: { name: item.BANK, DAY_VALUE: 0 },
                children: [],
            });
        }
        const bankNode = treeData.get(bankKey);

        // Retrieve or create the VENTURE_NAME node within the VENTURE_TYPE node
        let ventureTypeNode = bankNode.children.find(
            (node) => node.key === ventureTypeKey
        );
        if (!ventureTypeNode) {
            ventureTypeNode = {
                key: ventureTypeKey,
                data: { name: item.VENTURE_TYPE, DAY_VALUE: 0 },
                children: [],
            };
            bankNode.children.push(ventureTypeNode);
        }

        // Retrieve or create the ASSET_TYPE node within the VENTURE_NAME node
        let ventureNameNode = ventureTypeNode.children.find(
            (node) => node.key === ventureNameKey
        );
        if (!ventureNameNode) {
            ventureNameNode = {
                key: ventureNameKey,
                data: { name: item.VENTURE_NAME, DAY_VALUE: 0 },
                children: [],
            };
            ventureTypeNode.children.push(ventureNameNode);
        }
        const dayValue = parseFloat(item.DAY_VALUE) || 0;
        bankNode.data.DAY_VALUE += dayValue;
        ventureTypeNode.data.DAY_VALUE += dayValue;
        ventureNameNode.data.DAY_VALUE += dayValue;

        // Add all other item fields to the ASSET_TYPE node, excluding VENTURE_TYPE, VENTURE_NAME, and ASSET_TYPE
        const { VENTURE_TYPE, VENTURE_NAME, BANK, ...remainingFields } = item;
        ventureNameNode.children.push({
            key: `${ventureNameKey}_${item.id}`,
            data: remainingFields,
        });
    });

    return Array.from(treeData.values());
};
// This is the previous function for deposite grid with different expansion order
// export const createDepositeTreeTableDataWithWeightedAvarage = (
//   data: Deposite_Frame[]
// ): TreeNode[] => {
//   const treeData: Map<string, TreeNode> = new Map();

//   data.forEach((item) => {
//     const bankKey = item.BANK;
//     const ventureTypeKey = `${bankKey}_${item.VENTURE_TYPE}`;
//     const ventureNameKey = `${ventureTypeKey}_${item.VENTURE_NAME}`;

//     // Retrieve or create the BANK node
//     if (!treeData.has(bankKey)) {
//       treeData.set(bankKey, {
//         key: bankKey,
//         data: {
//           name: item.BANK,
//           DAY_VALUE: 0,
//           REAL_PROFIT: 0,
//           TOTAL_WEIGHT: 0,
//         },
//         children: [],
//       });
//     }
//     const bankNode = treeData.get(bankKey);

//     // Retrieve or create the VENTURE_TYPE node within the BANK node
//     let ventureTypeNode = bankNode.children.find(
//       (node) => node.key === ventureTypeKey
//     );
//     if (!ventureTypeNode) {
//       ventureTypeNode = {
//         key: ventureTypeKey,
//         data: {
//           name: item.VENTURE_TYPE,
//           DAY_VALUE: 0,
//           REAL_PROFIT: 0,
//           TOTAL_WEIGHT: 0,
//         },
//         children: [],
//       };
//       bankNode.children.push(ventureTypeNode);
//     }

//     // Retrieve or create the VENTURE_NAME node within the VENTURE_TYPE node
//     let ventureNameNode = ventureTypeNode.children.find(
//       (node) => node.key === ventureNameKey
//     );
//     if (!ventureNameNode) {
//       ventureNameNode = {
//         key: ventureNameKey,
//         data: {
//           name: item.VENTURE_NAME,
//           DAY_VALUE: 0,
//           REAL_PROFIT: 0,
//           TOTAL_WEIGHT: 0,
//         },
//         children: [],
//       };
//       ventureTypeNode.children.push(ventureNameNode);
//     }

//     // Aggregate DAY_VALUE at each level
//     const dayValue = parseFloat(item.DAY_VALUE) || 0;
//     bankNode.data.DAY_VALUE += dayValue;
//     ventureTypeNode.data.DAY_VALUE += dayValue;
//     ventureNameNode.data.DAY_VALUE += dayValue;

//     // Calculate weighted REAL_PROFIT at each level
//     const realProfit = parseFloat(item.REAL_PROFIT);
//     if (!isNaN(realProfit) && realProfit > 0 && dayValue > 0) {
//       bankNode.data.REAL_PROFIT += dayValue * realProfit;
//       ventureTypeNode.data.REAL_PROFIT += dayValue * realProfit;
//       ventureNameNode.data.REAL_PROFIT += dayValue * realProfit;

//       bankNode.data.TOTAL_WEIGHT += dayValue;
//       ventureTypeNode.data.TOTAL_WEIGHT += dayValue;
//       ventureNameNode.data.TOTAL_WEIGHT += dayValue;
//     }

//     // Add all other item fields to the VENTURE_NAME node, excluding BANK, VENTURE_TYPE, and VENTURE_NAME
//     const { BANK, VENTURE_TYPE, VENTURE_NAME, ...remainingFields } = item;
//     ventureNameNode.children.push({
//       key: `${ventureNameKey}_${item.id}`,
//       data: remainingFields,
//     });
//   });

//   // Calculate the final weighted average for each node
//   treeData.forEach((bankNode) => {
//     if (bankNode.data.TOTAL_WEIGHT > 0) {
//       bankNode.data.REAL_PROFIT =
//         bankNode.data.REAL_PROFIT / bankNode.data.TOTAL_WEIGHT;
//     }
//     bankNode.children.forEach((ventureTypeNode) => {
//       if (ventureTypeNode.data.TOTAL_WEIGHT > 0) {
//         ventureTypeNode.data.REAL_PROFIT =
//           ventureTypeNode.data.REAL_PROFIT / ventureTypeNode.data.TOTAL_WEIGHT;
//       }
//       ventureTypeNode.children.forEach((ventureNameNode) => {
//         if (ventureNameNode.data.TOTAL_WEIGHT > 0) {
//           ventureNameNode.data.REAL_PROFIT =
//             ventureNameNode.data.REAL_PROFIT /
//             ventureNameNode.data.TOTAL_WEIGHT;
//         }
//       });
//     });
//   });

//   return Array.from(treeData.values());
// };

export const createDepositeTreeTableDataWithExpansion = (data) => {
    const treeData = new Map();

    data.forEach((item) => {
        const bankKey = item.BANK;
        const accountTypeKey = `${bankKey}_${item.ACCOUNT_TYPE}`;
        const ventureTypeKey = `${accountTypeKey}_${item.VENTURE_TYPE}`;
        const ventureNameKey = `${ventureTypeKey}_${item.VENTURE_NAME}`;

        // Retrieve or create the BANK node
        if (!treeData.has(bankKey)) {
            treeData.set(bankKey, {
                key: bankKey,
                data: {
                    name: item.BANK,
                    DAY_VALUE: 0,
                    REAL_PROFIT: 0,
                    TOTAL_WEIGHT: 0,
                },
                children: [],
            });
        }
        const bankNode = treeData.get(bankKey);

        // Retrieve or create the ACCOUNT_TYPE node within the BANK node
        let accountTypeNode = bankNode.children.find(
            (node) => node.key === accountTypeKey
        );
        if (!accountTypeNode) {
            accountTypeNode = {
                key: accountTypeKey,
                data: {
                    name: item.ACCOUNT_TYPE,
                    DAY_VALUE: 0,
                    REAL_PROFIT: 0,
                    TOTAL_WEIGHT: 0,
                },
                children: [],
            };
            bankNode.children.push(accountTypeNode);
        }

        // Retrieve or create the VENTURE_TYPE node within the ACCOUNT_TYPE node
        let ventureTypeNode = accountTypeNode.children.find(
            (node) => node.key === ventureTypeKey
        );
        if (!ventureTypeNode) {
            ventureTypeNode = {
                key: ventureTypeKey,
                data: {
                    name: item.VENTURE_TYPE,
                    DAY_VALUE: 0,
                    REAL_PROFIT: 0,
                    TOTAL_WEIGHT: 0,
                },
                children: [],
            };
            accountTypeNode.children.push(ventureTypeNode);
        }

        // Retrieve or create the VENTURE_NAME node within the VENTURE_TYPE node
        let ventureNameNode = ventureTypeNode.children.find(
            (node) => node.key === ventureNameKey
        );
        if (!ventureNameNode) {
            ventureNameNode = {
                key: ventureNameKey,
                data: {
                    name: item.VENTURE_NAME,
                    DAY_VALUE: 0,
                    REAL_PROFIT: 0,
                    TOTAL_WEIGHT: 0,
                },
                children: [],
            };
            ventureTypeNode.children.push(ventureNameNode);
        }

        // Aggregate DAY_VALUE at each level
        const dayValue = parseFloat(item.DAY_VALUE) || 0;
        bankNode.data.DAY_VALUE += dayValue;
        accountTypeNode.data.DAY_VALUE += dayValue;
        ventureTypeNode.data.DAY_VALUE += dayValue;
        ventureNameNode.data.DAY_VALUE += dayValue;

        // Calculate weighted REAL_PROFIT at each level
        const realProfit = parseFloat(item.REAL_PROFIT);
        if (!isNaN(realProfit) && realProfit > 0 && dayValue > 0) {
            bankNode.data.REAL_PROFIT += dayValue * realProfit;
            accountTypeNode.data.REAL_PROFIT += dayValue * realProfit;
            ventureTypeNode.data.REAL_PROFIT += dayValue * realProfit;
            ventureNameNode.data.REAL_PROFIT += dayValue * realProfit;

            bankNode.data.TOTAL_WEIGHT += dayValue;
            accountTypeNode.data.TOTAL_WEIGHT += dayValue;
            ventureTypeNode.data.TOTAL_WEIGHT += dayValue;
            ventureNameNode.data.TOTAL_WEIGHT += dayValue;
        }

        // Add all other item fields to the VENTURE_NAME node, excluding BANK, ACCOUNT_TYPE, VENTURE_TYPE, and VENTURE_NAME
        const {
            BANK,
            ACCOUNT_TYPE,
            VENTURE_TYPE,
            VENTURE_NAME,
            ...remainingFields
        } = item;
        ventureNameNode.children.push({
            key: `${ventureNameKey}_${item.id}`,
            data: remainingFields,
        });
    });

    // Calculate the final weighted average for each node
    treeData.forEach((bankNode) => {
        if (bankNode.data.TOTAL_WEIGHT > 0) {
            bankNode.data.REAL_PROFIT =
                bankNode.data.REAL_PROFIT / bankNode.data.TOTAL_WEIGHT;
        }
        bankNode.children.forEach((accountTypeNode) => {
            if (accountTypeNode.data.TOTAL_WEIGHT > 0) {
                accountTypeNode.data.REAL_PROFIT =
                    accountTypeNode.data.REAL_PROFIT /
                    accountTypeNode.data.TOTAL_WEIGHT;
            }
            accountTypeNode.children.forEach((ventureTypeNode) => {
                if (ventureTypeNode.data.TOTAL_WEIGHT > 0) {
                    ventureTypeNode.data.REAL_PROFIT =
                        ventureTypeNode.data.REAL_PROFIT /
                        ventureTypeNode.data.TOTAL_WEIGHT;
                }
                ventureTypeNode.children.forEach((ventureNameNode) => {
                    if (ventureNameNode.data.TOTAL_WEIGHT > 0) {
                        ventureNameNode.data.REAL_PROFIT =
                            ventureNameNode.data.REAL_PROFIT /
                            ventureNameNode.data.TOTAL_WEIGHT;
                    }
                });
            });
        });
    });

    return Array.from(treeData.values());
};

export const createShareTreeTableData = (data: ShareFrame[]): TreeNode[] => {
    const treeData: Map<string, TreeNode> = new Map();

    data.forEach((item) => {
        const symbolKey = item.SYMBOL;
        const ventureTypeKey = `${symbolKey}_${item.VENTURE_TYPE}`;
        const ventureNameKey = `${ventureTypeKey}_${item.VENTURE_NAME}`;

        // Retrieve or create the VENTURE_TYPE node
        if (!treeData.has(symbolKey)) {
            treeData.set(symbolKey, {
                key: symbolKey,
                data: {
                    name: item.SYMBOL,
                    DAY_VALUE: 0,
                    TOTAL_COST_PRICE: 0,
                    NET_SALE_VALUE: 0,
                    PROFIT_LOSS: 0,
                },
                children: [],
            });
        }
        const symbolNode = treeData.get(symbolKey);

        // Retrieve or create the VENTURE_NAME node within the VENTURE_TYPE node
        let ventureTypeNode = symbolNode.children.find(
            (node) => node.key === ventureTypeKey
        );
        if (!ventureTypeNode) {
            ventureTypeNode = {
                key: ventureTypeKey,
                data: {
                    name: item.VENTURE_TYPE,
                    DAY_VALUE: 0,
                    TOTAL_COST_PRICE: 0,
                    NET_SALE_VALUE: 0,
                    PROFIT_LOSS: 0,
                },
                children: [],
            };
            symbolNode.children.push(ventureTypeNode);
        }

        // Retrieve or create the ASSET_TYPE node within the VENTURE_NAME node
        let vantureNameNode = ventureTypeNode.children.find(
            (node) => node.key === ventureNameKey
        );
        if (!vantureNameNode) {
            vantureNameNode = {
                key: ventureNameKey,
                data: {
                    name: item.VENTURE_NAME,
                    DAY_VALUE: 0,
                    TOTAL_COST_PRICE: 0,
                    NET_SALE_VALUE: 0,
                    PROFIT_LOSS: 0,
                },
                children: [],
            };
            ventureTypeNode.children.push(vantureNameNode);
        }
        const dayValue = parseFloat(item.DAY_VALUE) || 0;
        symbolNode.data.DAY_VALUE += dayValue;
        ventureTypeNode.data.DAY_VALUE += dayValue;
        vantureNameNode.data.DAY_VALUE += dayValue;

        const totalCostPrice = parseFloat(item.TOTAL_COST_PRICE) || 0;
        symbolNode.data.TOTAL_COST_PRICE += totalCostPrice;
        ventureTypeNode.data.TOTAL_COST_PRICE += totalCostPrice;
        vantureNameNode.data.TOTAL_COST_PRICE += totalCostPrice;

        const netSaleValue = parseFloat(item.NET_SALE_VALUE) || 0;
        symbolNode.data.NET_SALE_VALUE += netSaleValue;
        ventureTypeNode.data.NET_SALE_VALUE += netSaleValue;
        vantureNameNode.data.NET_SALE_VALUE += netSaleValue;

        const profitLoss = parseFloat(item.PROFIT_LOSS) || 0;
        symbolNode.data.PROFIT_LOSS += profitLoss;
        ventureTypeNode.data.PROFIT_LOSS += profitLoss;
        vantureNameNode.data.PROFIT_LOSS += profitLoss;

        // Add all other item fields to the ASSET_TYPE node, excluding VENTURE_TYPE, VENTURE_NAME, and ASSET_TYPE
        const { SYMBOL, VENTURE_TYPE, VENTURE_NAME, ...remainingFields } = item;
        vantureNameNode.children.push({
            key: `${ventureNameKey}_${item.id}`,
            data: remainingFields,
        });
    });

    return Array.from(treeData.values());
};

export const createBondTreeTableData = (data: BondFrame[]): TreeNode[] => {
    const treeData: Map<string, TreeNode> = new Map();

    data.forEach((item) => {
        const assetTypeKey = item.ASSET;
        const assetNameKey = `${assetTypeKey}_${item.SYMBOL}`;
        const ventureNameKey = `${assetNameKey}_${item.VENTURE_NAME}`;

        // Retrieve or create the VENTURE_TYPE node
        if (!treeData.has(assetTypeKey)) {
            treeData.set(assetTypeKey, {
                key: assetTypeKey,
                data: { name: item.ASSET, DAY_VALUE: 0 },
                children: [],
            });
        }
        const assetTypeNode = treeData.get(assetTypeKey);

        // Retrieve or create the VENTURE_NAME node within the VENTURE_TYPE node
        let assetNameNode = assetTypeNode.children.find(
            (node) => node.key === assetNameKey
        );
        if (!assetNameNode) {
            assetNameNode = {
                key: assetNameKey,
                data: { name: item.SYMBOL, DAY_VALUE: 0 },
                children: [],
            };
            assetTypeNode.children.push(assetNameNode);
        }

        // Retrieve or create the ASSET_TYPE node within the VENTURE_NAME node
        let ventureNameNode = assetNameNode.children.find(
            (node) => node.key === ventureNameKey
        );
        if (!ventureNameNode) {
            ventureNameNode = {
                key: ventureNameKey,
                data: { name: item.VENTURE_NAME, DAY_VALUE: 0 },
                children: [],
            };
            assetNameNode.children.push(ventureNameNode);
        }
        const dayValue = parseFloat(item.DAY_VALUE) || 0;
        assetTypeNode.data.DAY_VALUE += dayValue;
        assetNameNode.data.DAY_VALUE += dayValue;
        ventureNameNode.data.DAY_VALUE += dayValue;

        // Add all other item fields to the ASSET_TYPE node, excluding VENTURE_TYPE, VENTURE_NAME, and ASSET_TYPE
        const { ASSET, VENTURE_NAME, SYMBOL, ...remainingFields } = item;
        ventureNameNode.children.push({
            key: `${ventureNameKey}_${item.id}`,
            data: remainingFields,
        });
    });

    return Array.from(treeData.values());
};
export const createBondTreeTableDataWithWeightedAverage = (
    data: BondFrame[]
): TreeNode[] => {
    const treeData: Map<string, TreeNode> = new Map();

    data.forEach((item) => {
        const assetTypeKey = item.ASSET;
        const assetNameKey = `${assetTypeKey}_${item.SYMBOL}`;
        const ventureNameKey = `${assetNameKey}_${item.VENTURE_NAME}`;

        // Retrieve or create the ASSET node
        if (!treeData.has(assetTypeKey)) {
            treeData.set(assetTypeKey, {
                key: assetTypeKey,
                data: {
                    name: item.ASSET,
                    DAY_VALUE: 0,
                    YTM_MOMENT: 0,
                    TOTAL_WEIGHT: 0,
                },
                children: [],
            });
        }
        const assetTypeNode = treeData.get(assetTypeKey);

        // Retrieve or create the SYMBOL node within the ASSET node
        let assetNameNode = assetTypeNode.children.find(
            (node) => node.key === assetNameKey
        );
        if (!assetNameNode) {
            assetNameNode = {
                key: assetNameKey,
                data: {
                    name: item.SYMBOL,
                    DAY_VALUE: 0,
                    YTM_MOMENT: 0,
                    TOTAL_WEIGHT: 0,
                },
                children: [],
            };
            assetTypeNode.children.push(assetNameNode);
        }

        // Retrieve or create the VENTURE_NAME node within the SYMBOL node
        let ventureNameNode = assetNameNode.children.find(
            (node) => node.key === ventureNameKey
        );
        if (!ventureNameNode) {
            ventureNameNode = {
                key: ventureNameKey,
                data: {
                    name: item.VENTURE_NAME,
                    DAY_VALUE: 0,
                    YTM_MOMENT: 0,
                    TOTAL_WEIGHT: 0,
                },
                children: [],
            };
            assetNameNode.children.push(ventureNameNode);
        }

        // Aggregate DAY_VALUE at each level
        const dayValue = parseFloat(item.DAY_VALUE) || 0;
        assetTypeNode.data.DAY_VALUE += dayValue;
        assetNameNode.data.DAY_VALUE += dayValue;
        ventureNameNode.data.DAY_VALUE += dayValue;

        // Calculate weighted YTM_MOMENT at each level
        const ytmMoment = parseFloat(item.YTM_MOMENT) || 0;

        if (dayValue > 0 && ytmMoment > 0 && !isNaN(ytmMoment)) {
            assetTypeNode.data.YTM_MOMENT += dayValue * ytmMoment;
            assetNameNode.data.YTM_MOMENT += dayValue * ytmMoment;
            ventureNameNode.data.YTM_MOMENT += dayValue * ytmMoment;

            assetTypeNode.data.TOTAL_WEIGHT += dayValue;
            assetNameNode.data.TOTAL_WEIGHT += dayValue;
            ventureNameNode.data.TOTAL_WEIGHT += dayValue;
        }

        // Add all other item fields to the VENTURE_NAME node, excluding ASSET, VENTURE_NAME, and SYMBOL
        const { ASSET, VENTURE_NAME, SYMBOL, ...remainingFields } = item;
        ventureNameNode.children.push({
            key: `${ventureNameKey}_${item.id}`,
            data: remainingFields,
        });
    });

    // Calculate the final weighted average for each node
    treeData.forEach((assetTypeNode) => {
        if (assetTypeNode.data.TOTAL_WEIGHT > 0) {
            assetTypeNode.data.YTM_MOMENT =
                assetTypeNode.data.YTM_MOMENT / assetTypeNode.data.TOTAL_WEIGHT;
        }
        assetTypeNode.children.forEach((assetNameNode) => {
            if (assetNameNode.data.TOTAL_WEIGHT > 0) {
                assetNameNode.data.YTM_MOMENT =
                    assetNameNode.data.YTM_MOMENT /
                    assetNameNode.data.TOTAL_WEIGHT;
            }
            assetNameNode.children.forEach((ventureNameNode) => {
                if (ventureNameNode.data.TOTAL_WEIGHT > 0) {
                    ventureNameNode.data.YTM_MOMENT =
                        ventureNameNode.data.YTM_MOMENT /
                        ventureNameNode.data.TOTAL_WEIGHT;
                }
            });
        });
    });

    return Array.from(treeData.values());
};
export const roundedNumberBodyTemplateForTreeTable = (
    data,
    col: ColumnBodyOptions
) => {
    const field = data.data[col.field];
    if (isNaN(field) || field === null || field === undefined || field === '') {
        return '';
    }
    return Number(field).toFixed(1);
};
export const numberBodyTemplateForTreeTable = (
    data,
    col: ColumnBodyOptions
) => {
    const field = data.data[col.field];
    if (field === null || field === undefined || field === '') {
        return '';
    }
    return Number(field).toLocaleString();
    // return isNaN(Number(data.data[col.field]))
    //   ? ""
    //   : Number(data.data[col.field]).toLocaleString();
};
export const numberBodyTemplateForTreeTableWithBillionFormat = (
    data,
    col: ColumnBodyOptions
) => {
    const field = data.data[col.field];
    if (field === null || field === undefined || field === '') {
        return '';
    }
    return (Number(field) / 1000000000).toLocaleString();
};
export const numberBodyTemplateForTreeTableWithMillionFormat = (
    data,
    col: ColumnBodyOptions
) => {
    const field = data.data[col.field];
    if (field === null || field === undefined || field === '') {
        return '';
    }

    return (Number(field) / 1000000).toLocaleString();
};

export const updatedDataArray = (
    data: bankAccountData[] | EquityDataForDataTable[]
) => {
    console.log(data);

    return data.map((item) => ({
        ...item,
        representative: {
            name: item.fund_name || item.FUND_NAME,
        },
    }));
};

export const createBondsDataForVentureTypeFilter = (
    data: BondFrame[]
): Option[] => {
    const filteredData = data.reduce((accumulator, current) => {
        const ventureType = current['VENTURE_TYPE'];
        const found = accumulator.find((item) => item.value === ventureType);
        if (!found) {
            accumulator.push({ value: ventureType, label: ventureType });
        }
        return accumulator;
    }, []);
    return filteredData;
};

export const createDataForVentureTypeFilter = (data: Data[]): Option[] => {
    const filteredData = data.reduce((accumulator, current) => {
        const ventureType = current['VENTURE_TYPE'];
        const found = accumulator.find((item) => item.value === ventureType);
        if (!found) {
            accumulator.push({ value: ventureType, label: ventureType });
        }
        return accumulator;
    }, []);
    return filteredData;
};

export const createDataForVentureNameFilter = (
    data: Data[],
    ventureType: string
): Option[] => {
    const filteredDataBasedOnVentureType = data.filter(
        (item) => item.VENTURE_TYPE === ventureType
    );

    const filteredData = filteredDataBasedOnVentureType.reduce(
        (accumulator, current) => {
            const ventureName = current['VENTURE_NAME'];
            const found = accumulator.find(
                (item) => item.value === ventureName
            );
            if (!found) {
                accumulator.push({ value: ventureName, label: ventureName });
            }
            return accumulator;
        },
        []
    );

    return filteredData;
};

export const createDataForAssetTypeFilter = (
    data: Data[],
    ventureType: string,
    ventureName: string
): Option[] => {
    const filteredDataBasedOnVentureTypeAndVentureName = data.filter(
        (item) =>
            item.VENTURE_TYPE === ventureType &&
            item.VENTURE_NAME === ventureName
    );

    const filteredData = filteredDataBasedOnVentureTypeAndVentureName.reduce(
        (accumulator, current) => {
            const assetType = current['ASSET_TYPE'];
            const found = accumulator.find((item) => item.value === assetType);
            if (!found) {
                accumulator.push({ value: assetType, label: assetType });
            }
            return accumulator;
        },
        []
    );

    return filteredData;
};

function normalizeFarsi(text) {
    return text
        .replace(/آ/g, 'ا')
        .replace(/ی/g, 'ي')
        .replace(/ک/g, 'ك')
        .replace(/ه/g, 'ة')
        .replace(/\u200c/g, '') // Remove zero-width non-joiner (half space)
        .replace(/\s+/g, ''); // Remove all spaces
}

export function searchData(data, searchTerm, key) {
    const normalizedSearchTerm = normalizeFarsi(searchTerm.toLowerCase());
    return data.filter((item) => {
        const fieldValue = normalizeFarsi(item[key].toLowerCase());
        return fieldValue.includes(normalizedSearchTerm);
    });
}
