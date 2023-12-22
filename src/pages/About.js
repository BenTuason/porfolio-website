import Navbar from '../components/Navbar';
import portfoliopic from '../pfp.jpg'; // Import the image here, the path is relative to this file

const About = () => {
    

    return (
        <div className='bg-[#FAEED1]'>
            <Navbar />
            
            <div className="container mx-auto flex flex-col md:flex-row"> {/* This div will be flex container */}
                {/* Image will shrink/grow as needed */}
                <img src={portfoliopic} alt="Ben pfp" className='w-1/2 h-auto mr-7 mt-3 mb-3 '/>
                
                {/* Paragraph styled to be on the right of the image */}
                <div className='text-base md:ml-4'>
                {/* Things I like, Goals, Hobbies, Things I'm learning, Things I want to learn, top 5 songs*/}
                <h1 className='font-bold text-align center mt-3'>About Me</h1>
                <div className='aboutmetext'>
                <p>Goals: My goal in life is to help my family and have a bright future with my girlfriend. My carreer goals are to help the environment by optimizing computing efficiency and reduce carbon emissions through Computer Science. I also want to pursue either a Master's Degree or a PhD in either Computer Science or Mathematics.</p>
                <br></br>
                <p>Hobbies: Read, Listening to Podcasts, Exercising, League of Legends.</p>
                <br></br>
                <p>Things I like: Angelica (My girlfriend), Riding Bikes, Halal Guys, Birria Tacos, Baja Blasts.</p>
                <br></br>
                <p>Things I'm learning: Cybersecurity (Cryptography, Reverse Engineering), Cloud Computing, Large Language Model Inferences, GPU Computing.</p>
                <br></br>
                <p>Things I want to learn: Parallel and Distributed Computing/Systems, Quantum Computing, Probabilistic Algorithms, Indoor Gardening, Latte Art.</p>
                <br></br>
                <p>I was born in the Philippines and moved to Houston, TX at 2013. I also speak both Tagalog and English fluently!</p>
                <br></br>
                <p>I'm involved in the InfoSec Capture The Flag Team at CougarCS at the University of Houston. I'm also a part of multiple clubs such as MISSO (Management Information Sysyems Student Organization), CodeCoogs, CougarCS, and CougarAI. </p>
                <br></br>
                <p>I'm always trying my best to be involved in events and participate in activities related to computer science to continue learning.</p>
                <br></br>
                <p>Please feel free to reach out to my contacts down below!</p>
                <div className="flex">
                <div className='contactMe text-center py-2' style={{ width: '100%' }}>
                    <h1 className='grid grid-row font-bold'>Contact Me!</h1>
                    <div className='contactoptions no-underline'>
                    <a className= 'px-4 hover:underline' href="mailto:benjosedaa@gmail.com">Email</a>
                    <a className= 'px-4 hover:underline' href="https://www.instagram.com/benttuason/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">Instagram</a>
                    <a className= 'px-4 hover:underline' href="https://www.linkedin.com/in/bentuason">LinkedIn</a>
                    <a className= 'px-4 hover:underline' href="https://github.com/ben123-source">GitHub</a>
                    </div>
                </div>
            </div>
                </div>
                </div>                
                </div>
            
        </div>
    );
}

export default About;
