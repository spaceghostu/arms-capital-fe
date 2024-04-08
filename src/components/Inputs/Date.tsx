import { DatePickerProps, DatePicker } from "antd";
import { useController, useFormContext } from "react-hook-form";
import styles from "./Inputs.module.css";
import dayjs from "dayjs";
type DateProps = DatePickerProps & {
  name: string;
  label?: string;
};

const DATE_FORMAT = "DD/MM/YYYY";

const Date: React.FC<DateProps> = ({ name, label, ...props }) => {
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
      <DatePicker
        defaultValue={dayjs("30/12/2023", DATE_FORMAT)}
        format={DATE_FORMAT}
        onChange={field.onChange}
        {...props}
      />
      {invalid && isTouched && <span>This field is required</span>}
    </div>
  );
};

export default Date;
