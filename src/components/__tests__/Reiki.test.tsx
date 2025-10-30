
import { render, screen } from '@testing-library/react';
import Reiki from '../Reiki';

describe('Reiki component', () => {
  it('renders the main heading', () => {
    render(<Reiki />);
    const heading = screen.getByText(/What is Reiki?/i);
    expect(heading).toBeInTheDocument();
  });
});
