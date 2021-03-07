import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Playlist from '../components/Playlist';

const onSetPlaylist = jest.fn();
test('playlist items should play and set playlist for player', async () => {
  render(<Playlist onSetPlaylist={onSetPlaylist} />);

  await waitFor(() => screen.getAllByAltText('episode'));

  const buttons = screen.getAllByTestId('playlist-item');

  userEvent.click(buttons[0]);

  expect(onSetPlaylist).toHaveBeenCalled();
});
