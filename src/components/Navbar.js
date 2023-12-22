import { useNavigate } from "react-router-dom"


const Navbar = () => {
    const navigate = useNavigate();

    return(
        <div>
            <div className='w-screen h-20  flex justify-between items-center'>
                <div className='flex items-center justify-center gap-4 ml-6'>
                    
                    <button onClick={() => navigate("/")} className='text-2xl text-black hover:underline'> Ben Tuason </button> 
                </div>
                <div className='flex items-center justify-center gap-4 mr-6'>
                <ul className='flex gap-6 mr-4'>
                    <button onClick={() => navigate("/")} className='hover:underline text-black hover:cursor=pointer'>Home</button>
                    <button onClick={() => navigate("/Life")} className='hover:underline text-black hover:cursor=pointer'>Life</button>
                    <button onClick={() => navigate("/About")} className='hover:underline text-black hover:cursor=pointer'>About</button>
                    
                </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar