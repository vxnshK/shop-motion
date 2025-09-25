import { ListFilter } from "lucide-react"

export default function Filters() {
  return (
    <div
      className={`flex items-center gap-[8px] text-xs font-medium cursor-pointer text-white hover:bg-gray-700 bg-gray-600 transition-all shadow-sm px-4 py-3 rounded-4xl`}
    >
      <ListFilter size={15} />
      <span>Filters</span>
    </div>
  );
}
