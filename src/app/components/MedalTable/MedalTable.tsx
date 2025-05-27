'use client';

import { useState, useEffect } from 'react';
import { SortMedals, SortType } from '@utils/sortMedals';
import MedalTableHeader from '@components/MedalTableHeader/MedalTableHeader';
import MedalTableRow from '@components/MedalTableRow/MedalTableRow';
import { useSearchParams } from 'next/navigation';
import medalsData from '@data/medals.json';

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
  const [sort, setSort] = useState<SortType>('gold');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initialSort = (searchParams.get('sort') as SortType) || 'gold';
    setSort(initialSort);
    setMedals(
      medalsData.map((country: Country) => ({
        ...country,
        total: country.gold + country.silver + country.bronze,
      }))
    );
  }, []);

  const sortedMedals = SortMedals(medals, sort);

  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <table>
      <MedalTableHeader setSort={setSort} />
      <tbody>
        {sortedMedals.map((country: Country, index: number) => (
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
