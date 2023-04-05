import {auth , provider} from '../firebase.js'
import { signInWithPopup } from 'firebase/auth';
import Cookies from 'universal-cookie';
import '../styles/signin.css'
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
        <div className="box">
         <p>
             SIGN IN
        </p>
    <button className='btn' onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
);   
};