import React, {Component} from 'react'

class NewMemberForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            nameInput:'',
            attackInput:'',
            defenseInput:'',
        }
    }

    handleNameInputChange = (e) => {
        this.setState({
            nameInput:e.target.value
        })
    }
    handleAttackInputChange = (e) => {
        this.setState({
            attackInput:e.target.value
        })
    }
    handleDefenseInputChange = (e) => {
        this.setState({
            defenseInput:e.target.value
        })
    }

    handleAddButtonClick = (e) =>{
        e.preventDefault()
        var imageFile = (this.state.nameInput).toLowerCase() + '.png'
        console.log(imageFile)

        var data = {
            name: this.state.nameInput,
            attackSite: this.state.attackInput,
            defendSite: this.state.defenseInput,
            image: imageFile
        }

        if(this.state.nameInput !== '' && this.state.attackInput !== '' && this.state.defenseInput !== ''){
            this.props.addAgent(data)
        }
        
    }

    render(){
        return(
            <div className="newAgent">
            <div className="new-control-container">
                <img src="+.svg" alt="+" onClick={this.handleAddButtonClick}/>
            </div>
            <div className="agent-content">
                <div className="new-agent-dp-container">
                </div>
                <div className="agent-name">
                    <input type="text" name="newName" id="newName" placeholder="Agent"onChange={this.handleNameInputChange}/>
                </div>
                <div className="site-container">
                    <div className="attack-site-container">
                        <h3>Attacking Site</h3>
                        <input type="text" name="aSite" id="aSite"onChange={this.handleAttackInputChange}/>
                    </div>
                    <div className="defense-site-container">
                        <h3>Defending Site</h3>
                        <input type="text" name="dSite" id="dSite" onChange={this.handleDefenseInputChange}/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default NewMemberForm;