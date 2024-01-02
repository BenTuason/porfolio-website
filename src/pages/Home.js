import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import CPU from './CPU.png';
import brens from './Brenshams.png'

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
    
    <h1 className='w-full font-bold mb-2 sm:mb-0 py-1'>Contact Me!</h1>
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
              Leading a student group as the technical lead to educate on training CNNs, RNNs, 
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
  <button className='item2 hover:underline' onClick={() => showProjectDescription('traffic')}>Real Time Traffic Router & Scheduler</button>
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
    {selectedProject === 'traffic' && (<div className='projectdescription flex flex-col items-center justify-center border-solid border-2 border-gray-500 mt-2'>
                        <h1 className='font-bold text-2xl text-left mx-2'>Traffic description</h1>
                        </div>
                )}
    {selectedProject === 'library' && (<div className='projectdescription flex flex-col items-center justify-center border-solid border-2 border-gray-500 mt-2'>
                        <h1>Library description</h1>
                    </div>
                )}
    {selectedProject === 'quantum' && (<div className='projectdescription flex flex-col items-center justify-center border-solid border-2 border-gray-500 mt-2'>
                        <h1>Quantum description</h1>
                    </div>
                )}
    {selectedProject === 'cloud' && (<div className='projectdescription flex flex-col items-center justify-center border-solid border-2 border-gray-500 mt-2'>
                        <h1>Cloud description</h1>
                    </div>
                )}
    {selectedProject === 'sorting' && (<div className='projectdescription flex flex-col items-center justify-center border-solid border-2 border-gray-500 mt-2'>
                        <h1>Sorting Algorithms description</h1>
                    </div>
                )}
    {selectedProject === 'discord' && (<div className='projectdescription flex flex-col items-center justify-center border-solid border-2 border-gray-500 mt-2'>
                        <h1>Discord description</h1>
                    </div>
                )}
    {selectedProject === 'girlfriend' && (<div className='projectdescription flex flex-col items-center justify-center border-solid border-2 border-gray-500 mt-2'>
                        <h1>Girlfriend Christmas Gift description</h1>
                    </div>
                )}
    {selectedProject === 'blockchain' && (<div className='projectdescription flex flex-col items-center justify-center border-solid border-2 border-gray-500 mt-2'>
                        <h1>Blockchain Data Visualizer description</h1>
                    </div>
                )}
    </div>
    </div>
    </div>
    
  );
}

export default Home;