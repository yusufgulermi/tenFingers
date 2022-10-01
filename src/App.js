import React, { useEffect, useState } from "react";
import Words from "./component/Words";
import { useSelector } from "react-redux";
import Result from "./component/Result";
import axios from "axios";
import Header from "./component/Header";


function App() {

  const timer = useSelector((state) => state.timer.value);
  const isUpt=useSelector((state)=>state.isUpdated.value)
  const [allData, setAllData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false)
    const getDatafromServer = async () => {
      const response = await axios.get(
        "https://63285d1c9a053ff9aab61b1a.mockapi.io/data"
      );
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
