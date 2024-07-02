import React, { useState } from "react";

function Addmarks(){
    const[formData, setFormData]= useState({Name:"", MathScore:"",EnglishScore:"", SwahiliScore:""});

   function handleTextChange (event){
        setFormData({...formData, [event.target.name]: event.target.value})
   };
    return(
        <div>
            <form>
                <input type="text" name="Name" onChange={handleTextChange} value={formData.Name}/>
                <br/>
                <input type="text" name="Mathscore" onChange={handleTextChange} value={formData.MathScore}/>
                <br/>
                <input type="text" name="EnglishScore" onChange={handleTextChange} value={formData.EnglishScore}/>
                <br/>
                <input type="text" name="SwahiliScore" onChange={handleTextChange} value={formData.SwahiliScore}/>
                <br/>
                <button type="submit" >Save</button>
            </form>
        </div>
    )
}
export default Addmarks;