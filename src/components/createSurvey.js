import React,{useState} from "react";
import PetsIcon from '@material-ui/icons/Pets';
import axios from 'axios';

import './mystyle.css'



const CreateSurvey=()=>{
const [surveyForm,setSurveyForm]=useState([]);
const [id,setId]=useState(0);
const [newQuestion,setNewQuestion]=useState({
  type:"single",
  id:id,
  question:"",
  options:[{label:"",value:""}]
});

const publishForm=()=>{
  console.log("Here");
    axios.post("http://ec2-18-221-148-171.us-east-2.compute.amazonaws.com:3008/question",{
    surveyForm:newQuestion
  })
  console.log("Here");
    axios.get("http://ec2-18-221-148-171.us-east-2.compute.amazonaws.com:3008/",{
    surveyForm:newQuestion
    
  })
}


return (
  <>
  <h1 className='heading'><PetsIcon style={{ fontSize: 60 }} />  Survey Tiger </h1>
  <select onChange={(event)=>{
    setNewQuestion({...newQuestion,type:event.target.value})
  }}>
    <option value="" disabled selected hidden>Select Question Type</option>
    <option value="multi" className='drophover'>Multi-Select</option>
    <option value="single" className='drophover'>Single Select</option>
  </select>
  <div>
  <input placeholder="Question" className='questioncss'></input>
  </div>
  <div className='block'>
  {newQuestion.options.map(option=>{
    return (<><input placeholder="option" className='optioncss'></input>
  <span>
     <button onClick={()=>{
      setNewQuestion({...newQuestion,options:[...newQuestion.options,{label:"",value:""}]})
      }}>+</button>
   <button>-</button>
  </span><br/>
    
    </>)
  })}
  {newQuestion.type==="single"&&newQuestion.options.length===2?
  <span> 
    <button className='btn1' onClick={()=>{
    setSurveyForm([...surveyForm,{question:"",options:[{}]}],window.location.reload())
  }}>Add Question</button> 
  <button className='btn2'onClick={publishForm} >Publish</button> 
  </span> :newQuestion.type==="multi"&&newQuestion.options.length===4?
  <span> 
    <button className='btn1' onClick={()=>{
    setSurveyForm([...surveyForm,{question:"",options:[{}]}],window.location.reload())
  }}>Add Question</button> 
  <button className='btn2' onClick={publishForm}>Publish</button> </span>:null}
  </div>

  
  
  {surveyForm.map(question=>{
    return (
      <>
    
      <select onChange={(event)=>{
    setNewQuestion({...newQuestion,type:event.target.value})
  }}>
    <option value="" disabled selected hidden>Select Question Type</option>
    <option value="multi" className='drophover'>Multi-Select</option>
    <option value="single" className='drophover'>Single Select</option>
  </select>
  <div>
       {question.question}
      </div>
      
       {question.options.map(option=>{
         return <input></input>
       })}
      </>
    )
  })}
  
  </>
)
}

export default CreateSurvey;