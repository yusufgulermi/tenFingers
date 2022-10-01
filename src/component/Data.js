import React, { useEffect } from 'react'
import axios from "axios"
import { useSelector,useDispatch } from 'react-redux'
import { isUpdate } from '../stores/isUpdated';
import { getData } from '../stores/data';
var change=0;
const Data = ({allData,setAllData}) => {
    const dispatch = useDispatch()
    const dataName=useSelector((state)=>state.data.value)
    const keyCount= useSelector((state)=> state.keystrokes.value)
    const isUpt=useSelector((state)=>state.isUpdated.value)


    const handlePostData = async(dataName,cor)=>{
        
        await axios.post(`https://63285d1c9a053ff9aab61b1a.mockapi.io/data`, {
            name:dataName,
            score:cor
        })
        
    }
    const handlePutData =async(item,cor)=>{
        
        await axios.put(`https://63285d1c9a053ff9aab61b1a.mockapi.io/data/${item}`, {
            score:cor
        })
       
    }
    
    const handleSaveScore =()=>{
            allData.map((item)=>{
                if(item.name.toLowerCase()===dataName.toLowerCase()){
                    handlePutData(item.id,keyCount/5)
                    change=1;
                }
    
                return item
            })
            if(change===0){
                handlePostData(dataName,keyCount/5)
            }
            change=0;
            dispatch(isUpdate(!isUpt))
    }
        
    
    useEffect(()=>{
        const getUsername=JSON.parse(localStorage.getItem("username"))
        dispatch(getData(getUsername))
        const getDatafromServer = async () => {
          const response = await axios.get(
            "https://63285d1c9a053ff9aab61b1a.mockapi.io/data"
          );
          setAllData(response.data);
        };
        getDatafromServer();
        
    },[isUpt,setAllData,dispatch])
    
  return (
    <div >
        <button className='save-btn' onClick={handleSaveScore}>Save Score</button>
    </div>
  )
}

export default Data