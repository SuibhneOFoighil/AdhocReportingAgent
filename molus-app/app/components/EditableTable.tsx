import { Table } from "antd";

type Row = {
  key: string;
  name: string;
  age: number;
  city: string;
}

type Column = {
  title: string;
  dataIndex: string;
  key: string;
}

export default function EditableTable({ dataSource, columns }: { dataSource: Row[], columns: Column[] }) {
  return (
    <Table dataSource={dataSource} columns={columns} />
  );
}
