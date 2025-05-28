import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { SortMedals, SortType } from '@utils/sortMedals';
import { useGetMedalList } from '@/app/api/useGetMedalList';

export type Country = {
  code: string;
  gold: number;
  silver: number;
  bronze: number;
  total?: number;
  rank?: number;
};

export const useMedalTableData = () => {
  const searchParams = useSearchParams();
  const [sort, setSort] = useState<SortType | undefined>();
  const [sortedMedals, setSortedMedals] = useState<Country[]>([]);

  // TODO: replace the hardcoded params and requestKey to correct value when BE is ready
  const { data: medalsData, error } = useGetMedalList({
    params: 'someParam',
    requestKey: 'medalListEndpoint',
  });

  const medalList = useMemo(() => {
    return medalsData
      ?.map((country: Country) => ({
        ...country,
        total: country.gold + country.silver + country.bronze,
      }))
      .slice(0, 10);
  }, [medalsData]);

  useEffect(() => {
    const initialSort = (searchParams.get('sort') as SortType) || 'gold';
    setSort(initialSort);
  }, [searchParams]);

  useEffect(() => {
    if (sort && medalList && medalList.length > 0) {
      const newSortedMedals = SortMedals(medalList, sort);
      setSortedMedals(newSortedMedals);
    } else if (medalList && medalList.length > 0) {
      const initialSort = (searchParams.get('sort') as SortType) || 'gold';
      const newSortedMedals = SortMedals(medalList, initialSort);
      setSortedMedals(newSortedMedals);
    }
  }, [sort, medalList, searchParams]);

  return { sortedMedals, sort, setSort, error };
};
