import { useState } from "react";

type SelectButtonProps = {
  text: string;
  state: boolean
  onToggled: (state: boolean, value: string) => void;
};

const SelectButton = ({
  state: initialState ,
  text,
  onToggled,
}: SelectButtonProps) => {
  const [state, setState] = useState(initialState);

  const handleSelect = () => {
    const value = state;
    setState(!value);
    onToggled(!value, text);
  };

  return (
    <button
      value={text}
      onClick={handleSelect}
      className={`grow text-xl font-sans ${
        state ? "bg-gray-600 text-teal-50" : "bg-green-100 text-gray-800" 
      } rounded px-4 py-2`}
    >{text}</button>
  );
};

export default SelectButton;
