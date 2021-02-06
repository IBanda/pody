import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TopSection from '../components/TopSection';

beforeEach(() => render(<TopSection />));
test('playlist item is played', async () => {
  await waitFor(() => screen.getAllByAltText('podcast'));
  const cards = screen.getAllByTestId('pd-card');

  userEvent.click(cards[0]);

  expect(screen.getByRole('dialog')).toBeInTheDocument();
});
