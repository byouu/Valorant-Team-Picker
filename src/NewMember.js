import React, {Component} from 'react'

class NewMember extends Component{
    constructor(props){
        super(props)

        this.state = {
            isNameUpdating:false,
            isAttackInputUpdating:false,
            isDefenseInputUpdating:false,

            nameInput:props.name,
            attackSiteInput:props.attackSite,
            defenseSiteInput:props.defendSite
        }
    }

    //Name

    handleNameDoubleCLick = (e) =>{
        this.setState({
            isNameUpdating: true
        })
    }

    handleNameInputChange = (e)=>{
        this.setState({
            nameInput: e.target.value
        })
    }

    handleNameInputBlur = (e)=>{
        //update
        var id = this.props.id
        var updateImg = (this.state.nameInput).toLowerCase() + '.png'
        console.log(updateImg)
        var data = {
            name:this.state.nameInput,
            image:updateImg
        }

        if(this.state.nameInput !== ''){
            this.props.updateAgent(id, data)
        }

        this.setState({
            isNameUpdating: false
            
        })
    }

    // Attacking

    handleAttackSiteDoubleCLick = (e) =>{
        this.setState({
            isAttackInputUpdating: true
        })
    }

    handleAttackSiteInputChange = (e)=>{
        this.setState({
            attackSiteInput: e.target.value.toUpperCase()
        })
    }

    handleAttackSiteInputBlur = (e)=>{
        //update
        var id = this.props.id
        var data = {
            attackSite: this.state.attackSiteInput
        }

        if(this.state.attackSiteInput !== ''){
            this.props.updateAgent(id, data)
        }

        this.setState({
            isAttackInputUpdating: false
        })
    }

    // Defending

    handleDefenseSiteDoubleCLick = (e) =>{
        this.setState({
            isDefenseInputUpdating: true
        })
    }

    handleDefenseSiteInputChange = (e)=>{
        this.setState({
            defenseSiteInput: e.target.value.toUpperCase()
        })
    }

    handleDefenseSiteInputBlur = (e)=>{
        //update
        var id = this.props.id
        var data = {
            defendSite: this.state.defenseSiteInput
        }

        if(this.state.defenseSiteInput !== ''){
            this.props.updateAgent(id, data)
        }

        this.setState({
            isDefenseInputUpdating: false
        })
    }

    handleRemoveClick = (e) =>{
        var id = this.props.id
        this.props.removeAgent(id)
    }

    render(){
        var imageStyle = {
            backgroundImage: 'url(./images/' + this.props.image + ')'
        }
        
        return(
            <div className="agent">
            <div className="control-container">
                <img src="x.svg" alt="x" onClick={this.handleRemoveClick}/>
            </div>
            <div className="agent-content">
                <div className="agent-dp-container" style={imageStyle}>
                  
                </div>
                <div className="agent-name" onDoubleClick={this.handleNameDoubleCLick}>
                    {this.state.isNameUpdating === true ? (
                        <input type="text" name="newName" value={this.state.nameInput} onChange={this.handleNameInputChange} onBlur={this.handleNameInputBlur}/>
                    ) : this.props.name}
                </div>
                <div className="site-container">
                    <div className="attack-site-container">
                        <h3>Attacking Site</h3>
                        <p className="siteText" onDoubleClick={this.handleAttackSiteDoubleCLick}>
                            {this.state.isAttackInputUpdating === true ? (
                               <input type="text" name="aSite" id="aSite" value={this.state.attackSiteInput} onChange={this.handleAttackSiteInputChange} onBlur={this.handleAttackSiteInputBlur}/>
                            ) : this.props.attackSite}
                        </p>
                    </div>
                    <div className="defense-site-container">
                        <h3>Defending Site</h3>
                        <p className="siteText" onDoubleClick={this.handleDefenseSiteDoubleCLick}>
                            {this.state.isDefenseInputUpdating === true ? (
                               <input type="text" name="aSite" id="aSite" value={this.state.defenseSiteInput} onChange={this.handleDefenseSiteInputChange} onBlur={this.handleDefenseSiteInputBlur}/>
                            ) : this.props.defendSite}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default NewMember;