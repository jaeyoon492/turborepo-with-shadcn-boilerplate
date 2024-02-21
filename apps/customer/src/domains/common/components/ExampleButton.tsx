import { FC } from "react";

interface ExampleButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const ExampleButton: FC<ExampleButtonProps> = (props) => {
  return <button {...props}></button>;
};
