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
    content: `Building an audience is a great investment that compounds over the years, maximizing the impact of everything else you do online.

Here are some tips on how to do it:

🚀 Start small
📋 Consistently deliver value
✨ Watch your influence multiply

This is why @typefully is an investment in your future reach and impact.`,
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
            <PostCard {...post} isThread={index == 0} />
            {index < threadPosts.length - 1 && (
              <div className="absolute left-6 sm:left-8 top-16 bottom-0 w-0.5 bg-border -z-10" />
            )}
          </div>
        ))}
      </div>

      <Card className="p-4 mt-6 border-dashed">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
            <span className="text-sm font-medium">+</span>
          </div>
          <div className="flex-1">
            <Textarea
              placeholder="Continue your thread..."
              className="min-h-[100px] resize-none border-0 shadow-none focus-visible:ring-0 p-0"
            />
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-3 gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 w-full sm:w-auto"
              >
                <Wand2 className="h-4 w-4" />
                Rewrite with AI
              </Button>
              <div className="flex gap-2 w-full sm:w-auto">
                <Button variant="outline" size="sm">
                  Save Draft
                </Button>
                <Button size="sm">Add Tweet</Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
