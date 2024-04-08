import styles from "./Inputs.module.css";
import { Checkbox, CheckboxProps } from "antd";
import { useController, useFormContext } from "react-hook-form";

type CheckProps = CheckboxProps & {
  name: string;
  label?: string;
};

const Check: React.FC<CheckProps> = ({ name, label, ...props }) => {
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
      <Checkbox onChange={field.onChange} checked={field.value} {...props} />
      {invalid && isTouched && <span>This field is required</span>}
    </div>
  );
};

export default Check;
