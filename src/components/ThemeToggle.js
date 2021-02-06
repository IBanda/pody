import Toggle from './Toggle';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);
  const [toggled, setToggled] = useState(false);
  useEffect(() => {
    if (!theme) {
      const mode = window.localStorage.getItem('theme');
      if (theme === 'dark') setToggled(true);
      return setTheme(mode || 'light');
    }
    document.body.className = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const onThemeToggle = () => {
    setTheme((prevTheme) => {
      if (prevTheme === 'light') {
        return 'dark';
      }
      return 'light';
    });
    setToggled((prev) => !prev);
  };

  return (
    <StyledWrapper>
      <img src="/light.png" alt="light" />
      <Toggle
        data-testid="theme-toggle"
        toggleHandler={onThemeToggle}
        isToggled={toggled}
        className="theme-toggler"
      />
      <img src="/dark.png" alt="light" />
    </StyledWrapper>
  );
}
