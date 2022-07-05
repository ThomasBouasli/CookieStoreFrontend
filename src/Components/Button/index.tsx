import * as S from "./styles";

interface props extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  primary?: boolean;
  secondary?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button(props: props) {
  return <S.Button {...props}>{props.text}</S.Button>;
}
