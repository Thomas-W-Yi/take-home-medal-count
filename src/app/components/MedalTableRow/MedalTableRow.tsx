import { getFlagBackgroundPosition } from '@utils/flagUtil';
import styles from './MedalTableRow.module.css';

export type Country = {
  code: string;
  gold: number;
  silver: number;
  bronze: number;
  total?: number;
  rank?: number;
};

export default function MedalTableRow({
  code,
  gold,
  silver,
  bronze,
  total,
  rank,
}: Country) {
  const backgroundPosition = getFlagBackgroundPosition(code);

  return (
    <tr className={styles.row}>
      <td className={styles.rankCell}>
        <span>{rank}</span>
        <span
          className={styles.flag}
          style={{
            backgroundPosition,
            ...(code === 'SUI' && { backgroundPositionX: '-5px' }),
            width: code === 'SUI' ? '18px' : '28px',
            height: '17px',
            backgroundImage: "url('/flags.png')",
            display: 'inline-block',
          }}
        />
        <span>{code}</span>
      </td>
      <td className={styles.cell}>{gold}</td>
      <td className={styles.cell}>{silver}</td>
      <td className={styles.cell}>{bronze}</td>
      <td className={styles.cell}>{total}</td>
    </tr>
  );
}
