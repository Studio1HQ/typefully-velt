"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { ThreadView } from "@/components/post/thread-view";
import { VeltComments, VeltProvider } from "@veltdev/react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <VeltProvider apiKey={process.env.NEXT_PUBLIC_VELT_ID!}>
      <div className="min-h-screen bg-background">
        <Header onToggleSidebar={toggleSidebar} />
        <div className="flex">
          <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
          <main className="flex-1 overflow-auto min-w-0">
            <ThreadView />
          </main>
        </div>
      </div>
      <VeltComments
        textMode={false}
        shadowDom={false}
        textCommentToolShadowDom={false}
      />
    </VeltProvider>
  );
}
