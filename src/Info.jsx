import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const Info = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        setIsButtonDisabled(true);

        emailjs.send('service_email997', 'template_kcha997', formData, 'g_PNRX2blxjG8Pehu')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success('Email sent. Reach out soon !', {
                    position: "top-center", // Set position as a string
                    autoClose: 3000, // Auto close after 3 seconds
                });
            })
            .catch((err) => {
                console.error('FAILED...', err);
                toast.error('Failed to send the email. Try again later.', {
                    position: "top-center", // Set position as a string
                    autoClose: 3000, // Auto close after 3 seconds
                });
            })
            .finally(() => {
                // Re-enable the button after 5 seconds
                setTimeout(() => {
                    setIsButtonDisabled(false);
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        message: ''
                    });
                }, 5000);
            });
    };

    return (
        <>
            <div className="container">
                <div className="text-center fs-2 fw-bold name-font1 pb-4">Keep in<span className="fs-2 fw-bold name-font"> touch</span></div>
                <div className="row">
                    <ToastContainer />
                    <div className="col pt-5 d-flex justify-content-center">
                        <Form style={{ width: 350 }}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address:</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="mail@example.com"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Phone:</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter your number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <div className='text-center'>
                                <button
                                    className='border-0 p-1 infobg text-white rounded-2'
                                    style={{ width: 350 }}
                                    onClick={handleClick}
                                    disabled={isButtonDisabled} // Disable button based on state
                                >
                                    Let's Connect
                                </button>
                            </div>
                        </Form>
                    </div>
                    <div className="col pt-5 d-flex justify-content-center">
                        <div className="card" style={{ width: 300 }}>
                            <span>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2294290559057!2d78.1137209739389!3d9.914840523487646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c58188defae9%3A0x525fe1a5d116ddb!2sSankar%20Electronics%20Store!5e0!3m2!1sen!2sin!4v1700201098322!5m2!1sen!2sin"
                                    width="300"
                                    height="350"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </span>
                            <span className="text-center p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>&nbsp;
                                <span>No 5, South Masi Street,<br />
                                    Madurai -625001.</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Info;
