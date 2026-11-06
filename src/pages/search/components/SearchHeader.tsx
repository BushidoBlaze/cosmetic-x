type SearchHeaderProps = {
  count: number;
};

export function SearchHeader({ count }: SearchHeaderProps) {
  return (
    <div className="search-header">
      {count && <span className="search-header__value">{count}</span>}
      <p className="search-header__results">Search Results</p>
    </div>
  );
}
