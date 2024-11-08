import type { MetaFunction } from "@remix-run/node";
import { Button, Card, Layout } from "antd";
const { Header, Content, Sider } = Layout;
import { useState } from "react";

// import EditableTable from "../components/EditableTable.client";
import Playground from "../components/Playground";
import EditableTable from "../components/EditableTable";

export const meta: MetaFunction = () => {
  return [
    { title: "Molus.app" },
    { name: "description", content: "Molus.app" },
  ];
};

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

export default function Index() {;
  const [collapsed, setCollapsed] = useState(false);

  const dataSource: Row[] = [
    {
      key: "1",
      name: "John",
      age: 40,
      city: "New York",
    },
    {
      key: "2",
      name: "Jane",
      age: 25,
      city: "Los Angeles",
    },
  ]

  const columns: Column[] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
  ]

  return (
    <Layout className="h-screen w-screen">
      <Header className="bg-white border-b border-gray-200">
        <div>Molus.app</div>
      </Header>
      <Layout>
        <Sider 
          className="bg-white"
          width="50%"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          collapsedWidth={1}
          trigger={
            <div className="bg-white">
              <Button type="text" icon={collapsed ? "→" : "←"} />
            </div>
          }
        >     
        </Sider>
        <Content className="bg-white h-full flex flex-col">
          <Card>
            <Playground />
          </Card>
          <Card>
            <EditableTable dataSource={dataSource} columns={columns} />
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
}