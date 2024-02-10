import { ReactNode } from "react";
import { Tag } from "../../types/product.types";

interface TagsProps {
  tags: Tag[];
  wrapperComponent: React.ComponentType<{ children: ReactNode }>; 
}

const Tags = ({ tags, wrapperComponent: WrapperComponent }: TagsProps) => {
  return (
    <>
      {tags.map((tag, index) => (
        <WrapperComponent key={index}>{tag.name}</WrapperComponent>
      ))}
    </>
  );
};

export default Tags;
