'use client';

import MedalTableHeader from '@components/MedalTableHeader/MedalTableHeader';
import MedalTableRow from '@components/MedalTableRow/MedalTableRow';
import styles from './MedalTable.module.css';
import { useMedalTableData, Country } from './useMedalTableData';

export default function MedalTable() {
  const { sortedMedals, sort, setSort, error } = useMedalTableData();

  if (error) return <div style={{ color: 'red' }}>{error?.error}</div>;

  return (
    <table
      className={styles.table}
      style={{ width: 600, tableLayout: 'fixed' }}
      aria-label="Medal table"
    >
      <MedalTableHeader setSort={setSort} selectedSort={sort} />
      <tbody>
        {sortedMedals?.length > 0 &&
          sortedMedals.map((country: Country, index: number) => (
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
