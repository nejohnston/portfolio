import React, {Component} from 'react'

import Projects from './Projects'

import projectData from '../../config/projects.json'

class ProjectsContainer extends Component {
  
    render() {
        return (
            <Projects projects={projectData}/>
        );
    }
}

export default ProjectsContainer
