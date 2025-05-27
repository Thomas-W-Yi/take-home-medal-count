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
      <td className={styles.rankCell} aria-label={`Rank ${rank}, ${code}`}>
        <span aria-hidden="true">{rank}</span>
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
          role="img"
          aria-label={`Flag of ${code}`}
        />
        <span
          className={styles.countryCode}
          aria-label={`Country code: ${code}`}
        >
          {code}
        </span>
      </td>
      <td className={styles.cell} aria-label={`Gold medals: ${gold}`}>
        {gold}
      </td>
      <td className={styles.cell} aria-label={`Silver medals: ${silver}`}>
        {silver}
      </td>
      <td className={styles.cell} aria-label={`Bronze medals: ${bronze}`}>
        {bronze}
      </td>
      <td className={styles.cell} aria-label={`Total medals: ${total}`}>
        {total}
      </td>
    </tr>
  );
}
