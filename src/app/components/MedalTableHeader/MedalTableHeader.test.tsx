import { render, screen, fireEvent } from '@testing-library/react';
import MedalTableHeader from './MedalTableHeader';

describe('MedalTableHeader', () => {
  it('renders all medal columns with correct titles', () => {
    render(
      <table>
        <MedalTableHeader setSort={jest.fn()} selectedSort={undefined} />
      </table>
    );

    expect(screen.getByTitle('Gold')).toBeInTheDocument();
    expect(screen.getByTitle('Silver')).toBeInTheDocument();
    expect(screen.getByTitle('Bronze')).toBeInTheDocument();
    expect(screen.getByText('TOTAL')).toBeInTheDocument();
  });

  it('calls setSort with correct sort type when a column is clicked', () => {
    const mockSetSort = jest.fn();
    render(
      <table>
        <MedalTableHeader setSort={mockSetSort} selectedSort={undefined} />
      </table>
    );

    fireEvent.click(screen.getByTitle('Gold'));
    expect(mockSetSort).toHaveBeenCalledWith('gold');

    fireEvent.click(screen.getByTitle('Silver'));
    expect(mockSetSort).toHaveBeenCalledWith('silver');

    fireEvent.click(screen.getByTitle('Bronze'));
    expect(mockSetSort).toHaveBeenCalledWith('bronze');

    fireEvent.click(screen.getByText('TOTAL'));
    expect(mockSetSort).toHaveBeenCalledWith('total');
  });

  it('applies active sort style to the selected column', () => {
    const { rerender } = render(
      <table>
        <MedalTableHeader setSort={jest.fn()} selectedSort="gold" />
      </table>
    );

    expect(screen.getByTitle('Gold')).toHaveClass('activeSort');
    expect(screen.getByTitle('Silver')).not.toHaveClass('activeSort');

    rerender(
      <table>
        <MedalTableHeader setSort={jest.fn()} selectedSort="silver" />
      </table>
    );

    expect(screen.getByTitle('Silver')).toHaveClass('activeSort');
    expect(screen.getByTitle('Gold')).not.toHaveClass('activeSort');
  });

  it('renders without errors when no sort is selected', () => {
    render(
      <table>
        <MedalTableHeader setSort={jest.fn()} selectedSort={undefined} />
      </table>
    );

    expect(screen.getByTitle('Gold')).toBeInTheDocument();
    expect(screen.getByTitle('Silver')).toBeInTheDocument();
    expect(screen.getByTitle('Bronze')).toBeInTheDocument();
    expect(screen.getByText('TOTAL')).toBeInTheDocument();
  });
});
