import React from 'react';

const Button = ({ children }) => <button type='button' className='btn'>{children}</button>;
const PrimaryButton = ({ children }) => <button type='button' className='btn btn-primary'>{children}</button>;

function WrapperComponent() {
  return <>
    <Button>Button</Button>
    <PrimaryButton>Primary Button</PrimaryButton>
  </>;
}

export default WrapperComponent;