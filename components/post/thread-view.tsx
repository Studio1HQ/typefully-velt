"use client";

import { PostCard } from "./post-card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Wand2 } from "lucide-react";

const threadPosts = [
  {
    author: {
      name: "Fabrizio Rinaldi",
      username: "linuz90",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      verified: true,
    },
  },
  {
    author: {
      name: "Fabrizio Rinaldi",
      username: "linuz90",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      verified: true,
    },
    content: `By the way, this is a sample draft!

  Select some text and click "Rewrite with AI" to improve it ✨

  PS: you can also press ⌘ J on Mac or ctrl J on Windows.`,
  },
    {
      author: {
        name: "Fabrizio Rinaldi",
        username: "linuz90",
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
        verified: true,
      },
      content: `Some more tips for you:

  • Use the buttons in the top right to share & organize drafts
  • Drag & drop pictures and videos in the editor
  • Type : followed by an email alias
  • Paste a tweet link to quote it

  PS: you can ask our AI to turn these bullet points into emoji.`,
    },
];

export function ThreadView() {
  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6">
      <div className="space-y-0">
        {threadPosts.map((post, index) => (
          <div key={index} className="relative">
            <PostCard
              {...post}
              isThread={index == 0}
              showConnector={index < threadPosts.length - 1} // <-- only show between posts
            />
            {index < threadPosts.length - 1 && (
              <div className="absolute left-6 sm:left-8 top-16 bottom-0 w-0.5 bg-border -z-10" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
