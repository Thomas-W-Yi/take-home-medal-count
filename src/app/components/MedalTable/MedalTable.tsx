'use client';

import { useState, useEffect } from 'react';
import { SortMedals, SortType } from '@utils/sortMedals';
import MedalTableHeader from '@components/MedalTableHeader/MedalTableHeader';
import MedalTableRow from '@components/MedalTableRow/MedalTableRow';
import { useSearchParams } from 'next/navigation';
import medalsData from '@data/medals.json';
import styles from './MedalTable.module.css';

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
  const [error, setError] = useState<string | null>(null);
  const medalList = medalsData.map((country: Country) => ({
    ...country,
    total: country.gold + country.silver + country.bronze,
  }));

  useEffect(() => {
    const initialSort = (searchParams.get('sort') as SortType) || 'gold';
    setSort(initialSort);
    const sortedMedals = SortMedals(medalList, initialSort);
    setMedals(sortedMedals);
  }, [searchParams]);

  useEffect(() => {
    if (sort) {
      const sortedMedals = SortMedals(medalList, sort);
      setMedals(sortedMedals);
    }
  }, [sort]);

  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <table
      className={styles.table}
      style={{ width: 600, tableLayout: 'fixed' }}
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
