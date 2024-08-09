// src/MenuBar.jsx
import React from "react";
import { EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import ListItem from "@tiptap/extension-list-item";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 mb-4 p-2 bg-gray-100 border border-gray-300 rounded-lg">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`px-3 py-1 border rounded ${editor.isActive("bold") ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`px-3 py-1 border rounded ${editor.isActive("italic") ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`px-3 py-1 border rounded ${editor.isActive("strike") ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        Strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`px-3 py-1 border rounded ${editor.isActive("code") ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        Code
      </button>
      <button
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className="px-3 py-1 border rounded bg-gray-200"
      >
        Clear marks
      </button>
      <button
        onClick={() => editor.chain().focus().clearNodes().run()}
        className="px-3 py-1 border rounded bg-gray-200"
      >
        Clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`px-3 py-1 border rounded ${editor.isActive("paragraph") ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        Paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`px-3 py-1 border rounded ${editor.isActive("heading", { level: 1 }) ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`px-3 py-1 border rounded ${editor.isActive("heading", { level: 2 }) ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`px-3 py-1 border rounded ${editor.isActive("heading", { level: 3 }) ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        H3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`px-3 py-1 border rounded ${editor.isActive("heading", { level: 4 }) ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        H4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={`px-3 py-1 border rounded ${editor.isActive("heading", { level: 5 }) ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        H5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={`px-3 py-1 border rounded ${editor.isActive("heading", { level: 6 }) ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        H6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`px-3 py-1 border rounded ${editor.isActive("bulletList") ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        Bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`px-3 py-1 border rounded ${editor.isActive("orderedList") ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        Ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`px-3 py-1 border rounded ${editor.isActive("codeBlock") ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        Code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`px-3 py-1 border rounded ${editor.isActive("blockquote") ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        Blockquote
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="px-3 py-1 border rounded bg-gray-200"
      >
        Horizontal rule
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className="px-3 py-1 border rounded bg-gray-200"
      >
        Hard break
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="px-3 py-1 border rounded bg-gray-200"
      >
        Undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="px-3 py-1 border rounded bg-gray-200"
      >
        Redo
      </button>
      <button
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        className={`px-3 py-1 border rounded ${editor.isActive("textStyle", { color: "#958DF1" }) ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        Purple
      </button>
    </div>
  );
};

export default MenuBar;
