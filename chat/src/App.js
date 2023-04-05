import Cookies from 'universal-cookie';
import { useState  ,useRef} from 'react';
import '../src/styles/App.css'
import { Auth } from './components/Auth';
import { Chat } from './components/Chat';
import { signOut } from 'firebase/auth';
import{auth} from './firebase';




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
    <div className='box'>
      {
      room ?( <Chat room = {room}

      />): 
    <div className='room'>
    <label>Enter Room Name:</label>
    <input ref={roomInputRef}/>
    <button className='btn-1' onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
    </div>
    } 

    <div className='sign-out'>
      <button  className='btn-2' onClick={signUserOut}>Sign Out</button>
    </div>
  </div>
  );


  

 
}

export default App;
