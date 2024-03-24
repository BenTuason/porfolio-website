import Navbar from '../components/Navbar';
import React, { useState } from 'react';
const Home = () => {
  const [selectedProject, setSelectedProject] = useState('library');

    const showProjectDescription = (projectName) => {
        setSelectedProject(projectName);
    };
  return (
    <div className='bg-[#FAEED1] h-screen w-full flex flex-col h-screen'>
      <Navbar />
      
      <div className='flex flex-grow overflow-hidden'> {/* Main flex container */}
        
        {/* Fixed-width container for Intro Text, Education, and Experiences */}
        <div className='w-1/3 overflow-y-auto experiences border-solid border-2 border-gray-600 mx-5 my-2 '> {/* Adjust the width as needed */}
          <div className="intro text">
            {/* Intro Text */}
            <p className='ml-2 mr-2'>Hello! My name is Ben Tuason and my goals are to pursue a PhD in Computer Science and to reduce carbon emissions from current computing services.</p>
            <p className='ml-2 mr-2 mt-2'>My research interests include a machine learning, deep learning, high-performance computing, cloud computing, cryptography, and optimization.</p>
            <ul className='ml-2 mr-2 mt-2'>
              Skills:
              <li>- Python (Classiq, Qiskit, Tensorflow, Pytorch, Numpy, Matplotlib, Scipy)</li>
              <li>- C/C++</li>
              <li>- ReactJS, NodeJS, MySQL, SQL</li>
              <li>- Git/Github</li>
              <li>- AWS Lambda Functions</li>
              <li>- Matlab, R</li>

            </ul>
          </div>
          <div className="studies py-3">
            {/* Studies */}
            <p className="italic ml-2 mr-2">Currently studying Computer Science and Mathematics with a focus on Data Science @ The University Of Houston.</p>
            <div className='px-2'><p className='w-full border-t-2 border-gray-600 my-2'></p></div>
          </div>
          
          <div className='contactMe text-center sm:flex sm:flex-row sm:flex-wrap md:flex-col'>
    
    <h1 className='w-full font-bold mb-2 sm:mb-0'>Contact Me!</h1>
    <div className='flex flex-wrap justify-center'>
        <a className='px-4 hover:underline' href="mailto:benjosedaa@gmail.com">Email</a>
        <a className='px-4 hover:underline' href="https://www.instagram.com/benttuason/">Instagram</a>
        <a className='px-4 hover:underline' href="https://www.linkedin.com/in/bentuason">LinkedIn</a>
        <a className='px-4 hover:underline' href="https://github.com/ben123-source">GitHub</a>
    </div>
    <div className='px-2'><p className='w-full border-t-2 border-gray-600 my-2'></p></div>
</div>
    
          <div>
            {/* Experiences */}
            <h1 className=' font-bold py-2 ml-2 mr-2'>Experiences</h1>
            <div className="experience py-2 ml-2 mr-2">
            <h2 className='py-2 underline'>University of Houston Teaching Assistant</h2>
            <h3 className='italic py-2'>January 2024 - Present</h3>
            <p>
              Currently TA'ing for my University's database systems and design course. Grading projects and holding office hours
              where I help students with any class-related questions.
            </p>
            <p className='w-full border-t-2 border-gray-600 my-2'></p>
          </div>
            <div className="experience py-2 ml-2 mr-2">
            <h2 className='py-2 underline'>University of Houston Intelligent Data and Systems Lab (IDS)</h2>
            <h3 className='italic py-2'>November 2023 - Present</h3>
            <p>
              Working under Dr Feng Yan where we are optimizing batch prompting for LLMs to enhance GPU resource utilization and 
              increase computing efficiency, alongside researching and analyzing alternative 
              technologies to identify a sustainable solution that reduces the carbon footprint 
              of LLMs while maintaining optimal performance and user experience.
            </p>
            <p className='w-full border-t-2 border-gray-600 my-2'></p>
          </div>
          
          

          <div className="experience py-2 ml-2 mr-2">
            <h2 className='underline'>University of Houston Real-Time Systems Lab</h2>
            <h3 className='italic py-2'>May 2023 - August 2023</h3>
            <p>
              Developed a Python-based, rate-monotonic scheduling algorithm for traffic management 
              in Houston, successfully reducing average commute times through efficient real-time 
              routing and traffic pattern analysis.
            </p>
            <p className='w-full border-t-2 border-gray-600 my-2'></p>
          </div>

          <div className="experience py-2 ml-2 mr-2">
            <h2 className='underline'>Kumon (Part-Time)</h2>
            <h3 className='italic py-2'>January 2023 - May 2023</h3>
            <p>
              Implemented individualized and group tutoring in English and Mathematics, utilizing 
              innovative teaching strategies and progress tracking systems, which led to improved 
              student attendance and exam scores.
            </p>
            <p className='w-full border-t-2 border-gray-600 my-2'></p>
          </div>

          <div className="experience py-2 ml-2 mr-2">
            <h2 className='underline'>Gong Cha (Part-Time)</h2>
            <h3 className='italic py-2'>May 2021 - Present</h3>
            <p>
              Served as a shift lead at Gong Cha, training staff, managing finances during opening 
              and closing, overseeing tip distribution, and leading the team to ensure efficient 
              operations.
            </p>
            </div>
          </div>
        </div>
        
        {/* Flexbox for Projects */}
        <div className='ml-2 mr-2 projects flex flex-col flex-grow' style={{ width: '100%' }}> 
  <h1 className='font-bold py-2 text-center'>Projects</h1>
  
  <div className=' border-solid border-2 border-gray-500 no-underline grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center '>
  <button className='item2 hover:underline' onClick={() => showProjectDescription('matlab')}>Matlab Projects</button>
  <button className='item3 hover:underline' onClick={() => showProjectDescription('library')}>Full-Stack Library Web-App</button>
  <button className='item4 hover:underline' onClick={() => showProjectDescription('quantum')}>MIT iQuHack Quantum Computing Hackathon</button>  
  <button className='item8 hover:underline' onClick={() => showProjectDescription('girlfriend')}>AI Image Generator </button>
  <button className='item9 hover:underline' onClick={() => showProjectDescription('arith')}>UNIX Arithmetic Synchornization</button>
    </div>
    {selectedProject === 'matlab' && (<div className='flex-grow overflow-y-auto projectdescription border-solid border-2 border-gray-600 mt-2 mb-2'>
                        <h1 className='font-bold text-2xl text-left mx-2'>Matlab Projects</h1>
                        <div className="project">
        <strong className="project-title mx-2">Polynomial Interpolation</strong>
        <p className="project-description mx-2 text-justify">
            This project focused on optimizing a 5th-degree polynomial to accurately fit a set of given data points, with an emphasis on comparing the resulting polynomial to the sine function in terms of accuracy. Through the application of advanced mathematical techniques aimed at error minimization, alongside graphical analysis for evaluating the fit, this project showcased my ability to handle complex numerical computations and data visualization in MATLAB. The project highlights my skills in analytical thinking and problem-solving, particularly in the context of mathematical modeling and approximation.
        </p>
    </div>

    <div className="project">
        <strong className="project-title mx-2">Fourier Transform</strong>
        <p className="project-description mx-2 text-justify">
            In this project, I developed a MATLAB application designed to calculate Fourier coefficients, compute series values, and graphically represent functions alongside their derivatives. This tool greatly simplifies the exploration of Fourier series by automating the intricate calculations involved and visualizing the results for easier interpretation. It demonstrates my proficiency in MATLAB programming, specifically in the areas of signal processing and mathematical visualization, highlighting my capability to translate complex mathematical concepts into practical computational tools.
        </p>
    </div>

    <div className="project">
        <strong className="project-title mx-2">Gram-Schmidt Process</strong>
        <p className="project-description mx-2 text-justify">
            This project entailed creating a MATLAB script capable of converting a set of vectors into orthogonal and orthonormal bases, utilizing the Gram-Schmidt process. It illustrates the practical application of linear algebra principles in transforming vectors and underscores my expertise in numerical methods and linear algebra through MATLAB programming. The script not only serves as a testament to my understanding of advanced mathematical concepts but also my ability to implement these concepts in solving real-world problems.
        </p>
    </div>
                        </div>
                )}
    
    {selectedProject === 'library' && (<div className='flex-grow overflow-y-auto projectdescription border-solid border-2 border-gray-600 mt-2 mb-2'>
                        <h1 className='font-bold text-2xl text-left mx-2'>Full-Stack Library Web-App</h1>
                        <p className="course mx-2"><strong>Course:</strong> Database Design, University of Houston</p>
                        <p className="role mx-2"><strong>Role:</strong> Team Leader</p>
                        <p className="overview mx-2 text-justify">
                            <strong>Overview: </strong>
                               As part of the Database Design course at the University of Houston, I led a team of five in the comprehensive development of a full-stack library web application throughout a semester. This project entailed the utilization of a diverse technology stack, including ReactJS for the creation of an interactive and dynamic user interface, NodeJS for establishing a scalable server-side environment, MySQL for managing a robust database, and TailwindCSS for designing a responsive and aesthetically pleasing user experience. The application was optimally deployed on Heroku’s cloud platform, showcasing our team’s proficiency in full-stack development and cloud computing.
                        </p>
                        <p className="responsibilities mx-2 text-justify">
                            <strong>Responsibilities:</strong>
                            <ul>
                                <li>Conducted extensive code reviews to ensure adherence to clean coding practices and the implementation of efficient algorithms.</li>
                                <li>Managed project timelines, emphasizing modular development and systematic integration to meet deadlines without compromising quality.</li>
                                <li>Collaborated closely with team members to address technical challenges, leading to the creation of a secure, functional, and user-oriented application.</li>
                            </ul>
                        </p>
                        <p className="technical-stack mx-2 text-justify">
                            <strong>Technical Stack:</strong>
                            <ul>
                                <li>Frontend: ReactJS</li>
                                <li>Backend: NodeJS</li>
                                <li>Database: MySQL</li>
                                <li>Styling: TailwindCSS</li>
                                <li>Deployment: Heroku</li>
                            </ul>
                        </p>
                        <p className="outcome mx-2 text-justify">
                            <strong>Outcome: </strong>
                             The project not only fulfilled the course requirements but also served as a practical demonstration of our team’s ability to design, implement, and manage a full-stack application. It highlighted my leadership skills, particularly in guiding team efforts towards achieving a common goal, and reinforced my commitment to developing high-quality software solutions.
                        </p>
                    </div>
                )}
    {selectedProject === 'quantum' && (<div className='flex-grow overflow-y-auto projectdescription border-solid border-2 border-gray-600 mt-2 mb-2'>
                        <h1 className='font-bold text-2xl text-left mx-2'>30 Qbit Hyperbolic Tangent Approximation</h1>
                        <p className="project-achievement text-center"><strong>Achievement:</strong> 2nd Place in the Classiq Challenge at the 2024 MIT IQuHack</p>
                  <div className="project-description mx-2">
                      <p className="overview text-justify">
                          <strong>Overview:</strong> Participating in the prestigious 2024 MIT IQuHack, this project titled "30 Qbit Hyperbolic Tangent Approximation" challenged the conventional bounds of quantum computing. Utilizing the Classiq quantum computing platform, the project focused on approximating the hyperbolic tangent function, a critical operation in various quantum algorithms and simulations. The challenge was divided into three key parts: an introductory warm-up to familiarize with the Classiq environment, the core challenge of developing the approximation algorithm, and a concluding segment featuring a cheat sheet of essential Classiq functions.
                      </p>
                      <p className="features text-justify">
                          <strong>Key Features:</strong>
                          <ul>
                              <li><strong>Dynamic Algorithm Development:</strong> Crafted a robust algorithm to approximate the hyperbolic tangent function with remarkable precision, showcasing the potential of quantum computing in solving complex mathematical problems.</li>
                              <li><strong>Quantum Programming:</strong> Demonstrated adept use of the Classiq SDK for quantum model creation, synthesis, and execution, all while navigating through quantum-specific programming challenges.</li>
                              <li><strong>Optimization and Precision:</strong> Achieved high precision in the algorithm's output by meticulously adjusting the quantum model parameters and employing advanced quantum arithmetic techniques.</li>
                              <li><strong>Collaborative Learning:</strong> Engaged with the Classiq community through its Slack channel, benefiting from the collective knowledge and support which was instrumental in overcoming technical hurdles.</li>
                          </ul>
                      </p>
                      <p className="technical-stack text-justify">
                          <strong>Technical Stack:</strong>
                          <ul>
                              <li>Language: Python</li>
                              <li>Quantum Computing Platform: Classiq</li>
                              <li>Environment: Jupyter Notebook</li>
                              <li>Tools: Classiq SDK, Quantum Circuit Simulation</li>
                          </ul>
                      </p>
                      <p className="outcome text-justify">
                          <strong>Outcome:</strong> This project not only solidified my understanding of quantum computing principles but also underscored the importance of precision and optimization in quantum algorithm development. It stands as a testament to my ability to tackle and excel in quantum computing challenges, marking a significant milestone in my journey through the quantum computing landscape.
                      </p>
                      </div>
                    </div>
                )}
    {selectedProject === 'girlfriend' && (<div className='flex-grow overflow-y-auto projectdescription border-solid border-2 border-gray-600 mt-2 mb-2'>
                        <h1 className='font-bold text-2xl text-left mx-2'>AI Image Generator</h1>
                        <div className="project-description mx-2">
                          <p className="overview text-justify">
                              For a distinctive Christmas gift, I embarked on creating the "UIAUI Generator," an interactive web-based image generator, where UIAUI stands for "Us In Another Universe Image." This project presents a whimsical yet technologically advanced platform allowing users to envision themselves as various entities, from raccoons rummaging through trash to tomatoes thriving on a vine, alongside the functionality of a conventional image generator.
                          </p>
                          <p className="technical-stack text-justify">
                              <strong>Technical Stack:</strong>
                              <ul>
                                  <li><strong>Front-end Development:</strong> Utilized ReactJS to deliver a seamless and interactive user experience, incorporating state-of-the-art web development practices to create a dynamic interface.</li>
                                  <li><strong>Integration with OpenAI's API:</strong> Integrated OpenAI's cutting-edge API to dynamically generate images based on user inputs, showcasing the application's unique capability to produce customized visual content.</li>
                                  <li><strong>State Management:</strong> Implemented React Hooks for sophisticated state management, maintaining a reactive and responsive interface that updates in real-time in response to user actions and API communications.</li>
                              </ul>
                          </p>
                          <p className="outcome text-justify">
                              <strong>Outcome:</strong> The "UIAUI Generator" emerged as a testament to my technical prowess and creative thinking, offering a personalized and interactive gift that pushes the boundaries of traditional image generation. It not only served as a unique present but also demonstrated my capability to harness modern web technologies and APIs to create applications that are both fun and functional, all while maintaining optimal performance and user experience.
                          </p>
                      </div>
                    </div>
                )}
    {selectedProject === 'arith' && (<div className='flex-grow overflow-y-auto projectdescription border-solid border-2 border-gray-600 mt-2 mb-2'>
                        <h1 className='font-bold text-2xl text-left mx-2'>UNIX Parallel Arithmetic Processor</h1>
                        <p className='text-justify mx-2'>
                              <strong>Overview:</strong> The UNIX Parallel Arithmetic Processor is a sophisticated C++ program designed to execute arithmetic operations in parallel, leveraging process creation and inter-process communication via pipes. This project illustrates a deep understanding of operating system fundamentals, including process management and IPC mechanisms, by implementing a mini arithmetic expression evaluator that runs operations in parallel for efficiency.
                          </p>
                          <p className='text-justify mx-2'><strong>Features:</strong></p>
                          <ul className='text-justify mx-2'>
                              <li><strong>Dynamic Instruction Parsing:</strong> The program reads and parses a set of instructions from a file, which includes arithmetic operations (addition, subtraction, multiplication, division) and variable assignments.</li>
                              <li><strong>Variable Management:</strong> It dynamically handles both input and internal variables, assigning values and computing expressions based on the parsed instructions.</li>
                              <li><strong>Parallel Execution:</strong> Utilizes UNIX fork() and pipe() system calls to create child processes for executing each arithmetic operation in parallel, showcasing the ability to manage multiple processes and synchronize their execution and data communication.</li>
                              <li><strong>Robust Error Handling:</strong> Implements checks for file I/O operations, pipe creation, process creation (forking), and division by zero exceptions, ensuring the program's robustness in various scenarios.</li>
                          </ul>
                          <p className='text-justify mx-2'><strong>Technical Stack:</strong></p>
                          <ul className='text-justify mx-2'>
                              <li>Language: C++</li>
                              <li>OS: UNIX/Linux (system calls: fork(), pipe(), read(), write())</li>
                          </ul>
                          <p className='text-justify mx-2'>
                              <strong>Outcome:</strong> This project demonstrates the application of system-level programming concepts to solve complex problems, such as parallel computation and process synchronization. It serves as a testament to my ability to design and implement efficient software that interacts closely with the operating system, making it a valuable addition to high-performance computing and educational tools.
                          </p>
                        </div>
                )}          
    </div>
    </div>
    </div>
    
  );
}

export default Home;