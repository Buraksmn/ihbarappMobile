import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const Bell = () => {
  return (
    <Svg width="24" height="25" fill="none" viewBox="0 0 24 25">
      <Path
        stroke="#001A72"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M12 4C8.686 4 6 5.686 6 9c0 1.94-.705 4.113-1.432 5.839C3.965 16.272 4.978 18 6.532 18h10.936c1.554 0 2.567-1.728 1.964-3.161C18.705 13.113 18 10.939 18 9c0-3.314-2.686-5-6-5ZM9 18v1c0 1.657 1.343 2.5 3 2.5s3-.843 3-2.5v-1"
      />
    </Svg>
  );
};

export const Chevronsmallleft = () => {
  return (
    <Svg width="24" height="25" fill="none" viewBox="0 0 24 25">
      <Path
        stroke="#001A72"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m14 7.5-5 5 5 5"
      />
    </Svg>
  );
};

export const Chevronsmallright = () => {
  return (
    <Svg width="24" height="25" fill="none" viewBox="0 0 24 25">
      <Path
        stroke="#001A72"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m10 17.5 5-5-5-5"
      />
    </Svg>
  );
};

export const Crosssmall = () => {
  return (
    <Svg width="24" height="25" fill="none" viewBox="0 0 24 25">
      <Path
        stroke="#001A72"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m16 8.5-8 8m0-8 8 8"
      />
    </Svg>
  );
};

export const Flag = () => {
  return (
    <Svg width="24" height="25" fill="none" viewBox="0 0 24 25">
      <Path
        stroke="#001A72"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M4 16.5s1-1 4-1 5 2 8 2 4-1 4-1v-12s-1 1-4 1-5-2-8-2-4 1-4 1m0 0v17"
      />
    </Svg>
  );
};

export const Home = () => {
  return (
    <Svg width="24" height="25" fill="none" viewBox="0 0 24 25">
      <Path
        stroke="#001A72"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M6.5 7.5c1.461-1.461 3.094-2.581 4.197-3.26a2.474 2.474 0 0 1 2.605 0c1.104.68 2.738 1.8 4.198 3.26 3.168 3.168 3 5 3 8 0 1.41-.11 2.599-.227 3.463-.124.91-.917 1.537-1.835 1.537H17a2 2 0 0 1-2-2v-2a3 3 0 0 0-6 0v2a2 2 0 0 1-2 2H5.562c-.918 0-1.711-.627-1.835-1.537A25.992 25.992 0 0 1 3.5 15.5c0-3-.168-4.832 3-8Z"
      />
    </Svg>
  );
};

export const Location1 = () => {
  return (
    <Svg width="24" height="25" fill="none" viewBox="0 0 24 25">
      <Path
        stroke="#001A72"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M12.816 21.108C16.85 19.05 20 15.643 20 11.5a8 8 0 1 0-16 0c0 4.143 3.15 7.55 7.184 9.608.513.261 1.12.261 1.632 0Z"
      />
      <Path
        stroke="#001A72"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M15 11.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </Svg>
  );
};

export const Plussmall = () => {
  return (
    <Svg width="24" height="25" fill="none" viewBox="0 0 24 25">
      <Path
        stroke="#001A72"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M12 7.5v10m-5-5h10"
      />
    </Svg>
  );
};

export const User = () => {
  return (
    <Svg width="24" height="25" fill="none" viewBox="0 0 24 25">
      <Path
        stroke="#001A72"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M17.5 21.5h-11A2.5 2.5 0 0 1 4 19c0-4.08 6-4 8-4s8-.08 8 4a2.5 2.5 0 0 1-2.5 2.5Zm-5.5-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      />
    </Svg>
  );
};

export const SearchIcon = () => {
  return (
    <Svg width="24" height="25" fill="none" viewBox="0 0 24 25">
      <Path
        stroke="#001A72"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M18 11a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm2 9.5-4.197-4.197"
      />
    </Svg>
  );
};

export const BackArrow = () => (
  <Svg width="16" height="15" fill="none" viewBox="0 0 16 15">
    <Path stroke="#fff" d="M1 7.5h14.009" />
    <Path
      stroke="#fff"
      d="M0-.5h9.899"
      transform="matrix(.7071 -.7071 .5704 .82137 1 8)"
    />
    <Path
      stroke="#fff"
      d="M0-.5h9.112"
      transform="matrix(.64018 .76822 -.64018 .76822 1 8)"
    />
  </Svg>
);
