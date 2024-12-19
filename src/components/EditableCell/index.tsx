import { ColumnEditorOptions } from "primereact/column";
import { InputNumberChangeEvent } from "primereact/inputnumber";
import { TreeNode } from "primereact/treenode";
import { useState } from "react";

import { SFC } from "@/types";

import * as S from "./Styles";

interface EditableCellProps {
  options: ColumnEditorOptions;
  nodes: TreeNode[];
  setNodes: (item: TreeNode[]) => void;
}

const EditableCell: SFC<EditableCellProps> = ({ options, nodes, setNodes }) => {
  const [value, setValue] = useState(options.rowData[options.field] || "");
  const handleChange = (e: InputNumberChangeEvent) => {
    // const stringValue = e.value.toString();
    setValue(e.value);
  };
  const handleBlur = () => {
    onEditorValueChange(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEditorValueChange(value);
    }
  };

  const onEditorValueChange = (value: string) => {
    const editedNode = findNodeByKey(options.node.key);
    editedNode.data[options.field] = value;
    setNodes(nodes);
  };

  const findNodeByKey = (key) => {
    let stack = [...nodes];

    while (stack.length > 0) {
      const currentNode = stack.pop();

      if (currentNode.key === key) {
        return currentNode;
      }

      if (currentNode.children) {
        stack = stack.concat(currentNode.children); // Add children to the stack
      }
    }

    return null; // Return null if the node is not found
  };

  return (
    <S.StyledInputNumber
      type="text"
      value={value}
      onChange={(e) => handleChange(e)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      minFractionDigits={0}
      maxFractionDigits={4}
    />
  );
};

export default EditableCell;
