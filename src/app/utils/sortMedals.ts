export type SortType = 'gold' | 'silver' | 'bronze' | 'total';

export const SortMedals = (data: any[], sort: SortType) => {
  return [...data]
    .sort((a, b) => {
      if (sort === 'total') {
        const totalA = a.gold + a.silver + a.bronze;
        const totalB = b.gold + b.silver + b.bronze;
        return totalB - totalA || b.gold - a.gold;
      }
      if (sort === 'gold') return b.gold - a.gold || b.silver - a.silver;
      if (sort === 'silver') return b.silver - a.silver || b.gold - a.gold;
      if (sort === 'bronze') return b.bronze - a.bronze || b.gold - a.gold;
      return 0;
    })
    .slice(0, 10);
};
