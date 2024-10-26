import React from "react";

type InputsProps = {
  id?: string;
  type: "text" | "checkbox";
} & React.ComponentPropsWithoutRef<"input">;

const Inputs: React.FC<InputsProps> = ({ id, type, ...delegatedProps }) => {
  return <input id={id} type={type} {...delegatedProps} />;
};

export default Inputs;
