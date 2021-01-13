import React, {Component} from 'react'
import axios from 'axios'

import Projects from './Projects'

class ProjectsContainer extends Component {
  constructor(props){
    super(props)
    this.state = { 
      projects: ""
    }
  }


  componentDidMount() {
      axios
        .get(`https://api.github.com/users/nejohnston/repos`)
        .then((resp) => resp.data)
        .then(projectsList => {
          this.setState({projects: projectsList})
          
        });
  }
  
    render() {
      console.log(this.state.projects)
        return (
            <Projects projects={this.state.projects} />
        );
    }
}

export default ProjectsContainer
