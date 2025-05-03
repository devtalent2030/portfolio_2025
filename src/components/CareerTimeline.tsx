'use client';

type Item = { year: number; title: string };

type Props = {
  items: Item[];
  accentColor?: 'surge' | 'indigo' | 'purple';
};

export default function CareerTimeline({ items, accentColor = 'surge' }: Props) {
  // Define classNames explicitly to ensure Tailwind includes them in the build
  const accentClasses = {
    surge: {
      dot: 'bg-surge',
      year: 'text-surge',
      border: 'border-surge',
    },
    indigo: {
      dot: 'bg-indigo',
      year: 'text-indigo',
      border: 'border-indigo',
    },
    purple: {
      dot: 'bg-purple-500',
      year: 'text-purple-500',
      border: 'border-purple-500',
    },
  };

  const color = accentClasses[accentColor];

  return (
    <ol className={`border-l-2 pl-6 ${color.border}`}>
      {items.map((item) => (
        <li key={`${item.year}-${item.title}`} className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <span className={`mr-4 text-lg font-semibold ${color.year}`}>
              {item.year}
            </span>
            <span className="text-skin-muted">{item.title}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}
