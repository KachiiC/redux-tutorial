import React, {useState} from 'react'
import './App.css';
import Modal from './components/modal'

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal content="hello world"
          onCloseButtonClick={() => setShowModal(false)}
        />
      )}
      <div className="App">
        <header className="App-header">
          <button onClick={() => {setShowModal(true);}}>
            Show Modal
          </button>
        </header>
      </div>
    </>
  );
}

export default App;
