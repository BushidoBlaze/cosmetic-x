type SearchEmptyProps = {
  title: string;
  text?: string;
};

export function SearchEmpty({ title, text }: SearchEmptyProps) {
  return (
    <div className="search-empty">
      <h2 className="search-empty__title">{title}</h2>
      {text && <p className="search-empty__text">{text}</p>}
    </div>
  );
}
