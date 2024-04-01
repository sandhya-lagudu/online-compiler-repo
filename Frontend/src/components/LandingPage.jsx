import { useNavigate } from 'react-router-dom';

export function LandingPage(){
    const navigate = useNavigate();
    const gotologin = async event =>{
        // console.log("Clicked");
        event.preventDefault();
        navigate('/login');
    }
    const gotoregister = async event =>{
        // console.log("Clicked");
        event.preventDefault();
        navigate('/register');
    }
    return(
        <>
        

        <div class="h-screen flex flex-col items-center place-content-center space-y-10 bg-violet-200">
            
                <button class="bg-violet-500 py-2.5 px-2.5 rounded-xl text-3xl shadow-2xl shadow-violet-950" onClick={gotologin}>Login</button>
                <button class="bg-violet-500 py-2.5 px-2.5 rounded-xl text-3xl shadow-2xl shadow-violet-950" onClick={gotoregister}>Register</button>
            
        </div>
        
        </>
    );
}