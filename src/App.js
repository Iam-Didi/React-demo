import React,{useEffect, useState} from "react"; 
import "./App.css";

const App = () => {

  const APP_ID = "0d1d6a56";
  const APP_KEY = "4959a9535d74e4ea416483006edd4938";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);


  useEffect(() => {
    
  }, []);


 return(
  <div className="App">
   <form className="search-form">
    <input className="search-bar" type="text"/>
    <button className="search-button" type="submit">search</button>
   </form>

<h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>

  </div>
 );
}

export default App;
