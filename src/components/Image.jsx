import React from 'react'

const Image = ({src, alt, classname}) => {
  return (
    <img className={classname} src={src} alt={alt} />
  )
}

export default Image