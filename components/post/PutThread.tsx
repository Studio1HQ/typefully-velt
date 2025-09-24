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
    <article class="post">
  <header>
    <h2>Building an Audience: A Compounding Investment</h2>
    <p>Building an audience is a great investment that compounds over the years, maximizing the impact of everything else you do online.</p>
  </header>

  <section aria-labelledby="tips-title">
    <h3 id="tips-title">Tips to get started</h3>
    <ul>
      <li>🚀 <strong>Start small</strong></li>
      <li>📋 <strong>Consistently deliver value</strong></li>
      <li>✨ <strong>Watch your influence multiply</strong></li>
    </ul>
  </section>

  <footer>
    <p>
      This is why
      <a href="https://typefully.com" target="_blank" rel="noopener">@typefully</a>
      is an investment in your future reach and impact.
    </p>
  </footer>
</article>

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
    <div className="border-2 p-4 my-3 border-dashed rounded">
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
