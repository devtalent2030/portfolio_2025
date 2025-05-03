// Zustand store controlling the active skills category filter
import { create } from 'zustand';

export type SkillCategory =
  | 'All'
  | 'Programming'
  | 'Frontend'
  | 'Backend'
  | 'Cloud'
  | 'Database'
  | 'DevOps'
  | 'Mainframe'
  | 'Mobile'
  | 'Soft';

interface SkillFilterState {
  active: SkillCategory;
  setActive: (cat: SkillCategory) => void;
}

export const useSkillFilter = create<SkillFilterState>((set) => ({
  active: 'All',
  setActive: (cat) => set({ active: cat }),
}));
