import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import CPU from './CPU.png';
import brens from './Brenshams.png'
import pipe from './pipelien.png'
const Home = () => {
  const [selectedProject, setSelectedProject] = useState('cpu');

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
            <p className='ml-2 mr-2'>Hello! My name is Ben Tuason and I am an enthusiastic student eager to explore and gain hands-on experience in various aspects of technologies. </p>
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
  <button className='item1 hover:underline' onClick={() => showProjectDescription('cpu')}>Digital CPU</button>
  <button className='item2 hover:underline' onClick={() => showProjectDescription('traffic')}>Real-Time Traffic Router & Scheduler</button>
  <button className='item3 hover:underline' onClick={() => showProjectDescription('library')}>Full-Stack Library Web-App</button>
  <button className='item4 hover:underline' onClick={() => showProjectDescription('quantum')}>Quantum Computing Tic-Tac-Toe</button>  
  <button className='item5 hover:underline' onClick={() => showProjectDescription('cloud')}>AWS ETL Data Pipeline</button>
  <button className='item6 hover:underline' onClick={() => showProjectDescription('sorting')}>Sorting Algorithms Visualizer</button>
  <button className='item7 hover:underline' onClick={() => showProjectDescription('discord')}>Discord Reminder Bot</button>
  <button className='item8 hover:underline' onClick={() => showProjectDescription('girlfriend')}>AI Image Generator </button>
  <button className='item9 hover:underline' onClick={() => showProjectDescription('blockchain')}>Blockchain Data Visualizer</button>
    </div>
    {selectedProject === 'cpu' && (<div className='flex-grow overflow-y-auto projectdescription border-solid border-2 border-gray-600 mt-2 mb-2'>
                        <div className='w-full flex justify-center mt-2 mb-2'>
                        <img src={brens} alt='Brenshams Algorithm' className='mr-11 w-1/3'/>
                        <img src={CPU} alt='CPU Screenshot' className = 'ml-11 w-1/3'/>                        
                        </div>
                        <h1 className='font-bold text-2xl text-left mx-2'>Digital CPU</h1>
                        <p className='mx-2 text-justify'>This was my first experience with computer architecture. I started this project because I wanted to learn more about CPUs and GPUs.
                          I built the project fully in Logism for the architecture and Python to aid with mathematical calculations and to aid with writing up assembly code. I'm still working on more features such as a mathematics library capable of doing trigonometric 
                          calculations, matrix multiplication, and more mathematical operations. The project has the minimum necessities and functionalities for a CPU.
                          The goal is to have a digital CPU capable of completing complicated mathematical operations.  
                        </p>
                        <ul className='ml-2'>
                          <li >Features:</li>
                          <li>-Index Register</li>
                          <li>-Arithmetic Logic Unit</li>
                          <li>-Execute Brensham's Algorithm</li>
                          <li>-Assembler </li>
                          <li>-6 General Purpose Registers </li>
                          <li>-Temporary Register </li>
                          <li>-Index Register </li>
                          <li>-Stack Pointer Register </li>
                          <li>-Floating Point Unit Register</li>
                        </ul>
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
                        <h1 className='font-bold text-2xl text-left mx-2'>Quantum Computing Tic-Tac-Toe</h1>
                        <p className='mx-2 text-justify'>
                        After learning about my mathematical proofs professor's research in quantum computing and information theory, a field I've heard about, I took my 
                        first hands-on plunge into this domain by developing a Quantum Tic-Tac-Toe game. This project incorporated quantum superposition and entanglement 
                        principles, allowing the simulation of over 10,000 quantum state transitions. It served as a practical exploration into the computational capabilities 
                        of quantum algorithms, especially in managing complex game dynamics. To create the project, I utilized Qiskit for engineering efficient quantum circuit
                         simulations, focusing on optimizing quantum gate operations. This endeavor not only deepened my understanding of quantum computing but also demonstrated 
                         its potential in algorithmic problem-solving and creating advanced game mechanics.
                        </p>
                    </div>
                )}
    {selectedProject === 'cloud' && (<div className='flex-grow overflow-y-auto projectdescription border-solid border-2 border-gray-600 mt-2 mb-2'>
                        <div className='w-full flex justify-center mt-2 mb-2'>
                        <img src={pipe} alt='Pipeline Architecture' className='mx-2 w-1/2'/>
                        </div>
                        <h1 className='font-bold text-2xl text-left mx-2'>AWS ETL Data Pipeline</h1>
                        <p className='mx-2 text-justify'>                      
                        I built a project that introduced me to cloud computing and AWS, focusing on creating an AWS ETL Data Pipeline. This pipeline was meticulously 
                        designed to process data from the Open Weather Map API, utilizing Python for scripting and AWS Glue for seamless data integration. I leveraged AWS S3 buckets for efficient 
                        data storage and AWS Redshift for robust data warehousing, ensuring a reliable and scalable storage solution. The project also featured the integration of Spark within the 
                        AWS environment to expedite data processing, enhancing the pipeline's overall performance. To streamline the workflow, I implemented Airflow, automating the ETL process which 
                        not only reduced the manual effort significantly but also improved the operational efficiency of the data pipeline. This experience provided me with a deep understanding of 
                        cloud-based data management and the intricacies of managing large-scale data workflows.
                        </p>
                    </div>
                )}
    {selectedProject === 'sorting' && (<div className='flex-grow overflow-y-auto projectdescription border-solid border-2 border-gray-600 mt-2 mb-2'>
                        <h1 className='font-bold text-2xl text-left mx-2'>Sorting Algorithms Visualizer</h1>
                        <p className='mx-2 text-justify'>
                        I developed a website dedicated to visualizing various sorting algorithms like heap sort, bubble sort, insertion sort, quick sort, 
                        and merge sort. This project was instrumental in enhancing my understanding of algorithmic complexities, leading to more efficient 
                        sorting implementations. The website featured a sorting speed adjuster, allowing users to interactively manipulate the speed of the 
                        algorithms. This interactive element not only made the complexities of these algorithms more accessible but also provided a clearer 
                        insight into their operational mechanics, thereby aiding in user comprehension of these fundamental computer science concepts.
                        </p>
                    </div>
                )}
    {selectedProject === 'discord' && (<div className='flex-grow overflow-y-auto projectdescription border-solid border-2 border-gray-600 mt-2 mb-2'>
                        <h1 className='font-bold text-2xl text-left mx-2'>Discord Reminder Bot</h1>
                        <p className='mx-2 text-justify'>
                        A simple Discord reminder bot made with java, designed for a private server shared with my girlfriend. The bot's primary function is to send 
                        daily reminders in a specific text-channel named 'gratitude', prompting both of us to write one thing we're grateful for each 
                        night. This small yet meaningful automation fosters a habit of reflection and gratitude in our daily routine, enhancing our c
                        onnection and mindfulness. The bot serves as a gentle nudge to pause and appreciate the small joys and blessings in our lives, 
                        reinforcing positive habits within our personal space on Discord.
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