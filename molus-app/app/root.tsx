import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

import { CopilotSidebar } from "./components/copilot-sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export default function App() {
  return (
    <SidebarProvider>      
      <CopilotSidebar />
      <main className="w-full h-screen flex flex-col">
        <SidebarTrigger />
        <div className="flex-1 p-2">
          <Dashboard />
        </div>
      </main>
    </SidebarProvider>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

const Dashboard = () => {
  return (
    <div className="w-full h-full">
      <PanelGroup direction="vertical" className="h-full">
        <Panel>
          <PanelGroup direction="horizontal" className="h-full gap-0">
            <Panel>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Welcome to the dashboard</p>
                </CardContent>
              </Card>
            </Panel>
            
            <PanelResizeHandle className="w-2 rounded-sm bg-transparent hover:bg-primary/50 transition-colors" />
            
            <Panel>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Dashboard</CardTitle>
                </CardHeader>
              </Card>
            </Panel>
          </PanelGroup>
        </Panel>

        <PanelResizeHandle className="h-2 rounded-sm bg-transparent hover:bg-primary/50 transition-colors" />

        <Panel>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
            </CardHeader>
          </Card>
        </Panel>
      </PanelGroup>
    </div>
  );
};
