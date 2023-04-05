import Cookies from 'universal-cookie';
import { useState  ,useRef} from 'react';
import './App.css';
import { Auth } from './components/Auth';
import { Chat } from './components/Chat';
import { signOut } from 'firebase/auth';
import{auth} from './firebase';
import "./styles/Chat.css";



const cookies = new Cookies();


function App() {

  const [isAuth , setIsAuth] = useState(cookies.get("auth-token"));
  const [room , setRoom] = useState(null);

  const roomInputRef = useRef(null);


  const signUserOut = (async() => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  });

  if(!isAuth){
    return (
      <div>
      <Auth setIsAuth = {setIsAuth}/>
      </div>
    );
  }

  return (
    <>
      {
      room ?( <Chat room = {room}

      />): 
    <div className='room'>
    <label>enter room name:</label>
    <input ref={roomInputRef}/>
    <button onClick={() => setRoom(roomInputRef.current.value)}>enter Chat</button>
    </div>
    } 

    <div className='sign-out'>
      <button onClick={signUserOut}>Sign Out</button>
    </div>
  </>
  );


  

 
}

export default App;
