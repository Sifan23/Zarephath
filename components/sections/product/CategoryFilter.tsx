export default function CategoryFilter({
  categories,
  selected,
  onSelect,
}: {
  categories: string[];
  selected: string;
  onSelect: (cat: string) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-full border ${
            selected === cat
              ? "bg-green-700 text-white border-green-700"
              : "text-green-700 border-green-300 hover:border-green-500"
          } text-sm font-medium transition`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
