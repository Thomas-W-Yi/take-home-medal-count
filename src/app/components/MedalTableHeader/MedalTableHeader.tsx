import { SortType } from '@utils/sortMedals';
import styles from './MedalTableHeader.module.css';

export default function MedalTableHeader({
  setSort,
  selectedSort,
}: {
  setSort: (sort: SortType) => void;
  selectedSort: SortType | undefined;
}) {
  return (
    <thead>
      <tr className={styles.headerRow}>
        <th className={`${styles.headerCell} ${styles.headerCellCountry}`}></th>
        <th
          className={`${styles.headerCell} ${styles.headerCellMedal} ${selectedSort === 'gold' ? styles.activeSort : ''}`}
          onClick={() => setSort('gold')}
          title="Gold"
        >
          <span className={styles.goldMedal} aria-label="Gold medal" />
        </th>
        <th
          className={`${styles.headerCell} ${styles.headerCellMedal} ${selectedSort === 'silver' ? styles.activeSort : ''}`}
          onClick={() => setSort('silver')}
          title="Silver"
        >
          <span className={styles.silverMedal} aria-label="Silver medal" />
        </th>
        <th
          className={`${styles.headerCell} ${styles.headerCellMedal} ${selectedSort === 'bronze' ? styles.activeSort : ''}`}
          onClick={() => setSort('bronze')}
          title="Bronze"
        >
          <span className={styles.bronzeMedal} aria-label="Bronze medal" />
        </th>
        <th
          className={`${styles.headerCell} ${styles.headerCellMedal} ${selectedSort === 'total' ? styles.activeSort : ''}`}
          onClick={() => setSort('total')}
        >
          TOTAL
        </th>
      </tr>
    </thead>
  );
}
