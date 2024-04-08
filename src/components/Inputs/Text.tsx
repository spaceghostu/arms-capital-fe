import styles from "./Inputs.module.css";
import { Input, InputProps } from "antd";
import { useController, useFormContext } from "react-hook-form";

type TextProps = InputProps & {
  name: string;
  label?: string;
};

const Text: React.FC<TextProps> = ({ name, label, ...props }) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { invalid, isTouched },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <div className={styles.root}>
      <label>{label}</label>
      <Input {...field} {...props} />
      {invalid && isTouched && <span>This field is required</span>}
    </div>
  );
};

export default Text;
