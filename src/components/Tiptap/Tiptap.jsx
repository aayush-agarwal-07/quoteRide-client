// src/TiptapEditor.jsx
import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import ListItem from "@tiptap/extension-list-item";
import MenuBar from "./Menubar"; // Ensure this path is correct

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit, // No configuration needed here
];

const TiptapEditor = ({
  value,
  placeholder,
  className,
  onChange,
}) => {
  const editor = useEditor({
    extensions,
    content: value || "",
    onUpdate: ({ editor }) => {
      if (onChange) {
        onChange(editor.getHTML());
      }
    },
  });

  if (!editor) {
    return null; // Render nothing if editor is not initialized
  }

  return (
    <div className={`${className} h-[100px]`} style={{ position: 'relative' }}>
      <MenuBar editor={editor} /> {/* Pass editor to MenuBar */}
      <EditorContent 
        editor={editor} 
        className="editor-content" 
        style={{ height: '30vh', marginBottom: "5vw", overflow: 'auto' }} 
      />
      <style>{`
        .editor-content p {
          color: black;
          height: 30vh;
          padding: 2vh;
          border: 1px blue solid;
         
        }
      `}</style>
    </div>
  );
};

export default TiptapEditor;
