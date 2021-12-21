import "./styles.css";
import { Label } from "../../atoms/label/Label";
import { Input } from "../../atoms/input/Input";
import { Props as InputProps } from "../../atoms/input/Input";
import { Props as LabelProps } from "../../atoms/label/Label";

type Props = InputProps & LabelProps;

export const TextInput = ({
  id,
  label,
  type,
  name,
  value,
  placeholder,
  required,
  onChange,
}: Props) => (
  <div className="my-text-input">
    <Label htmlFor={id} label={label} isRequired={required} />
    <Input
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  </div>
);
