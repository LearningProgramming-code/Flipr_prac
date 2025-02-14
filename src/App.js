import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPAhT-WiVlj0b4NeFtAtPasPeLSky7wf0",
  authDomain: "test-43dea.firebaseapp.com",
  projectId: "test-43dea",
  storageBucket: "test-43dea.firebasestorage.app",
  messagingSenderId: "553955933396",
  appId: "1:553955933396:web:7471cf7ed38f3b405d8f41",
  measurementId: "G-YETXS8Q6NL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
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
        <input type='text' placeholder='Please Enter information you want to store' className='querybox'/>
    </div>
    </div>
  );
}

export default App;
