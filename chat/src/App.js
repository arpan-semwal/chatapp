import Cookies from 'universal-cookie';
import { useState  ,useRef} from 'react';
import './App.css';
import { Auth } from './components/Auth';
import { Chat } from './components/Chat';
import "./styles/Chat.css"
const cookies = new Cookies();


function App() {

  const [isAuth , setIsAuth] = useState(cookies.get("auth-token"));
  const [room , setRoom] = useState(null);

  const roomInputRef = useRef(null);

  if(!isAuth){
    return (
      <div>
      <Auth setIsAuth = {setIsAuth}/>
      </div>
    );
  }

  return (
    <div>{
      room ?( <Chat room = {room}

      />): 
    <div className='room'>
    <label>enter room name:</label>
    <input ref={roomInputRef}/>
    <button onClick={() => setRoom(roomInputRef.current.value)}>enter Chat</button>
    </div>
    } 
  </div>
  );


  

 
}

export default App;
