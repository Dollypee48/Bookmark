const TagFilter = ({ tags, onFilter }) => {
  return (
    <div className="mb-6">
      <label className="block text-lg font-semibold text-stone-800 mb-2">
        Filter by Tag
      </label>
      <div className="relative">
        <select
          onChange={(e) => onFilter(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-stone-300 bg-stone-50 text-stone-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300"
        >
          <option value="">All Tags</option>
          {tags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <span className="absolute right-4 top-2.5 text-stone-400 pointer-events-none">&#9662;</span>
      </div>
    </div>
  );
};

export default TagFilter;
