import {auth , provider} from '../firebase.js'
import { signInWithPopup } from 'firebase/auth';
import Cookies from 'universal-cookie';
import '../styles/auth.css'
const cookies = new Cookies();

export const Auth = (props) => {
    const {setIsAuth} = props;

    const signInWithGoogle = async() => {
        try{
            const result = await signInWithPopup(auth , provider);
            cookies.set("auth-token",result.user.refreshToken);
            setIsAuth(true);
        }catch(err){
            console.log(err);
        }
        
        
    }
    return(  
        <div className='back'>
            <div className="auth">
         <p>
             Sign in with google
        </p>
    <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>

        </div>
        
);   
};