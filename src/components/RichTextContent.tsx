import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { FC } from "react";

interface RichTextContentProps {
  data: SerializedEditorState;
  className?: string;
}

const RichTextContent: FC<RichTextContentProps> = ({ data, className }) => {
  if (!data) return null;

  return (
    <div className={className}>
      <RichText data={data} />
    </div>
  );
};

export default RichTextContent;
