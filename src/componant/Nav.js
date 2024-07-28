import React from 'react'
// import { a } from 'react-router-dom'

export default function Nav () {
  return (
    <>
      <div className="nav-head">
        <ul>
          <li className='nav-text' style={{'font-size':'1.2rem'}}> <b >News App</b></li>
          <li className="nav_text"> <a href="/business" >Business</a></li>
          <li className="nav_text"> <a href="/technology">Technology</a></li>
          <li className="nav_text"> <a href="/entertainment" >Entertainment</a></li>
          <li className="nav_text"> <a href="/sports">Sports</a></li>
          <li className="nav_text"> <a href="/general">General</a></li>
          <li className="nav_text"> <a href="/health">Health</a></li>
          <li className="nav_text"> <a href="/science">Science</a></li>

        </ul>
      </div>


    </>
  )
}
