import { useState } from 'react';
import styled from 'styled-components';

const size = {
  sm: 20,
  md: 25,
  lg: 30,
};
const trans = {
  sm: 10,
  md: 5,
};
const StyledToggle = styled.button`
  width: ${(props) => size[props.size] + 30}px;
  height: ${(props) => size[props.size]}px;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.isToggled ? '#70e000' : '#eaeaea')};
  border-radius: 999px;
  outline: none;
  position: relative;
  padding: 0;
  &:focus {
    outline: none;
  }
  .toggle {
    border-radius: 50%;
    /* position: absolute;
    left: 2px; */
    background-color: #415a77;
    width: ${(props) => size[props.size] - 6}px;
    height: ${(props) => size[props.size] - 6}px;
    transition: transform 500ms;
    transform: translateX(
      ${(props) =>
        props.isToggled ? size[props.size] + trans[props.size] : 2}px
    );
  }
`;
export default function Toggle({
  size = 'sm',
  onToggle,
  toggleHandler,
  isToggled,
  ...otherProps
}) {
  const [toggled, setToggle] = useState(false);
  const handleOnClick = () => {
    setToggle((prev) => !prev);
    if (typeof onToggle === 'function') {
      onToggle();
    }
  };
  return (
    <StyledToggle
      size={size}
      isToggled={isToggled ?? toggled}
      onClick={toggleHandler || handleOnClick}
      {...otherProps}
    >
      <div className="toggle"></div>
    </StyledToggle>
  );
}
