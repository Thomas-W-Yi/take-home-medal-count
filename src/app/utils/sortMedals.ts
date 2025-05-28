export type SortType = 'gold' | 'silver' | 'bronze' | 'total';

export const SortMedals = (data: any[], sort: SortType | undefined) => {
  const validSortTypes: SortType[] = ['gold', 'silver', 'bronze', 'total'];
  // Determine the effective sort type, defaulting to 'gold'
  const effectiveSort: SortType =
    sort && validSortTypes.includes(sort) ? sort : 'gold';

  return [...data].sort((a, b) => {
    if (effectiveSort === 'total') {
      const totalA = a.gold + a.silver + a.bronze;
      const totalB = b.gold + b.silver + b.bronze;
      return totalB - totalA || b.gold - a.gold;
    }
    if (effectiveSort === 'gold') return b.gold - a.gold || b.silver - a.silver;
    if (effectiveSort === 'silver')
      return b.silver - a.silver || b.gold - a.gold;
    if (effectiveSort === 'bronze')
      return b.bronze - a.bronze || b.gold - a.gold;
    return 0;
  });
};
