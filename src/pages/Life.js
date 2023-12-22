import Navbar from '../components/Navbar';
import P1 from '../AllisonAustin.JPG';
import P2 from '../animation.jpg';
import P3 from '../brothergrad.jpg'
import P4 from '../casequest.JPG';
import P5 from '..//Christmaspic.JPG';
import P6 from '..//communion.JPG';
import P7 from '..//concert.JPG';
import P8 from '..//concert2.JPG';
import P9 from '..//concert3.jpg';
import P10 from '..//coron.jpg'
import P11 from '..//datepookie.jpg'
import P12 from '..//ggg.JPG'
import P13 from '..//grad.JPG'
import P14 from '..//keyboard.jpg'
import P15 from '..//lastday.JPG'
import P16 from '..//mombday.jpg'
import P17 from '..//mtmayon.jpg'
import P18 from '..//pakistandinner.JPG'
import P19 from '..//pookie.JPG'
import P21 from '..//quantum.jpg'
import P22 from '..//snow.jpg'
import P23 from '..//study.jpg'
import P24 from '..//taipei.jpg'
import P25 from '..//taipeibear.jpg'
import P26 from '..//taipeileaves.jpg'
import P27 from '..//uncle.jpg'
import P28 from '..//yanniPilar.jpg'
const Life = () => {
    return (
        <div>
            <Navbar />
            <h1 className='text-bold font-bold text-xl mb-10 ml-2'>These are images showcasing my life/travels/adventures</h1>
            <div className='lifepics flex  flex-wrap justify-center gap-2'>
            <img src={P3} alt="Brother's Graduation" className=' rounded-lg  w-1/3 h-auto'/>
            <img src={P1} alt="Allison and Austin" className='rounded-lg w-1/2 h-auto'/>
            <img src={P2} alt="Animation Workshop" className=' rounded-lg  w-1/4 h-auto'/>
            <img src={P4} alt="CaseQuest" className=' rounded-lg  w-1/4 h-auto'/>
            <img src={P5} alt="Christmas Picture with Ethan and Celine" className=' rounded-lg  w-1/4 h-auto'/>
            <img src={P6} alt="Communion" className=' rounded-lg  w-1/4 h-auto'/>
            <img src={P7} alt="Concert1" className=' rounded-lg  w-1/3 h-auto'/>
            <img src={P8} alt="Concert2" className=' rounded-lg  w-1/2 h-auto'/>
            <img src={P9} alt="Concert3" className=' rounded-lg  w-1/4 h-auto'/>
            <img src={P10} alt="Coron" className=' rounded-lg  w-1/2 h-auto'/>
            <img src={P11} alt="Date" className=' rounded-lg  w-1/4 h-auto'/>
            <img src={P12} alt="GGG" className='rounded-lg  w-1/2 h-auto'/>
            <img src={P13} alt="Kinder Graduation" className='rounded-lg  w-1/4 h-auto'/>
            <img src={P14} alt="Keyboard Workshop" className='rounded-lg  w-1/4 h-auto'/>
            <img src={P15} alt="Last Day" className='rounded-lg  w-1/4 h-auto'/>
            <img src={P16} alt="Mom Bday" className='rounded-lg  w-1/4 h-auto'/>
            <img src={P17} alt="Mt.Mayon" className='rounded-lg  w-1/4 h-auto'/>
            <img src={P18} alt="Pakistani Dinner" className='rounded-lg  w-1/2 h-auto'/>
            <img src={P19} alt="Pookie" className='rounded-lg  w-1/2 h-auto'/>
            <img src={P21} alt="Quantum Fest" className='rounded-lg  w-1/4 h-auto'/>
            <img src={P22} alt="Snow" className='rounded-lg  w-1/4 h-auto'/>
            <img src={P23} alt="Study" className='rounded-lg  w-1/2 h-auto'/>
            <img src={P24} alt="Taipei" className='rounded-lg  w-1/3 h-auto'/>
            <img src={P25} alt="TaipeiBear" className='rounded-lg  w-1/4 h-auto'/>
            <img src={P26} alt="TaipeiLeaves" className='rounded-lg  w-1/4 h-auto'/>
            <img src={P27} alt="Uncle" className='rounded-lg  w-1/4 h-auto'/>
            <img src={P28} alt="YanniPilar" className='rounded-lg  w-1/4 h-auto'/>
        </div>
        </div>
    );
}

export default Life;
