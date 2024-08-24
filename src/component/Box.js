import React from 'react';
import { useSelector } from 'react-redux';
import GrandSonBox from './GrandSonBox';

function Box() {
  const count = useSelector((state) => state.count);
  return (
    <div>
      This is box {count}
      <GrandSonBox />
    </div>
  );
}

export default Box;
