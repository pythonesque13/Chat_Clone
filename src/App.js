import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";
import { sendMsgToOpenAI } from "./openai";
import { useState } from "react";


function App() {

  const [input, setInput]=useState("");
   
  const handleSend = async() =>{
    const res = await sendMsgToOpenAI(input);
    console.log(res);
  }

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo"/><span className="brand">ChatGPT</span></div>
          <button className="midBtn"><img src={addBtn} alt="New chat" className="addBtn"/>New Chat</button>
            <div className="upperSideBottom">
              <button className="query"><img src={msgIcon} alt="Query"/> What is Programming? </button>
              <button className="query"><img src={msgIcon} alt="Query"/> How to use an API? </button>
            </div>
        </div>

        <div className="lowerSide">
        <div className="listItems"><img src={home} alt="home" className="listItemsImg" />Home</div>
        <div className="listItems"><img src={saved} alt="saved" className="listItemsImg" />Saved</div>
        <div className="listItems"><img src={rocket} alt="rocket" className="listItemsImg" />Upgrade To Pro</div>

      </div>
      </div>
      
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" /><p className="txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloremque quo voluptate eligendi, ad voluptatibus fuga voluptates aliquid placeat nobis adipisci provident delectus odit deleniti atque incidunt officiis praesentium iusto in. Non ullam tempore, ipsa quibusdam, magnam quas magni expedita corrupti delectus, quod quia velit. Expedita, illum esse, impedit quo aliquam velit ab aliquid qui in animi similique vel obcaecati. Culpa vel impedit corrupti nihil corporis nisi harum ut doloribus tenetur veniam tempora quia adipisci porro quo rem, voluptate cupiditate voluptatibus possimus animi officia eius reprehenderit reiciendis laborum? Sed, quam suscipit. Dolorem corporis amet hic dicta iste at nobis cum.</p>
          </div>

        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Type a message..." value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            <button className="send" onClick={handleSend}><img src={sendBtn} alt="Send"/></button>
          </div>
          <p>ChatGPT may produce inaccurate information about people, places, or facts.August 20 Version</p>
        </div>

      </div>
      
      
    </div>
  );
}

export default App;
