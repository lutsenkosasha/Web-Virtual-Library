import React from "react";

type ActionButtonProps = {
  label: string;
  onClick: () => void;
};

const ActionButton = ({ label, onClick }: ActionButtonProps) => {
  return (
    <button
      className="rounded bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-800"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ActionButton;
