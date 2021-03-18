import React, { useEffect, useState } from 'react';

// Child that is sent as a prop is not a React.Element or valid JSX
// ... instead, it's a function that can be called

// function getWidthFunction(widthNumber) {
//   return (width) => width > widthNumber ? `Min Width is met ${widthNumber}` : null;
// }

function MinWidth( width ) {
  return width > 800 ? 'Min Width is met. Render is okay' : null;
}

function Width({children}) {
  return <div>{children(window.innerWidth)}</div>;
}

function RenderProp() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    window.addEventListener('resize', ({ target }) => setWidth(target.innerWidth));
    // TODO: WHAT's MISSING HERE??!
  }, []);
  return <>
    <div>Width is {width}</div>
    <Width>{MinWidth}</Width>
    {/* {<Width>{getWidthFunction(800)}</Width>
    <Width>{getWidthFunction(1000)}</Width>
    <Width>{getWidthFunction(1200)}</Width>} */}
  </>;
}

export default RenderProp;