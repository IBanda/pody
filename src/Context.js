import { createContext, useContext } from 'react';
import { observable } from 'mobx';
const playing = {
  id: '',
  src: '',
  image: '',
  title: '',
};

const playlist = { id: '', episodes: [] };
const CurrentPlayingContext = createContext({
  updatePlaying: () => {},
});

function initstorage() {
  return {
    getItem(key) {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : item;
    },
    setItem(key, item) {
      return window.localStorage.setItem(key, JSON.stringify(item));
    },
  };
}
const LocalStorage = initstorage();
const store = observable(
  {
    currentPlaying: LocalStorage.getItem('current:playing') || playing,
    currentPlaylist: LocalStorage.getItem('current:playlist') || playlist,
    updatePlaying(item) {
      this.currentPlaying = item;
      LocalStorage.setItem('current:playing', item);
    },
    updatePlaylist(item) {
      if (this.currentPlaylist.id !== item.id) {
        this.currentPlaylist = item;
        LocalStorage.setItem('current:playlist', item);
      }
    },
  },
  undefined,
  { autoBind: true }
);
export default function Provider(props) {
  return <CurrentPlayingContext.Provider value={store} {...props} />;
}

export function usePlayer() {
  const context = useContext(CurrentPlayingContext);
  if (!context) {
    throw new Error('usePlayer: this hook can only be used within a provider');
  }
  return context;
}
