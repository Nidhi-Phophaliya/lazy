import { ConnectionsProvider } from "@/providers/connection-providers";
import EditorProvider from "@/providers/editor-provider";
import { Edit } from "lucide-react";
import React from "react";
import EditorCanvas from "./_components/editor-canvas";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="h-full">
      <EditorProvider >
       <ConnectionsProvider>
       <EditorCanvas/>
       </ConnectionsProvider>
      </EditorProvider>
    </div>
  );
};
export default Page;