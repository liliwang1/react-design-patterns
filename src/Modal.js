import React, { useState } from 'react';

function Modal({title, onModalClose, children}) {
  return <div className='modal' >
    <div className='modal-bg' onClick={onModalClose} />
    <div className='modal-wrapper'>
      <div className='modal-head'>{title}</div>
      <div className='modal-body'>
        {children}
      </div>
      <div className='modal-footer'/>
    </div>
  </div>
}

function ModalApp() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const onModalClose = () => {
    setShowModal1(false);
    setShowModal2(false);
  };

  return <div>
    <button type='button' onClick={() => setShowModal1(true)}>Modal 1</button>
    <button type='button' onClick={() => setShowModal2(true)}>Modal 2</button>
    {showModal1 && <Modal title='Alert 1' onModalClose={onModalClose}>This is the first modal</Modal>}
    {showModal2 && <Modal title='Alert 2' onModalClose={onModalClose}>This is the second modal</Modal>}
  </div>;
}

export default ModalApp;