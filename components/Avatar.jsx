import React from 'react'

function Avatar({url, className}) {
  return (
    <img loading='lazy' src={url} alt="Profile pic" className={`h-10 w-10 rounded-full animate-bounce cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}></img>
  )
}

export default Avatar