import React from 'react'

const ProjectDetails = (props) => {
    // console.log(props)
    const  id = props.match.params.id
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {id}</span>
                <p>Lorem ipsum dolor  </p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted By Awesome frank </div>
                <div>2nd Sept, 11pm</div>
            </div> 
        </div>
    </div>
  )
}

export default ProjectDetails
