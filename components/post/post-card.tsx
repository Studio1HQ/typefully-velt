"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookImage,
  Ellipsis,
  Equal,
  Hash,
  Loader,
  MoreHorizontal,
  Sparkles,
} from "lucide-react";
import PutThread from "./PutThread";
import { useUserStore } from "@/helper/userdb";
import { Heart, MessageCircle, Repeat2, Share, Wand2 } from "lucide-react";
interface PostCardProps {
  author: {
    name: string;
    username: string;
    avatar: string;
    verified?: boolean;
  };
  timestamp?: string;
  content?: string;
  isThread?: boolean;
  showConnector?: boolean; // NEW
}

export function PostCard({
  author,
  timestamp,
  isThread,
  content,
  showConnector = false,
}: PostCardProps) {
  const { user } = useUserStore();
  return (
    <div className="p-3 sm:p-4 transition-shadow">
      <div className="flex items-start gap-3 relative">
        {/* Avatar column */}
        <div className="">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user?.photoUrl} alt={user?.displayName} />
            <AvatarFallback>
              {user?.displayName?.slice(0, 2)?.toUpperCase()}
            </AvatarFallback>
          </Avatar>

          {/* Thread connector line */}
          {showConnector && (
            <span
              className="
                absolute
                -translate-x-1/2
                h-[110%]
                left-5
                top-10   /* starts right under the 40px (h-10) avatar */
                bottom-4 /* extends a bit past this card to meet the next avatar */
                w-0.5 bg-border
              "
            />
          )}
        </div>

        {/* Content column */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-sm sm:text-base truncate">
              {user?.displayName || author.name}
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

          {isThread && <PutThread />}
          <div className="flex justify-end items-center gap-3 sm:gap-6 ">
            <Loader className="h-4 w-4 gap-2 text-muted-foreground hover:text-foreground" />
            <div className="text-muted-foreground hover:text-foreground flex justify-center items-center">
              <Hash className="h-4 w-4 gap-2 " />2
            </div>
            <Equal className="h-4 w-4 gap-2 text-muted-foreground hover:text-foreground" />
            <BookImage className="h-4 w-4 gap-2 text-muted-foreground hover:text-foreground" />
            <Sparkles className="h-4 w-4 gap-2 text-muted-foreground hover:text-foreground" />
            <Ellipsis className="h-4 w-4 gap-2 text-muted-foreground hover:text-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
}
