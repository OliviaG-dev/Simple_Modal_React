import { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from './lib/components/modal/modal'

function App() {
    //useState 'true' for see modal
    const [isShow, setIsShow] = useState(false);
    const closeModal = () => {
        setIsShow(!isShow)
    }
    return isShow ? ReactDOM.createPortal(
        <>
            <Modal text='Your text here!' closeModal={(e) => closeModal()} />
        </>, document.body
        
    )
    :
    null
}

export default App;
