import React from "react";

type Props = {
  label: string;
  onClick: any;
};

const Button: React.FC<Props> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
