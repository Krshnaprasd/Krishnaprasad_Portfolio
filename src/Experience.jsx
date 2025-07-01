import { useState } from 'react';
import Card1 from './assets/examsdaily.jpg'
import Card2 from './assets/Bluestone.jpg'
import Card3 from './assets/s24.JPG'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

const Experience = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        document.getElementById('background-content').classList.remove('blur');
    };
    const handleShow = () => {
        setShow(true);
        document.getElementById('background-content').classList.add('blur');
    };

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => {
        setShow1(false);
        document.getElementById('background-content').classList.remove('blur');
    };
    const handleShow1 = () => {
        setShow1(true);
        document.getElementById('background-content').classList.add('blur');
    };
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => {
        setShow2(false);
        document.getElementById('background-content').classList.remove('blur');
    };
    const handleShow2 = () => {
        setShow2(true);
        document.getElementById('background-content').classList.add('blur');
    };










    return (
        <>
            <div className="container-fluid " id='background-content'>
                <div className='name-font container  text-center '>
                    <div className="text-center fs-2 fw-bold name-font1 pb-4">Area of <span className="fs-2 fw-bold name-font">Expertise</span></div>
                    <div className='justify-content-evenly d-md-flex d-grid'>
                        <Card className='m-3' style={{ width: '18rem', height: '18.5rem' }}>
                            <Card.Img variant="top" src={Card1} className='shadow-sm'/>
                            <Card.Body>
                                <Card.Title className='fs-5 fw-bold name-font'>Full Stack Developer</Card.Title>
                                <Card.Text>
                                  Mathy ExamsDaily Pvt Ltd <br></br> AUG 2023 - Present
                                </Card.Text>
                                <button className=' bg-tertiary bg-gradient p-2 ps-5 pe-5 rounded-2 border-0 shadow-sm' onClick={handleShow}>Tap more</button>
                            </Card.Body>
                        </Card>
                        <Card className='m-3' style={{ width: '18rem', height: '18.5rem' }}>
                            <Card.Img variant="top" src={Card2} />
                            <Card.Body>
                                <Card.Title className='fs-5 fw-bold name-font'>Retail Representative </Card.Title>
                                <Card.Text>
                                    Bluestone pvt ltd.<br></br>
                                    SEP 2022 to AUG 2023
                                </Card.Text>
                                <button className='bg-secondary bg-gradient p-2 ps-5 pe-5 rounded-2 shadow-sm border-0 text-white' onClick={handleShow1}>Tap more</button>
                            </Card.Body>
                        </Card>
                        <Card className='m-3' style={{ width: '18rem', height: '18.5rem' }}>
                            <Card.Img variant="top" src={Card3} />
                            <Card.Body>
                                <Card.Title className='fs-5 fw-bold name-font'>Facility Manager</Card.Title>
                                <Card.Text>
                                    S24*7 Facility Services Pvt Ltd <br></br>
                                    AUG 2021 to SEP 2022
                                </Card.Text>
                                <button className='bg-tertiary shadow-sm bg-gradient p-2 ps-5 pe-5 rounded-2 border-0 ' onClick={handleShow2}>Tap more</button>
                            </Card.Body>
                        </Card>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Roles & Responsibilities</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <ul className='text-algn'>
                                    <li>Provided technical support by troubleshooting any reported bugs or errors occurring within the system.</li>
                                    <li>Collaborated with other developers to identify areas of improvement within the application stack.</li>
                                    <li>Developed and maintained web applications using  React.js,  Node.js, JavaScript, Tailwind CSS, Java, springboot.</li>
                                    <li>Assisted in designing database schemas for efficient storage of information related to web application's functionality.</li>
                                    <li>Tested and debugged front-end and back-end components for web applications.</li>
                                    <li>Utilized Git for version control, facilitating team collaboration and code management.</li>
                                </ul>
                            </Modal.Body>
                        </Modal>
                        <Modal
                            show={show1}
                            onHide={handleClose1}
                            backdrop="static"
                            keyboard={false}
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Roles & Responsibilities</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <ul className='text-algn'>
                                    <li>Manage the sales, operations, marketing & administration of the Showroom. </li>
                                    <li>Executive to greeting customers and fulfill their needs at their satisfaction.</li>
                                    <li>Involve in counter sales to understand sales,product, customer purchase behavior, market trends.</li>
                                    <li>Marketing team advisor to advertise, promote,doing activities to increase the customers. </li>
                                </ul>
                            </Modal.Body>
                        </Modal>
                        <Modal
                            show={show2}
                            onHide={handleClose2}
                            backdrop="static"
                            keyboard={false}
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Roles & Responsibilities</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <ul className='text-algn'>
                                    <li>Assign and schedule work tasks with other facility technicians.</li>
                                    <li>To evaluate all work requests both scheduled and unscheduled as well as any special projects that arise including Soft services.</li>
                                    <li>Preparing Reports, Costs & Quotations, Documentation, Invoices, Ticket Raising, Checklist.</li>
                                    <li>Perform as a Team Coordinator, Team lead, Supervising. </li>
                                </ul>
                            </Modal.Body>
                        </Modal>
                    </div>



                </div>
            </div>

        </>
    )
}

export default Experience;