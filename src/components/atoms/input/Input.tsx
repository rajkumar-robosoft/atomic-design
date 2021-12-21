import "./styles.css";

export type Props = {
  type: "text" | "email" | "password" | "number" | "checkbox" | "radio";
  id: string;
  name: string;
  value?: any;
  placeholder?: string;
  required: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input = ({
  type,
  id,
  name,
  value,
  placeholder,
  required,
  onChange,
}: Props) => (
  <input
    type={type}
    id={id}
    name={name}
    value={value}
    placeholder={placeholder}
    required={required}
    className="my-input"
    onChange={onChange}
  />
);
