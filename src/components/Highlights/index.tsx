import { HighlightsWrapper } from "./wrappers";

const Highlights = ({ highlights }: { highlights: { title: string; url: string }[] }) => {
  return (
    <HighlightsWrapper>
      {highlights.map((highlight, index) => (
        <p key={index}>{highlight.title}</p>
      ))}
    </HighlightsWrapper>
  );
};

export default Highlights;
