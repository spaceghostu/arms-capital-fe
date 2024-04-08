import { Table } from "antd";

const Items: React.FC = () => {
  const dataSource = [
    {
      key: "1",
      type: "1",
      description: "SIBERGUN 12GA SEMI AUTO",
      serialNumber: "18AOS0119",
      serial: true,
      selling: 3460.32,
    },
    {
      key: "2",
      type: "1",
      description: "SIBERGUN 12GA SEMI AUTO",
      serialNumber: "18AOS0119",
      serial: true,
      selling: 3460.32,
    },
    {
      key: "3",
      type: "1",
      description: "SIBERGUN 12GA SEMI AUTO",
      serialNumber: "18AOS0119",
      serial: true,
      selling: 3460.32,
    },
  ];

  const columns = [
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Asset Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Serial #",
      dataIndex: "serialNumber",
      key: "serialNumber",
    },
    {
      title: "Serial",
      dataIndex: "serial",
      key: "serial",
    },
    {
      title: "Selling",
      dataIndex: "selling",
      key: "selling",
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />;
};

export default Items;
