import { SortType } from '@utils/sortMedals';
import styles from './MedalTableHeader.module.css';

export default function MedalTableHeader({
  setSort,
}: {
  setSort: (sort: SortType) => void;
}) {
  return (
    <thead>
      <tr className={styles.headerRow}>
        <th className={styles.headerCell}>Country</th>
        <th
          className={styles.headerCell}
          onClick={() => setSort('gold')}
          title="Gold"
        >
          <span className={styles.goldMedal} aria-label="Gold medal" />
        </th>
        <th
          className={styles.headerCell}
          onClick={() => setSort('silver')}
          title="Silver"
        >
          <span className={styles.silverMedal} aria-label="Silver medal" />
        </th>
        <th
          className={styles.headerCell}
          onClick={() => setSort('bronze')}
          title="Bronze"
        >
          <span className={styles.bronzeMedal} aria-label="Bronze medal" />
        </th>
        <th className={styles.headerCell} onClick={() => setSort('total')}>
          TOTAL
        </th>
      </tr>
    </thead>
  );
}
