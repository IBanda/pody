import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from '../components/SearchInput';
import { url } from '../mocks/searchReq';
import { server, rest } from '../mocks/server';

beforeEach(() => render(<SearchInput />));

test('search toggle should switch search type', () => {
  const toggle = screen.getByTestId('search-toggle');
  const searchInput = screen.getByRole('textbox');

  userEvent.click(toggle);

  expect(searchInput).toHaveAttribute('placeholder', 'Search for podcasts');

  userEvent.click(toggle);

  expect(searchInput).toHaveAttribute('placeholder', 'Search for episodes');
});

test('search input should show search results', async () => {
  const input = screen.getByRole('textbox');

  userEvent.type(input, 'star wars');

  const button = screen.getByTestId('search-btn');

  userEvent.click(button);

  await waitForElementToBeRemoved(screen.getByText(/Searching.../));

  expect(screen.getAllByRole('listitem')).toHaveLength(2);
  expect(screen.getByText('Star Wars - The Force Awakens')).toBeInTheDocument();
});

test('invalid search should show no results', async () => {
  server.use(
    rest.get(url, (req, res, ctx) => {
      return res(
        ctx.status(404),
        ctx.json({
          results: [],
        })
      );
    })
  );
  const input = screen.getByRole('textbox');

  userEvent.type(input, 'not a valid podcast');

  const button = screen.getByTestId('search-btn');

  userEvent.click(button);

  await waitForElementToBeRemoved(screen.getByText(/Searching.../));

  expect(
    screen.getByText('No results matched your search')
  ).toBeInTheDocument();
});
test('error in search should show error message', async () => {
  server.use(
    rest.get(url, (req, res, ctx) => {
      throw new Error('Server Error');
    })
  );
  const input = screen.getByRole('textbox');

  userEvent.type(input, 'star wars');

  const button = screen.getByTestId('search-btn');

  userEvent.click(button);

  await waitForElementToBeRemoved(screen.getByText(/Searching.../));
  expect(screen.getByText('Something went wrong')).toBeInTheDocument();
});

test(`input clear should close results dropdown`, async () => {
  const input = screen.getByRole('textbox');

  userEvent.type(input, 'star wars');

  const button = screen.getByTestId('search-btn');

  userEvent.click(button);

  // await waitForElementToBeRemoved(screen.getByText(/Searching.../));
  const dropdown = screen.getByRole('listbox');
  expect(dropdown).toBeInTheDocument();

  userEvent.clear(input);

  expect(dropdown).not.toBeInTheDocument();
});
