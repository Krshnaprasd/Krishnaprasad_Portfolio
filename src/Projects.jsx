import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Encore from './assets/Encore.png'
import Econnect from './assets/Econnect.png'
import TicTacToe from './assets/TicTacToe.png'
import FoodNest from './assets/foodNest.png'

const Projects = () => {

    return (
        <>
            <div className="container">
            <div className="text-center fs-2 fw-bold name-font pt-3 pb-4">Projects</div>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <span className='fs-5 fw-bold'>Encore - Telecalling, Inventory</span></Accordion.Header>
                        <Accordion.Body>
                            <div className='d-flex justify-content-center'>
                            <Card  style={{ width: '65rem' }}>
                                <Card.Img className='' variant="top" src={Encore} />
                                <Card.Body>
                                    <Card.Text>
                                    <p>Name: ENCORE</p>
                                    <p>URL: Encore</p>
                                    <p>APP: Encore Telecaller, Inventory</p>
                                    <p>Environment: Vue.js, Quasar, SpringBoot, PostgreSQL</p>
                                    <p>Domain: Telecalling and Educational Management System</p>    
                                    <span className='fs-5 fw-bold'>Tele-calling</span><br></br><br></br>
                                       <ul>
                                        <li><span className='fw-bold'>Telecaller System:</span> Developed a Vuejs frontend for telecallers to manage customer details and follow-up on exams, course promotions, courses and book orders.</li>
                                        <li><span className='fw-bold'>Multitenancy with Spring Boot:</span> Implemented Spring Boot with PostgreSQL to ensure data security and isolation for different clients.</li>
                                        <li><span className='fw-bold'>Admin Role: </span>Introduced an admin role to manage telecaller activities, enquiries, admissions, and user creation.</li>
                                        <li><span className='fw-bold'>Lead Management:</span> Implemented manual lead creation and bulk lead upload, with features to assign telecallers for follow-ups. </li>
                                        <li><span className='fw-bold'>Super Admin:</span> Created a super admin role for team creation and management, with separate data for each team.</li>
                                        <li><span className='fw-bold'>Customer Transition:</span> Focused on transitioning customer statuses from enquiry to admission, including course purchase logic.</li>
                                        <li><span className='fw-bold'>Call Monitoring:</span> Admin panel displays telecaller call logs for monitoring, including call counts and speaking time analysis.</li>
                                       </ul>
                                       <span className='fs-5 fw-bold'> Inventory</span><br></br><br></br>
                                       <ul>
                                        <li><span className='fw-bold'>Inventory System:</span> Developed a Vuejs frontend for inside workers to manage courses, books and follow-up on storage purpose.</li>
                                        <li>In Inventory panel we can store depend upon their category, items and inventories.</li>
                                        <li><span className='fw-bold'>HR & Admin Role:</span> Introduced an HR role as well as  admin  to manage storage activities, inventories, and necessity needs .</li>
                                       </ul>
                                       <span className='fs-5 fw-bold'>Book Inventory</span><br></br><br></br>
                                       <ul>
                                        <li>In Inventory panel we can store depend upon their category, items and inventories.</li>
                                        <li>Also, In this Book inventory-panel we can create book bundle also to track the book orders whether it is dispatched, partial dispatched or delivered etc</li>
                                       <li>Also courier panel we can disptach books track their status</li>
                                       </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion><br></br>

                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <span className='fs-5 fw-bold'>FoodNest - Food website clone </span></Accordion.Header>
                        <Accordion.Body>
                            <div className='d-flex justify-content-center'>
                            <Card  style={{ width: '60rem' }}>
                                <Card.Img className='' variant="top" src={FoodNest} />
                                <Card.Body>
                                    <Card.Text>
                                    <p>Name: FoodNest - Food cloning website</p>
                                    <p>Environment:  React.js, Node.js, MongoDB</p>
                                  
                                    <span className='fs-3 fw-bold'>User</span> <br></br><br></br>
                                      <ul>
                                        <li>I developed the FoodNest platform with a focus on seamless user experience, tailored specifically for single-handed users.</li>
                                   
                                        <li> Customers can browse a wide range of food categories, add items to their cart, and place orders, with the validation ensuring that each user’s cart and orders are securely tied to their specific user ID. </li>
                                   
                                        <li>This means when users log in, they only see their own cart and order history, with no visibility into others’ activities, ensuring a personalized and private experience.</li>
                                    
                                        <li>FoodNest also integrates real-time notifications for order confirmations and uses Nodemailer to send reservation details directly to the user’s email.</li>
                               
                                        <li>This project highlights my ability to create engaging, functional, and visually appealing web applications.</li>
                                    </ul>

                                    
                                    <span className='fs-3 fw-bold'>Admin</span> <br></br><br></br>
                                      <ul>
                                        <li>For administrators, FoodNest provides a robust backend management system where they can oversee and manage product listings, categories, and incoming orders.</li>
                                   
                                        <li>Built with React.js for the frontend, Node.js for the backend, and MongoDB as the database, the system allows efficient data handling and order management. </li>
                                   
                                        <li>Admins can also track user reservations and orders, ensuring smooth operation.</li>
                                    
                                        <li>The use of Nodemailer helps administrators handle communication with customers, automatically notifying them about order statuses and table reservations.</li>
                               
                                 
                                    </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion><br></br>

                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <span className='fs-5 fw-bold'>E-connect - HRM clone</span></Accordion.Header>
                        <Accordion.Body>
                            <div className='d-flex justify-content-center'>
                            <Card  style={{ width: '60rem' }}>
                                <Card.Img className='' variant="top" src={Econnect} />
                                <Card.Body>
                                    <Card.Text>
                                    <p>Name: E-CONNECT</p>
                                    <p>URL: E-Connect</p>
                                    <p>APP: E-Connect - HRM Clone</p>
                                    <p>Environment: React.js, SpringBoot, H2 Database</p>
                                  
                                    <span className='fs-3 fw-bold'> User</span> <br></br><br></br>
                                      <ul>
                                        <li>About the company, vision & mission, courses to be taken these has to be detailed.</li>
                                   
                                        <li>In these fields just see the updates about salary details, attendance and job openings.</li>
                                   
                                        <li>In these fields we can requests leave, salary advance, resignation, permission etc</li>
                                    
                                        <li>In day to day activities each month punchlists cross-check the Checkin- Checkout timings and the status.  </li>
                               
                                        <li>User side the basic details, bank details and personal details we can edit & modify.</li>
                                    </ul>
                                    <span className='fs-3 fw-bold'> Admin</span> <br></br><br></br>
                                    <ul>
                                        <li>Admin side we can add-on the employee details, the basic details, bank details and personal details, Salary, Job openings, Attendances  we can edit & modify.</li>
                                    </ul>
                                
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion><br></br>

                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <span className='fs-5 fw-bold'>Tic-Tac-Toe Game</span></Accordion.Header>
                        <Accordion.Body>
                            <div className='d-flex justify-content-center'>
                            <Card  style={{ width: '60rem' }}>
                                <Card.Img className='' variant="top" src={TicTacToe} />
                                <Card.Body>
                                    <Card.Text>
                                    <p>Name: Tic-Tac-Toe Game</p>
                                    <p>Environment: React.js</p>
                                  
                                    <span className='fs-3 fw-bold'>Project Description</span> <br></br><br></br>
                                      <ul>
                                        <li>I developed a dynamic Tic-Tac-Toe game using React.js, integrating real-time state management and interactive UI components.</li>
                                   
                                        <li> This project showcases my proficiency in React hooks, component-based architecture, and state management.</li>
                                   
                                        <li>The game features a responsive design, real-time win detection, and user-friendly alerts for victories or draws using SweetAlert2. </li>
                                    
                                        <li> Players can enjoy a seamless experience with immediate feedback and a reset option to start fresh.</li>
                               
                                        <li>This project highlights my ability to create engaging, functional, and visually appealing web applications.</li>
                                    </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>


        </>
    )
}

export default Projects;