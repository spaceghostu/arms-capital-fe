import styles from "./Inputs.module.css";
import { InputNumber, InputNumberProps } from "antd";
import { useController, useFormContext } from "react-hook-form";

type NumberProps = InputNumberProps & {
  name: string;
  label?: string;
};

const Number: React.FC<NumberProps> = ({ name, label, ...props }) => {
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
      <InputNumber
        onChange={field.onChange}
        value={field.value}
        {...props}
        formatter={(value) =>
          `R ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
        parser={(value) =>
          value?.replace(/R\s?|(,*)/g, "") as unknown as number
        }
      />
      {invalid && isTouched && <span>This field is required</span>}
    </div>
  );
};

export default Number;
