import React, { useState } from 'react';
import { setRole} from "../components/Redux/Actions/ProductActions";
import { useDispatch } from 'react-redux';

const ModalExample = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [userName,setUserName]=useState('');
  const dispatch = useDispatch();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  

  return (
    <div>
      <h4>Modal Example</h4>
      <button
        onClick={openModal}
        style={{
          padding: '10px',
          background: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Click to open modal
      </button>

      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '5px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
              maxWidth: '400px',
              width: '100%',
              position: 'relative',
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                fontSize: '20px',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
              }}
            >
              x
            </button>
            <div>
            
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalExample;
