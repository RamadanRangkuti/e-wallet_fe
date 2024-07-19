// import { ChangeEventHandler } from "react";

type InputProps = {
  input: {
    // onChange?: ChangeEventHandler<HTMLInputElement>;1
    type?: string;
    name?: string;
    placeholder?: string;
    autocomplete?: string;
    // value?: string;
  };
  // isToggler?: boolean;s
  // onTogglerHandler?: (e: React.MouseEvent) => void;
};

function Input(props: InputProps) {
  const { input } = props;

  return (
    <input
      className="w-full h-12 border border-solid border-darkwhite rounded-xl pt-0.5 pl-14 text-lightgray mb-2 text-xs uw:text-xl"
      type={input.type}
      id={input.name}
      name={input.name}
      // value={input.value}
      placeholder={input.placeholder}
      autoComplete={input.autocomplete}
      // onChange={input.onChange}
    />
  );
}

export default Input;
