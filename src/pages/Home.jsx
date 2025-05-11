import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="max-h-screen " >
        <div className="flex flex-col justify-center items-center h-screen w-100"  >
        <h1 className="font-display text-6xl font-semibold p-3  ">Bible Teachers Log</h1>
        <Link to={{
          pathname: "/signin",
        }}>
        <button className=" w-full button p-3 text-xl bg-primary hover:bg-hover rounded-md">Sign In</button>
        </Link>
        
       </div>
    </div>
  )
}

export default Home