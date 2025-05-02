'use client';
type Item = { year: number; title: string };

export default function CareerTimeline({ items }: { items: Item[] }) {
  return (
    <ol className="border-l-2 border-surge pl-6">
      {items.map((item) => (
  <li key={`${item.year}-${item.title}`} className="mb-6">
    <div className="flex flex-col sm:flex-row sm:items-center">
      <span className="mr-4 text-lg font-semibold text-surge">
        {item.year}
      </span>
      <span className="text-gray-300">{item.title}</span>
    </div>
  </li>
))}

    </ol>
  );
}
