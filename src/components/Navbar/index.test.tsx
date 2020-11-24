import { screen, render } from '@testing-library/react';
import Navbar from '.';

const navTitle = 'This is the navTitle';

test('navTitle is rendered', () => {
  render(<Navbar navTitle={navTitle} />);
  expect(screen.getByText(navTitle)).toBeInTheDocument();
});
