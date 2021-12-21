// import * as styles from "./styles.css";
import "./styles.css";

export type Props = {
  htmlFor?: string;
  label: string;
  isRequired?: boolean;
};

export const Label = ({ htmlFor, label, isRequired }: Props) => (
  <label htmlFor={htmlFor} className="my-label">
    {/* {label} {isRequired ? <span className={styles.required}>*</span> : null} */}
    {label} {isRequired ? <span className="required">*</span> : null}
  </label>
);
