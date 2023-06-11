import React from 'react'
import WorkCard from '../WorkCard/WorkCard'
import WorkCardData from './../Work/WorkCardData'

const Work = () => {
  return (
    <div className='work-container'>
      <h1 className="project-heading">
        Projects
      </h1>
      <div className="project-container">
        {WorkCardData.map((card,index)=>{
            return <WorkCard  
            key={index}
            imgsrc = {card.imgsrc}
            title = {card.title}
            text = {card.text}
            viewurl = {card.viewurl}
            sourceurl = {card.sourceurl} />
        })}
      </div>
    </div>
  )
}

export default Work
