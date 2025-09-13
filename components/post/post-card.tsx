"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  MoreHorizontal,
  Heart,
  MessageCircle,
  Repeat2,
  Share,
  Wand2,
} from "lucide-react";
import { Textarea } from "../ui/textarea";
import PutThread from "./PutThread";

interface PostCardProps {
  author: {
    name: string;
    username: string;
    avatar: string;
    verified?: boolean;
  };
  content: string;
  timestamp?: string;
  isThread?: boolean;
}

export function PostCard({
  author,
  content,
  timestamp,
  isThread,
}: PostCardProps) {
  return (
    <Card className="p-3 sm:p-4 mb-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>
            {author.name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-sm sm:text-base truncate">
              {author.name}
            </span>
            {author.verified && (
              <Badge
                variant="secondary"
                className="h-4 w-4 p-0 rounded-full bg-blue-500"
              >
                <span className="text-white text-xs">✓</span>
              </Badge>
            )}
            <span className="text-muted-foreground text-xs sm:text-sm truncate">
              @{author.username}
            </span>
            {timestamp && (
              <span className="text-muted-foreground text-xs sm:text-sm hidden sm:inline">
                · {timestamp}
              </span>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto h-6 w-6 flex-shrink-0"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p className="whitespace-pre-line text-sm leading-relaxed mb-3">
              {content}
            </p>
          </div>
          {isThread && (
            <div className="flex items-start gap-3">
              <div className="flex-1">
               <PutThread/>
                <div className="flex gap-2 w-full sm:w-auto justify-end my-3 ">
                  <Button variant="outline" size="sm">
                    Save Draft
                  </Button>
                  <Button size="sm">Add Tweet</Button>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3 sm:gap-6 mt-3 pt-2 border-t">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <Heart className="h-4 w-4" />
              <span className="text-xs">12</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs">3</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <Repeat2 className="h-4 w-4" />
              <span className="text-xs">8</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
