"use client";

import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import {
  TiptapVeltComments,
  renderComments,
  addComment,
} from "@veltdev/tiptap-velt-comments";
import { useCommentAnnotations } from "@veltdev/react";
import { useEffect } from "react";
import { StarterKit } from "@tiptap/starter-kit";
import { Button } from "../ui/button";

import { MessageCircle } from "lucide-react";

const EDITOR_ID = "typefully-comments";

const PutThread = () => {
  // Initialize Tiptap editor
  const editor = useEditor({
    extensions: [
      TiptapVeltComments.configure({
        persistVeltMarks: false,
      }),
      StarterKit,
    ],
    content: `
      <div>
        <p>Hi there,</p>
        <p>
          Thanks for subscribing! We're excited to have you on board. Stay tuned
          for updates, news, and exclusive content delivered straight to your inbox.
        </p>
        <p>
          In the meantime, why not check out our latest blog post?
        </p>
      </div>
      <div>
        <p>You’re receiving this email because you signed up on our website.</p>
        <p>Unsubscribe at any time by clicking <a href="#">here</a>.</p>
        <br>
        <p>Cheers,<br>The Team</p>
      </div>
    `,
    autofocus: true,
    immediatelyRender: false,
  });

  // Get annotations
  const annotations = useCommentAnnotations();

  // Render annotations when editor and annotations are both ready
  useEffect(() => {
    if (editor && annotations?.length) {
      renderComments({
        editor,
        editorId: EDITOR_ID,
        commentAnnotations: annotations,
      });
    }
  }, [editor, annotations]);

  // Add comment handler
  const onClickComments = () => {
    if (editor) {
      addComment({
        editor,
        editorId: EDITOR_ID,
      });
    }
  };

  return (
    <div
      className="border-gray-300 dark:border-gray-700 overflow-hidden hide-scrollbar w-full min-h-56 p-4 border-2 border-dashed border-white/30 rounded-lg focus-within:border-[#101113] focus-within:bg-black/10 dark:focus-within:bg-[#101113] dark:focus-within:border-white text-gray-900 dark:text-white 
   focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
    >
      {/* Bubble Menu with comment button */}
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="bubble-menu">
            <Button
              variant="outline"
              onClick={onClickComments}
              className="bg-[#b056ef] hover:bg-[#a22ff5] p-2 flex items-center justify-center rounded-full focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
            >
              <MessageCircle color="white" />
            </Button>
          </div>
        </BubbleMenu>
      )}

      {/* Editor Content */}
      <EditorContent editor={editor} />
    </div>
  );
};

export default PutThread;
