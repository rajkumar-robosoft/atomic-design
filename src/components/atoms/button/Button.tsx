import "./styles.css";
type Props = {
  type: "button" | "submit" | "reset";
  name?: string;
  id?: string;
  children: JSX.Element | string;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  type,
  name,
  id,
  children,
  disabled,
  onClick,
}: Props) => (
  <button
    type={type}
    name={name}
    id={id}
    disabled={disabled}
    className="my-btn"
    onClick={onClick}
  >
    {children}
  </button>
);
