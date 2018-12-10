import './Form.css';

import React, {useState} from 'react';

 function Form(props) {
  const [value, setValue] = useState('');
  const clickHandle = () => {
    if (typeof props.add === 'function' && value.length > 0) {
      props.add(value);
    }
    setValue('');
  }
  return (
    <div className="wrapper">
      <input
       value={value} 
       onChange={(ev) =>{setValue(ev.target.value)}} 
       className="input"
       placeholder={'todo..'}
      />
      <button className={'btn'} onClick={clickHandle}>
        Add
      </button>
    </div>
  );
}


export default Form;