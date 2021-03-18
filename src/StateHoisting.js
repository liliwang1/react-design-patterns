import React, { useState } from 'react';

const colors = ['#FF0000', '#00FF00', '#0000FF'];

function Timer({color, updateColor}) {
  return <div>
    <button style={{ backgroundColor: color }} onClick={updateColor}>{color}</button>
  </div>;
}

function StateHoisting() {
  const [color, setColor] = useState(0);
  const updateColor = () => {
    setColor((color + 1) % colors.length);
  }

  return <>
    <Timer color={colors[color]} updateColor={updateColor} />
    <Timer color={colors[color]} updateColor={updateColor} />
    <Timer color={colors[color]} updateColor={updateColor} />
  </>
}

export default StateHoisting;