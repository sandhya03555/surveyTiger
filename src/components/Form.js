import React, { Component } from "react";
import PetsIcon from '@material-ui/icons/Pets';
import './mystyle.css'

export default class App extends Component{
    constructor(){
        super();
        // this.inputRef =React.createRef();
    };
    
    openForm(){
        console.log("created") 
    }
    render(){
        return(
            <>
               
               <h1 className='heading'><PetsIcon style={{ fontSize: 60 }} />  Survey Tiger </h1>
               <div>
                    <button className='bclass' onClick={()=>{
                            this.props.history.push("/path2");
                        }}>Create Survey</button>
                </div>
                <div>
                <button className='bclass' >Take Survey</button>
                </div>
            </>
        )
    }
}