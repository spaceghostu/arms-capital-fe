import styles from "./Inputs.module.css";
import { Select as AntSelect, SelectProps as AntSelectProps } from "antd";
import { useController, useFormContext } from "react-hook-form";

type SelectProps = AntSelectProps & {
  name: string;
  label?: string;
};

const Select: React.FC<SelectProps> = ({ name, label, ...props }) => {
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
      <AntSelect {...field} {...props} />

      {invalid && isTouched && <span>This field is required</span>}
    </div>
  );
};

export default Select;
