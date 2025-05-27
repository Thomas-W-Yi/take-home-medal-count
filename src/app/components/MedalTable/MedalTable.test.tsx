import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MedalTable from './MedalTable';
import { useMedalTableData } from './useMedalTableData';

jest.mock('./useMedalTableData', () => ({
  useMedalTableData: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

const mockUseMedalTableData = useMedalTableData as jest.Mock;

describe('MedalTable', () => {
  const mockMedalsData = [
    { code: 'USA', gold: 10, silver: 5, bronze: 3 },
    { code: 'CHN', gold: 8, silver: 7, bronze: 4 },
    { code: 'SUI', gold: 5, silver: 6, bronze: 8 },
  ];

  beforeEach(() => {
    jest.clearAllMocks();

    mockUseMedalTableData.mockReturnValue({
      sortedMedals: mockMedalsData.map((country, index) => ({
        ...country,
        total: country.gold + country.silver + country.bronze,
        rank: index + 1,
      })),
      sort: 'gold',
      setSort: jest.fn(),
      error: undefined,
    });
  });

  it('renders the table with sorted medals provided by the hook', () => {
    render(<MedalTable />);

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getAllByRole('row')).toHaveLength(mockMedalsData.length + 1);

    expect(screen.getByText('USA')).toBeInTheDocument();
    expect(screen.getByText('CHN')).toBeInTheDocument();
    expect(screen.getByText('SUI')).toBeInTheDocument();
  });

  it('renders an empty table body when no medals are returned by the hook', () => {
    mockUseMedalTableData.mockReturnValue({
      sortedMedals: [],
      sort: 'gold',
      setSort: jest.fn(),
      error: undefined,
    });

    render(<MedalTable />);

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.queryAllByRole('row')).toHaveLength(1);
    expect(screen.queryByText('USA')).not.toBeInTheDocument();
  });

  it('renders an error message when the hook returns an error', () => {
    mockUseMedalTableData.mockReturnValue({
      sortedMedals: [],
      sort: 'gold',
      setSort: jest.fn(),
      error: { error: 'Failed to fetch data' },
    });

    render(<MedalTable />);

    expect(screen.getByText('Failed to fetch data')).toBeInTheDocument();
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });
});
