'use client';

import { motion } from 'framer-motion';

export type Level = 'Expert' | 'Intermediate' | 'Familiar';

type Props = {
  name: string;
  icon?: React.ReactNode;
  level: Level;
  certified?: boolean;
  note?: string; // Will be shown in a tooltip via `title`
};

const levelColors: Record<Level, string> = {
  Expert: 'bg-surge/20 text-surge',
  Intermediate: 'bg-indigo/20 text-indigo',
  Familiar: 'bg-gray-600/20 text-gray-400',
};

export default function SkillBadge({
  name,
  icon,
  level,
  certified,
  note,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium
                  backdrop-blur ${levelColors[level]} cursor-default`}
      title={note || `${name} - ${level}`}
    >
      {icon}
      {name}
      {certified && <span title="Certified ✅">✅</span>}
    </motion.div>
  );
}
