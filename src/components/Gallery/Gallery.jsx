import React from 'react'

const Gallery = ({gallery, setGallery}) => {
  return (
    <div>
       {
        gallery.map((image,index) => (
            <img src={image.url} alt="" />
        ))
       }
    </div>
  )
}

export default Gallery