import React from 'react'

function Card({id,date,link,Title,Excerpt,image,jetpack}) {
  return (
   
      <div className="flip-card" style={{margin:"1rem"}}>
            <div className="flip-card-inner">

                <div className="flip-card-front" >
                 <img src={image} alt="" /><br></br>
                 
                </div>

                <div className="flip-card-back">
                    <p style={{fontSize:"20px",fontWeight:"bold"}}>Title : {Title}</p>
                    <p>{date}</p>
                    <a href={link}>link</a>
                    <p >{Excerpt}</p>
                </div>
                
    
        </div>
    </div>
  )
}

export default Card
