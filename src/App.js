import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


import './App.css';

const App =()=>{
    if(!localStorage.getItem('username')) return<LoginForm/>
    return(
        <ChatEngine
            height="100vh"
            projectID="823ead1d-aff0-4b93-ba15-983722122bd8"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed ={(chatAppProps)=> <ChatFeed{...chatAppProps}/>}
        />
    );
}
export default App;