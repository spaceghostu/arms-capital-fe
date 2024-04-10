import { Table, TableProps } from "antd";
import { MOCK_DATA } from "../../MOCK_DATA";
import { useNavigate } from "@tanstack/react-router";

const columns: TableProps["columns"] = [
  {
    title: "Agreement Number",
    dataIndex: "agreementNumber",
    key: "agreementNumber",
  },
  {
    title: "Agreement Date",
    dataIndex: "agreementDate",
    key: "agreementDate",
  },
  { title: "Dealer", dataIndex: "dealer", key: "dealer" },
  {
    title: "Invoice Number",
    dataIndex: "invoiceNumber",
    key: "invoiceNumber",
  },
  // { title: "Invoicedate", dataIndex: "invoiceDate", key: "invoiceDate" },
  // {
  //   title: "Invoiceamount",
  //   dataIndex: "invoiceAmount",
  //   key: "invoiceAmount",
  // },
  // { title: "Deposit", dataIndex: "deposit", key: "deposit" },
  // { title: "Terms", dataIndex: "terms", key: "terms" },
  // { title: "Firstdate", dataIndex: "firstDate", key: "firstDate" },
  // { title: "Finaldate", dataIndex: "finalDate", key: "finalDate" },
  // { title: "Muppercent", dataIndex: "mupPercent", key: "mupPercent" },
  // { title: "Payable", dataIndex: "payable", key: "payable" },
  // { title: "Mup", dataIndex: "mup", key: "mup" },
  // { title: "Installment", dataIndex: "installment", key: "installment" },
  // { title: "Paydealer", dataIndex: "payDealer", key: "payDealer" },
  // { title: "Paiddealer", dataIndex: "paidDealer", key: "paidDealer" },
  // { title: "Paiddate", dataIndex: "paidDate", key: "paidDate" },
  // {
  //   title: "Referencenumber",
  //   dataIndex: "referenceNumber",
  //   key: "referenceNumber",
  // },
  // { title: "Loyaltybonus", dataIndex: "loyaltyBonus", key: "loyaltyBonus" },
  // {
  //   title: "Earlypaymentbonus",
  //   dataIndex: "earlyPaymentBonus",
  //   key: "earlyPaymentBonus",
  // },
  // {
  //   title: "Totalbonusamount",
  //   dataIndex: "totalBonusAmount",
  //   key: "totalBonusAmount",
  // },
  // { title: "Method", dataIndex: "method", key: "method" },
  // { title: "Paid", dataIndex: "paid", key: "paid" },
  // { title: "Paiddate2", dataIndex: "paidDate2", key: "paidDate2" },
  // {
  //   title: "Referencenumber2",
  //   dataIndex: "referenceNumber2",
  //   key: "referenceNumber2",
  // },
  { title: "Title", dataIndex: "title", key: "title" },
  { title: "Client", dataIndex: "client", key: "client" },
  { title: "Surname", dataIndex: "surname", key: "surname" },
  // { title: "Idnumber", dataIndex: "idNumber", key: "idNumber" },
  { title: "Cell", dataIndex: "cell", key: "cell" },
  // { title: "Email", dataIndex: "email", key: "email" },
  // { title: "Bank", dataIndex: "bank", key: "bank" },
  // {
  //   title: "Accountnumber",
  //   dataIndex: "accountNumber",
  //   key: "accountNumber",
  // },
  // { title: "Holder", dataIndex: "holder", key: "holder" },
  // {
  //   title: "Businessbankaccount",
  //   dataIndex: "businessBankAccount",
  //   key: "businessBankAccount",
  // },
];

export const AgreementList: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Table
      dataSource={MOCK_DATA}
      columns={columns}
      onRow={({ agreementNumber }, rowIndex) => {
        return {
          onClick: (event) => {
            console.log(agreementNumber, rowIndex, event);
            navigate({
              to: "/agreement/$agreementNumber",
              params: { agreementNumber },
            });
          },
          // ... other event handlers if needed
        };
      }}
    >
      {/* <Column
        title="Agreement Number"
        key="agreementNumber"
        render={(_: any, record: any) => (
          <Space size="middle">
            <a>{record.agreementNumber}</a>
          </Space>
        )}
      />
      <Column
        title="agreementDate"
        dataIndex="agreementDate"
        key="agreementDate"
      />
      <Column title="dealer" dataIndex="dealer" key="dealer" />
      <Column
        title="invoiceNumber"
        dataIndex="invoiceNumber"
        key="invoiceNumber"
      />
      <Column title="title" dataIndex="title" key="title" />
      <Column title="client" dataIndex="client" key="client" />
      <Column title="surname" dataIndex="surname" key="surname" />
      <Column title="cell" dataIndex="cell" key="cell" /> */}
    </Table>
  );
};
