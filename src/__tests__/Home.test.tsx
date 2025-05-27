import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('should have default text', () => {
    render(<Home />);

    const myElem = screen.getByText('Save and see your changes instantly.');

    expect(myElem).toBeInTheDocument();
  });
});
