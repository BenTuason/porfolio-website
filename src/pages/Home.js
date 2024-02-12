import Navbar from '../components/Navbar';
import React, { useState } from 'react';
const Home = () => {
  const [selectedProject, setSelectedProject] = useState('traffic');

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
              <li>- Python (Classiq, Qiskit, Tensorflow, Pytorch, Numpy, Matplotlib, Scipy, Web3py)</li>
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
            <h2 className='underline'>Ferguson Control Systems Co-op</h2>
            <h3 className='italic py-2'>November 2023 - Present</h3>
            <p>
              Leading a student group as the technical lead to train deep learning models such as CNNs, RNNs, 
              and transformers for tasks like image recognition and language processing, while 
              also conducting research on blockchain data to analyze smart contract interactions 
              and token transfers, enhancing data visualization tools and effort distribution.
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
  
  <div className=' border-solid border-2 border-gray-500 no-underline grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
  <button className='item2 hover:underline' onClick={() => showProjectDescription('matlab')}>Matlab Projects</button>
  <button className='item3 hover:underline' onClick={() => showProjectDescription('library')}>Full-Stack Library Web-App</button>
  <button className='item4 hover:underline' onClick={() => showProjectDescription('quantum')}>MIT iQuHack Quantum Computing Hackathon</button>  
  <button className='item8 hover:underline' onClick={() => showProjectDescription('girlfriend')}>AI Image Generator </button>
  <button className='item9 hover:underline' onClick={() => showProjectDescription('blockchain')}>Blockchain Data Visualizer</button>
    </div>
    {selectedProject === 'matlab' && (<div className='flex-grow overflow-y-auto projectdescription border-solid border-2 border-gray-600 mt-2 mb-2'>
                        <h1 className='font-bold text-2xl text-left mx-2'>Matlab Projects</h1>
                        <h2 className='font-bold text-xl text-left mx-2 mt-3'>Polynomial Interpretation</h2>
                        <p className='mx-2 text-justify'> Optimized a 5th-degree polynomial to fit data points and compared it to the sine function for accuracy. This involved 
                        mathematical techniques for error minimization and graphical analysis to evaluate the fit.
                        </p>
                        <h2 className='font-bold text-xl text-left mx-2 mt-3'>Fourier Transform</h2>
                        <p className='mx-2 text-justify'> developed a MATLAB application that calculates Fourier coefficients, computes series values, and graphically
                         represents functions and their derivatives. The tool simplifies the exploration of Fourier series by automating complex calculations and visualizing results.
                        </p>
                        <h2 className='font-bold text-xl text-left mx-2 mt-3'>Gram-Schmidt Process</h2>
                         <p className='mx-2 text-justify'> created a MATLAB script to convert a set of vectors into orthogonal and orthonormal bases. This script demonstrates the 
                         application of linear algebra principles in transforming vectors, showcasing proficiency in numerical methods and linear algebra through MATLAB programming.
                        </p>
                        </div>
                )}
    {selectedProject === 'traffic' && (<div className='flex-grow overflow-y-auto projectdescription border-solid border-2 border-gray-600 mt-2 mb-2'>
                        <h1 className='font-bold text-2xl text-left mx-2'>Real-Time Traffic Router & Scheduler</h1>
                        <p className='mx-2 text-justify'>From my Research with Professor Albert Cheng and two other teammates at the UH Real-Time Systems Lab, I spearheaded the development of a 
                        Python-based, rate-monotonic scheduling algorithm aimed at revolutionizing traffic management in Houston. Utilizing a blend of advanced machine 
                        learning techniques, including Q-learning, linear regression, and reinforcement learning, the project was anchored on TensorFlow, Keras, and NumPy. 
                        My approach involved meticulously developing and fine-tuning machine learning models to simulate and optimize traffic patterns, achieving a notable 
                        89% accuracy rate. This precision in modeling, coupled with effective parameter tuning and dataset preprocessing, led to a marked improvement in real-time traffic routing. 
                        The result was a substantial enhancement in routing efficiency, reducing average commute times and streamlining the city’s traffic flow, ultimately achieving a 
                        significant reduction in training time and a 15% increase in routing efficacy.
                        </p>
                        </div>
                )}
    {selectedProject === 'library' && (<div className='flex-grow overflow-y-auto projectdescription border-solid border-2 border-gray-600 mt-2 mb-2'>
                        <h1 className='font-bold text-2xl text-left mx-2'>Full-Stack Library Web-App</h1>
                        <p className='mx-2 text-justify'>In my Database Design course at the University of Houston, I headed a team of five in the intricate development 
                        of a full-stack library web application over a semester. This project involved a multifaceted technology stack: ReactJS for interactive and dynamic 
                        user interface creation, NodeJS for building a scalable and efficient server-side environment, MySQL for robust and reliable database management, 
                        and TailwindCSS for crafting a responsive and modern user experience, all while ensuring optimal deployment on Heroku’s cloud platform. My role as 
                        the team leader entailed conducting thorough code reviews, where I emphasized clean coding practices and efficient algorithm implementation. 
                        Additionally, I managed and fine-tuned project timelines, focusing on modular development and systematic integration, thereby crafting an 
                        application that was not only functional and secure but also finely tuned to user needs in terms of usability and performance.
                        </p>
                    </div>
                )}
    {selectedProject === 'quantum' && (<div className='flex-grow overflow-y-auto projectdescription border-solid border-2 border-gray-600 mt-2 mb-2'>
                        <h1 className='font-bold text-2xl text-left mx-2'>30 Qbit Hyperbolic Tangent Approximation</h1>
                        <p className='mx-2 text-justify'>
                        During the MIT iQuHack Quantum Computing Hackathon, held on February 2-4, 2023, our team developed a tanh approximation algorithm leveraging the 
                        principles of entanglement and superposition, aimed at enhancing precision within the limitations of a 30-qubit system. By incorporating a blend of 
                        Runge-Kutta methods and various degrees of Taylor series expansions, we tailored our approach to suit quantum computing's unique requirements, 
                        focusing on optimizing both computational efficiency and algorithmic accuracy. This careful balance and innovative adaptation of classical 
                        numerical methods to the quantum context enabled us to achieve an impressive 95% accuracy rate, culminating in our team securing the 2nd place finish at the event.
                        </p>
                    </div>
                )}
    {selectedProject === 'girlfriend' && (<div className='flex-grow overflow-y-auto projectdescription border-solid border-2 border-gray-600 mt-2 mb-2'>
                        <h1 className='font-bold text-2xl text-left mx-2'>AI Image Generator</h1>
                        <p className='mx-2 text-justify'> 
                        I created an interactive web-based image generator named "UIAUI Generator" as a unique Christmas gift for my girlfriend. The acronym 
                        "UIAUI" stands for "Us In Another Universe Image," and the application allows users to generate imaginative images of us as different 
                        entities, like raccoons in a trashcan or tomatoes on a vine. It also functions as a normal image generator. Built using ReactJS for a 
                        user-friendly front-end, the generator integrates OpenAI's API to dynamically create images based on user inputs. To ensure a smooth and 
                        responsive user experience, I implemented React Hooks for efficient state management, maintaining the application's state for image URLs 
                        and loading status. This approach enabled real-time UI updates in response to user interactions and API requests, ensuring the application 
                        remained responsive and efficient, even during periods of high usage. 
                        </p>
                    </div>
                )}
    {selectedProject === 'blockchain' && (<div className='flex-grow overflow-y-auto projectdescription border-solid border-2 border-gray-600 mt-2 mb-2'>
                        <h1 className='font-bold text-2xl text-left mx-2'>Blockchain Data Visualizer</h1>
                        <p className='mx-2 text-justify'>
                        Currently, as part of a co-op with Ferguson Control Systems, who have connections with MISSO, I am leading a student group as the technical 
                        lead in a research project focused on blockchain analytics and data visualization. Our primary objective is to meticulously analyze blockchain 
                        data, delving into transaction patterns, smart contract interactions, and token transfers. A significant aspect of our work involves creating 
                        and enhancing data visualization tools, which are crucial for improved data comprehension. This ongoing project not only allows us to explore 
                        the intricate dynamics of blockchain technology but also to develop and refine tools that make complex data more accessible and understandable. 
                        Our efforts are geared towards distributing tasks effectively within the group, ensuring a comprehensive and insightful analysis of blockchain data.
                        </p>
                    </div>
                )}
    </div>
    </div>
    </div>
    
  );
}

export default Home;