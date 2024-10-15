
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Declaration = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = () => {
      toast.success('Email sent successfully!', {
        position: "top-center", // Set position as a string
        autoClose: 3000, // Auto close after 3 seconds
    });
    }

return(
<>
<div className="container-fluid text-center">
    <div className="container">
      <ToastContainer/>
    <button className='bg-secondary p-2 border-0 bg-gradient rounded-2 text-white' onClick={handleShow}>
       Stay Connected 
      </button>
      <p className="text-black-50 pt-2 name-font1">Krishna Prasad 2024 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512"/>
</svg>  rights All Reserved</p>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Declaration</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-algn p-3'>
        Although I’m currently looking for any new opportunities, My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </Modal.Body>
        <Modal.Footer>
        <button className='bg-success bg-gradient p-2 rounded-2 border-0 text-white' onClick={handleClick}>Connect</button>
          <button className='bg-secondary bg-gradient p-2 rounded-2 border-0 text-white' onClick={handleClose}>
            Close
          </button>
          
        </Modal.Footer>
      </Modal>


    </div>
</div>
</>
)
}

export default Declaration;