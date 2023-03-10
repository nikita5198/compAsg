import React from 'react'

function Header() {
  return (
   <div className='header'>
     <div style={{display:"flex",justifyContent:"space-between ",alignItems:"center",marginLeft:"2rem"}}>
        <h2 className='news'>News</h2>
      <div style={{display:"flex",justifyContent:"space-between ",alignItems:"center", margin:"auto 2rem"}}>
        <h3 className='comp'>HOME</h3>
        <h3 className='comp' >ABOUT</h3>
        <h3 className='comp'>CONTACT US</h3>
      </div>
    </div>
   </div>
  )
}

export default Header
