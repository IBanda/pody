import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Player from '../components/Player';

const current = {
  id: 'd5e2112643ac4d01baaa8eab6c7b7cae',
  src: 'https://www.listennotes.com/e/p/d5e2112643ac4d01baaa8eab6c7b7cae/',
  image:
    'https://cdn-images-1.listennotes.com/podcasts/the-james-altucher/side-hustle-friday-monetize-OBljDR14EC3-vZt0gi5hoDN.1400x1400.jpg',
  title: 'Side Hustle Friday: Monetize your podcast right now!',
};

const playlist = {
  id: 'kr3-ta28cJu',
  episodes: [
    current,
    {
      id: '4c72c4dfac004ffca0867a70361f77ab',
      src: 'https://www.listennotes.com/e/p/4c72c4dfac004ffca0867a70361f77ab/',
      image:
        'https://cdn-images-1.listennotes.com/podcasts/the-james-altucher/side-hustle-friday-monetize-LncxE9KjCgt-jDmTs6Nl-tr.1400x1400.jpg',
      title:
        'Side Hustle Friday: Why should you START a podcast and MONETIZE your podcast through Ads and Patreon!',
    },
  ],
};

beforeEach(() =>
  render(<Player currentPlaying={current} playlist={playlist} />)
);

test('player should autoplay', () => {
  expect(screen.getByTestId('playing-title')).toHaveTextContent(
    playlist.episodes[0].title
  );
});

test('next/prev button should play next/prev', () => {
  const controls = document.querySelectorAll('.rhap_skip-button');

  userEvent.click(controls[1]);

  expect(screen.getByTestId('playing-title')).toHaveTextContent(
    playlist.episodes[1].title
  );

  userEvent.click(controls[0]);

  expect(screen.getByTestId('playing-title')).toHaveTextContent(
    playlist.episodes[0].title
  );
});
