import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import * as React from 'react';
import { getDatabase, ref, set } from "firebase/database";
import { useState } from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPAhT-WiVlj0b4NeFtAtPasPeLSky7wf0",
  authDomain: "test-43dea.firebaseapp.com",
  projectId: "test-43dea",
  databaseURL:"https://test-43dea-default-rtdb.firebaseio.com/",
  storageBucket: "test-43dea.firebasestorage.app",
  messagingSenderId: "553955933396",
  appId: "1:553955933396:web:7471cf7ed38f3b405d8f41",
  measurementId: "G-YETXS8Q6NL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
// c  onst analytics = getAnalytics(app);


function App() {

  const [isDisabled,setDisabled] = useState(false);
  const [input,setInput] = useState('');
  // const[userID,setUserId] = useState(null);
//   useEffect(()=>{
//   setTimeout(()=>{

// },1000)},[]);
  // setUserId(userID)

  // const userID = "Aryan";
   const handleKeydown = async (e) => {
    if(e.key === 'Enter'){
      try {
        const userID = prompt("What's your name?");
        // setUserId(id);
        const userData = {
          Name: input,
          // Email: 'John@gmail.com',
          // Gender: 'Male'
        };
        // alert(userID);
        const userRef = ref(database, 'users/' + userID);
        if(userID !== "" && input !== ""){
        // alert(userID);
        await set(userRef, userData);
        }
        
        setInput('');
        setDisabled(true);
        
        // Optional: Enable input after some time
        setTimeout(() => setDisabled(false), 2000);
      } catch (error) {
        alert("Couldn't register your data");
      };
      // setDisabled(true);
    }
  }
    // console.log(input)
  // class MainPage extends React.Component{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className = "App-title">
            Welcome. This web application is used to store data.
        </h1>
 
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

      <div className='App-body'>  
        {/* <label className='label'>
          Data:
        </label> */}
        <input
          type='text'
          id = "data"
          placeholder='Please Enter information you want to store'
          className='querybox'
          value ={input}
          onChange={(e)=>{
            setInput(e.target.value);
          }}
          onKeyDown={handleKeydown}
          disabled = {isDisabled}
            />
    </div>
    </div>
  );
//  }
}
export default App;
