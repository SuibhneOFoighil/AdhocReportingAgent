import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export const meta: MetaFunction = () => {
  return [
    { title: "Molus.app" },
    { name: "description", content: "Welcome to demo from Molus.app" },
  ];
};

export default function Index() {
  return <div>Hello World</div>;
}
