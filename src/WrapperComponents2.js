import React from 'react';

function Text({color, bold, children}) {
  return <div style={{
    fontWeight: bold ? 600 : 'normal',
    color: color || undefined,
    fontSize: '12px',
  }}>{children}</div>
}

function WrapperComponent() {
  return <>
    <Text>This is a simple text</Text>
    <Text color='red' small>This is red color text</Text>
    <Text bold medium>This is bold text</Text>
    <Text bold large color='red'>This is bold red text</Text>
  </>;
}

export default WrapperComponent;