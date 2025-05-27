import { render, screen } from '@testing-library/react';
import MedalTable from './MedalTable';
import medalsData from '@data/medals.json';
import { SortMedals } from '@utils/sortMedals';

jest.mock('@utils/sortMedals', () => ({
  SortMedals: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

const mockUseSearchParams = require('next/navigation').useSearchParams;

describe('MedalTable', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the table with sorted medals based on initial sort parameter', () => {
    mockUseSearchParams.mockReturnValue({
      get: jest.fn().mockReturnValue('gold'),
    });
    SortMedals.mockReturnValue(medalsData);

    render(<MedalTable />);

    expect(SortMedals).toHaveBeenCalledWith(expect.any(Array), 'gold');
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getAllByRole('row')).toHaveLength(medalsData.length + 1); // +1 for header row
  });

  it('updates the table when sort state changes', () => {
    mockUseSearchParams.mockReturnValue({
      get: jest.fn().mockReturnValue('silver'),
    });
    SortMedals.mockReturnValueOnce(medalsData).mockReturnValueOnce(
      medalsData.reverse()
    );

    const { rerender } = render(<MedalTable />);
    expect(SortMedals).toHaveBeenCalledWith(expect.any(Array), 'silver');

    rerender(<MedalTable />);
    expect(SortMedals).toHaveBeenCalledTimes(2);
  });

  it('renders an empty table when there are no medals', () => {
    mockUseSearchParams.mockReturnValue({
      get: jest.fn().mockReturnValue('gold'),
    });
    SortMedals.mockReturnValue([]);

    render(<MedalTable />);

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.queryAllByRole('row')).toHaveLength(1); // Only header row
  });
});
