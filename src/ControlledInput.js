import React, {useState} from 'react';

function ControlledInput() {
  const [value, setValue] = useState('');
  const inputRef = React.createRef();
  // this.state = {value: ''};
  // this.setState({value: 'foo'}) ==> setValue('foo')

  const onValueChange = () => {
    // 1. use the event
    // 2. query dom
    // 3. use Ref
    const val = inputRef.current.value;
    setValue(val.toUpperCase());
  };

  return <div>
    <div><input type='text' /></div>
    <div><input type='text' value='Unchangeable' /></div>
    <div><input ref={inputRef} type='text' onChange={onValueChange} value={value} /></div>
  </div>
}

export default ControlledInput;