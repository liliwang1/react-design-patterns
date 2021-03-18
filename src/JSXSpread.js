import React from 'react';

function Name({name, punctuation}) {
  return <span>{name}{punctuation}</span>
}

function Greeting({greeting, ...restProps}) {
  return <span>
    {greeting} <Name {...restProps}/>
  </span>
}

function Wrapper(props) {
  return <div><Greeting {...props} /></div>
}

function JSXSpread() {
  return <Wrapper greeting="Hello" name="Gaurav" punctuation="!" />
}

export default JSXSpread;