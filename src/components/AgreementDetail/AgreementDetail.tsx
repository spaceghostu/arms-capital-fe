import Text from "../Inputs/Text";
import { FormProvider, useForm } from "react-hook-form";
import { MOCK_DATA } from "../../MOCK_DATA";
import styles from "./AgreementDetail.module.css";
import Date from "../Inputs/Date";
import Select from "../Inputs/Select";
import Number from "../Inputs/Number";
import Check from "../Inputs/Check";
import { Divider } from "antd";
// import { IoIosJournal } from "react-icons/io";
import Items from "../Items/Items";

export const AgreementDetail: React.FC<{
  agreementNumber: string;
}> = ({ agreementNumber }) => {
  const form = useForm({
    defaultValues: MOCK_DATA.find(
      (agreement) => agreement.agreementNumber === agreementNumber,
    ),
  });

  return (
    <FormProvider {...form}>
      <div className={styles.form}>
        <Text name="agreementNumber" label="Agreement #" />
        <Date name="agreementDate" label="Date" />
        <Select name="dealer" label="Dealer" />
        <Text name="invoiceNumber" label="Invoice #" />
        <Date name="invoiceDate" label="Date" />
        <Number name="invoiceAmount" label="Invoice Amt" />
        <Text name="deposit" label="Deposit" />
        <Text name="terms" label="Terms" />
        <Date name="firstDate" label="First Date" />
        <Date name="finalDate" label="Final Date" />
        <Text name="mupPercent" label="Mup %" />
        <Text name="payable" label="Payable" />
        <Text name="mup" label="Mup" />
        <Text name="installment" label="Installment" />
        <Text name="payDealer" label="Pay Dealer" />
        <Check name="paid" label="Paid" />
        <Date name="paidDate" label="Date" />
        <Text name="referenceNumber2" label="Reference #" />
        {/* <Button htmlType="button" icon={<IoIosJournal />}>
          Get Journals
        </Button> */}

        <Select
          name="title"
          label="Title"
          options={[
            { label: "Mr", value: "Mr" },
            { label: "Mrs", value: "Mrs" },
            { label: "Ms", value: "Ms" },
          ]}
        />
        <Text name="client" label="Client" />
        <Text name="surname" label="Surname" />
        <Text name="idNumber" label="ID Number" />
        <Text name="cell" label="Cell" />
        <Text name="email" label="Email" />
        <Text name="bank" label="Bank" />
        <Text name="accountNumber" label="Account #" />
        <Text name="holder" label="Holder" />
        <Check name="businessBankAccount" label="Business Bank Account" />
      </div>

      <Divider />
      <Items />
    </FormProvider>
  );
};
