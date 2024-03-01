import {useEffect,useState} from "react";
import './App.css';
import Counter from './components/Counter'
function App() {
    const [data,setData]= useState([]);
    const [loading,setLoading]=useState([]);
    const [error,setError]=useState(null);

    
  const fetchData =async( ) =>{
    try{
      const response=await fetch("https://jsonplaceholder.typicode.com/posts")


      if(!response.ok){
        throw new Error("Responsible not ok")
      }
      const fetchData = await response.json()
      setData(fetchData)
    }
    catch(error){
      setError(error)
      console.log("Error in the code",error)
    }finally{
      setLoading(false)
    }
  };

  useEffect(() =>{
    fetchData();
  },[])

  return (
    <div className="App">
      <h1>RoadsideCoder</h1>
      <h2>Subscribe for 69 years of Good Luck</h2>
      <Counter />
    </div>
  );
}

export default App;
