import { SandpackProvider, SandpackLayout, SandpackPreview, SandpackCodeEditor, SandpackStack } from '@codesandbox/sandpack-react';
// import { SandpackCodeEditor } from "@codesandbox/sandpack-react/unstyled";
export default function Playground() {
  const files = {
    "/App.js": {
      code: `export default function App() {
        return <h1>Hello World</h1>;
      }`,
    },
  };
  return (
    <SandpackProvider
      files={files} 
      theme="auto" 
      template="react"
    >
      <SandpackLayout>
        <SandpackPreview />
        <SandpackCodeEditor />
      </SandpackLayout>
    </SandpackProvider>
  )
}