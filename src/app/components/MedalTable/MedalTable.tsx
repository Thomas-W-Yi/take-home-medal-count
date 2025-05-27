'use client';

import { useState, useEffect } from 'react';
import { SortMedals, SortType } from '@utils/sortMedals';
import MedalTableHeader from '@components/MedalTableHeader/MedalTableHeader';
import MedalTableRow from '@components/MedalTableRow/MedalTableRow';
import { useSearchParams } from 'next/navigation';
import styles from './MedalTable.module.css';
import { useGetMedalList } from '@/app/api/useGetMedalList';

export type Country = {
  code: string;
  gold: number;
  silver: number;
  bronze: number;
  total?: number;
  rank?: number;
};

export default function MedalTable() {
  const searchParams = useSearchParams();
  const [medals, setMedals] = useState<any[]>([]);
  const [sort, setSort] = useState<SortType | undefined>();

  const { data: medalsData, error } = useGetMedalList({
    params: 'someParam',
    requestKey: 'medalListEndpoint',
  });
  console.log({ medalsData, error });

  const medalList = medalsData?.map((country: Country) => ({
    ...country,
    total: country.gold + country.silver + country.bronze,
  }));
  useEffect(() => {
    const initialSort = (searchParams.get('sort') as SortType) || 'gold';
    setSort(initialSort);
    if (medalList && medalList.length > 0) {
      const sortedMedals = SortMedals(medalList, initialSort);
      setMedals(sortedMedals);
    }
  }, [searchParams]);

  useEffect(() => {
    if (sort && medalList && medalList.length > 0) {
      const sortedMedals = SortMedals(medalList, sort);
      setMedals(sortedMedals);
    }
  }, [sort]);

  if (error) return <div style={{ color: 'red' }}>{error?.error}</div>;

  return (
    <table
      className={styles.table}
      style={{ width: 600, tableLayout: 'fixed' }}
      aria-label="Medal table"
    >
      <MedalTableHeader setSort={setSort} selectedSort={sort} />
      <tbody>
        {medals?.length > 0 &&
          medals.map((country: Country, index: number) => (
            <MedalTableRow
              key={`${country?.code}-${index}`}
              {...country}
              rank={index + 1}
            />
          ))}
      </tbody>
    </table>
  );
}
