import React, { useEffect, useState } from "react";
import Words from "./Words";
import { useSelector } from "react-redux";
import Result from "./Result";
import axios from "axios";
import Header from "./Header";


function App() {

  const timer = useSelector((state) => state.timer.value);
  const isUpt=useSelector((state)=>state.isUpdated.value)
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  

  useEffect(() => {
    setIsLoading(false)
    const getDatafromServer = async () => {
      const response = await axios.get(process.env.REACT_APP_DATA_API_KEY);
      setIsLoading(true)
      setAllData(response.data);
    };
    getDatafromServer();
    
  }, [isUpt]);

  return (
    <div className="App">
      <Header/>
      <div className="allScores">
        <h1>Scores</h1>
        <div className="invScores">
        {isLoading? allData.map((item) => (
          <div className="savedScore" key={item.id}>
            <p>Name : {item.name}</p>
            <p>Score : {item.score} WPM</p>
          </div>
        )):<p>Loading...</p>}
        </div>
      
      </div>
      
        <Words />
        {timer === 0 ? <Result allData={allData} setAllData={setAllData}/> : null}

        
      
    </div>
  )
}

export default App;
