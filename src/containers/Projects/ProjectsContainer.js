import React, {Component} from 'react'
import axios from 'axios'

import Projects from './Projects'

import projectData from '../../config/projects.json'

class ProjectsContainer extends Component {
  constructor(props){
    super(props)
    this.state = { 
      projects: [projectData],
      requested: ["covid-map", "boomtown", "building-assets", "freestyle"]
    }
  }


  componentDidMount() {
    // console.log(JSON.parse(projectData))
      // fetch('../../config/projects.json', {
      //   headers : { 
      //     'Content-Type': 'application/json',
      //     'Accept': 'application/json'
      //    }})
      //   .then(response => response.json())
      //   .then(data => console.log(data))
        // .catch((err) => {
        //   // Do something for an error here
        //   console.log('error')
        // })
  }
  
    render() {
      console.log(this.state.projects)
        return (
            <Projects projects={projectData}/>
        );
    }
}

export default ProjectsContainer
