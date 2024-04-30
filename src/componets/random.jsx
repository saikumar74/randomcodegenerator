import React, { useState } from 'react'
import  reload_icon from'../assets/Reload.png.png'

const Random = () => {
 let quotes=[];

 async function loadQuotes(){
   const respone=  await fetch("https://type.fit/api/quotes");
   quotes = await respone.json();
   
 }
const random=()=>{
  const select =quotes[Math.floor(Math.random(loadQuotes)*quotes.length)]
  setQuote(select);

}

  const[quote,setQuote]=useState({
    text:'Life is tough my darling, but so are you.',
         author:  'Stephanie Bennett Henry',
  });
loadQuotes();

  return (
    <div>
     <div className='container'>
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {quote.author.split(',')[0]}</div>
          <div className="icons">
            <img src={reload_icon} onClick={()=>random()} alt="" />
            

          </div>

          </div>
        </div>
      </div>
     </div>
    
  )
}

export default Random
