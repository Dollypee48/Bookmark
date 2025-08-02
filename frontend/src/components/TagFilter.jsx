const TagFilter = ({ tags, onFilter }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Filter by Tag</label>
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Tags</option>
        {tags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TagFilter;