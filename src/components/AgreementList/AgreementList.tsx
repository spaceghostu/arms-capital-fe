import { Table } from "antd";
import { MOCK_DATA } from "../../MOCK_DATA";
import { useNavigate } from "@tanstack/react-router";

const columns = [
  {
    title: "agreementNumber",
    dataIndex: "agreementNumber",
    key: "agreementNumber",
  },
  {
    title: "agreementDate",
    dataIndex: "agreementDate",
    key: "agreementDate",
  },
  { title: "dealer", dataIndex: "dealer", key: "dealer" },
  {
    title: "invoiceNumber",
    dataIndex: "invoiceNumber",
    key: "invoiceNumber",
  },
  // { title: "invoiceDate", dataIndex: "invoiceDate", key: "invoiceDate" },
  // {
  //   title: "invoiceAmount",
  //   dataIndex: "invoiceAmount",
  //   key: "invoiceAmount",
  // },
  // { title: "deposit", dataIndex: "deposit", key: "deposit" },
  // { title: "terms", dataIndex: "terms", key: "terms" },
  // { title: "firstDate", dataIndex: "firstDate", key: "firstDate" },
  // { title: "finalDate", dataIndex: "finalDate", key: "finalDate" },
  // { title: "mupPercent", dataIndex: "mupPercent", key: "mupPercent" },
  // { title: "payable", dataIndex: "payable", key: "payable" },
  // { title: "mup", dataIndex: "mup", key: "mup" },
  // { title: "installment", dataIndex: "installment", key: "installment" },
  // { title: "payDealer", dataIndex: "payDealer", key: "payDealer" },
  // { title: "paidDealer", dataIndex: "paidDealer", key: "paidDealer" },
  // { title: "paidDate", dataIndex: "paidDate", key: "paidDate" },
  // {
  //   title: "referenceNumber",
  //   dataIndex: "referenceNumber",
  //   key: "referenceNumber",
  // },
  // { title: "loyaltyBonus", dataIndex: "loyaltyBonus", key: "loyaltyBonus" },
  // {
  //   title: "earlyPaymentBonus",
  //   dataIndex: "earlyPaymentBonus",
  //   key: "earlyPaymentBonus",
  // },
  // {
  //   title: "totalBonusAmount",
  //   dataIndex: "totalBonusAmount",
  //   key: "totalBonusAmount",
  // },
  // { title: "method", dataIndex: "method", key: "method" },
  // { title: "paid", dataIndex: "paid", key: "paid" },
  // { title: "paidDate2", dataIndex: "paidDate2", key: "paidDate2" },
  // {
  //   title: "referenceNumber2",
  //   dataIndex: "referenceNumber2",
  //   key: "referenceNumber2",
  // },
  { title: "title", dataIndex: "title", key: "title" },
  { title: "client", dataIndex: "client", key: "client" },
  { title: "surname", dataIndex: "surname", key: "surname" },
  // { title: "idNumber", dataIndex: "idNumber", key: "idNumber" },
  { title: "cell", dataIndex: "cell", key: "cell" },
  // { title: "email", dataIndex: "email", key: "email" },
  // { title: "bank", dataIndex: "bank", key: "bank" },
  // {
  //   title: "accountNumber",
  //   dataIndex: "accountNumber",
  //   key: "accountNumber",
  // },
  // { title: "holder", dataIndex: "holder", key: "holder" },
  // {
  //   title: "businessBankAccount",
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
