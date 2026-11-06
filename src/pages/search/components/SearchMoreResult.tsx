import { ChevronDown } from "lucide-react";

type SearchMoreResultProps = {
  text: string;
  onClick: () => void;
};

export function SearchMoreResult({ text, onClick }: SearchMoreResultProps) {
  return (
    <div className="more-result">
      <button type="button" onClick={onClick} className="more-result__button">
        {text}
        <ChevronDown size={18} strokeWidth={3} className="more-result__icon" />
      </button>
    </div>
  );
}
