"use client"

import { Plus, Edit3, Calendar, Send, Archive, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Draft {
  id: string
  title: string
  content: string
  isActive?: boolean
}

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}
const drafts: Draft[] = [
  {
    id: "1",
    title: "Building an audience is a great investment that compounds over...",
    content: "Building an audience is a great investment that compounds over the years, maximizing the impact of everything else you do online.",
    isActive: true
  },
  {
    id: "2", 
    title: "Tips for content creators",
    content: "Here are some actionable tips for growing your audience..."
  },
  {
    id: "3",
    title: "Social media strategy",
    content: "Let's talk about effective social media strategies..."
  }
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed lg:relative inset-y-0 left-0 z-50 w-80 border-r bg-background/95 backdrop-blur transform transition-transform duration-200 ease-in-out lg:transform-none",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        !isOpen && "lg:-translate-x-full"
      )}>
        {/* Mobile close button */}
        <div className="flex items-center justify-between p-4 lg:hidden">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <h1 className="font-semibold text-lg">Typefully</h1>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        
      <div className="p-4">
        <Button className="w-full justify-start gap-2 h-10">
          <Plus className="h-4 w-4" />
          New draft
        </Button>
      </div>

      <div className="px-4 pb-4">
        <div className="flex gap-1 mb-4">
          <Button variant="secondary" size="sm" className="flex-1">
            Drafts
          </Button>
          <Button variant="ghost" size="sm" className="flex-1">
            Scheduled
          </Button>
          <Button variant="ghost" size="sm" className="flex-1">
            Posted
          </Button>
        </div>

        <ScrollArea className="h-[calc(100vh-240px)] lg:h-[calc(100vh-200px)]">
          <div className="space-y-2">
            {drafts.map((draft) => (
              <div
                key={draft.id}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  draft.isActive 
                    ? 'bg-muted border border-border' 
                    : 'hover:bg-muted/50'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Edit3 className="h-4 w-4 text-muted-foreground" />
                    <Badge variant="secondary" className="text-xs">
                      Draft
                    </Badge>
                  </div>
                </div>
                <p className="text-sm font-medium line-clamp-2 mb-1">
                  {draft.title}
                </p>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {draft.content}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
      </div>
    </>
  )
}