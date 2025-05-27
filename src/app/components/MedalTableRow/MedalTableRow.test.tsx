import { render, screen } from '@testing-library/react';
import MedalTableRow from './MedalTableRow';

describe('MedalTableRow', () => {
  it('renders the row with correct data for a country', () => {
    render(
      <table>
        <tbody>
          <MedalTableRow
            code="USA"
            gold={2}
            silver={1}
            bronze={0}
            total={3}
            rank={10}
          />
        </tbody>
      </table>
    );

    expect(screen.getByText('USA')).toBeInTheDocument();
  });
});
