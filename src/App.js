import React, { Component } from 'react';
import NewMember from './NewMember';
import NewMemberForm from './NewMemberForm';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      list:[
        { 
          id:1,
          name: 'cypher',
          attackSite: 'A',
          defendSite: 'C',
          image: 'cypher.png'
        },
        { 
          id:2,
          name: 'sova',
          attackSite: 'B',
          defendSite: 'A',
          image: 'sova.png'
        },
        { 
          id:3,
          name: 'raze',
          attackSite: 'C',
          defendSite: 'B',
          image: 'raze.png'
        }

      ]
    }
  }

  addAgent = (data) =>{
    if(this.state.list.length + 1 < 5){
      var newAgent = {
        id: Date.now(),
        ...data
      }
  
      var newList = [newAgent, ...this.state.list]
      this.setState({
        list:newList
      })
    }
  }

  removeAgent = (id) => {
    var agentList = this.state.list

    var filteredList = agentList.filter((agent)=>{
      return agent.id !== id
    })

    this.setState({
      list:filteredList
    })
  }

  updateAgent = (id, data) =>{
    var agentList = this.state.list

    var updatedAgents = agentList.map((agent)=>{
      return (agent.id === id) ? {...agent, ...data} : agent
    })

    this.setState({
      list:updatedAgents
    })
  }

  render(){
    return(
      <div className="wrap">
        <div className="content-container">
          <div className="title-container">
              <h1>Team Creator</h1>
              <label htmlFor="mapSelect">Map</label>
              <input type="text" name="mapSelect" id="mapSelect" placeholder="Select Map"/>
          </div>
          <div className="agentList">
            {
              this.state.list.map((agent)=>{
                var listProps = {
                  key: agent.id,
                  removeAgent: this.removeAgent,
                  updateAgent: this.updateAgent,
                  ...agent
                }
                return(
                  <NewMember {...listProps}/>
                )
              })
            }
              <NewMemberForm addAgent={this.addAgent}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
