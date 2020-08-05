import React, {Component} from 'react'

class NewMember extends Component{
    constructor(props){
        super(props)

        this.state = {
            nameInput:'',
            attackInput:'',
            defenseInput:'',
        }
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
                <div className="agent-name">
                    {this.props.name}
                </div>
                <div className="site-container">
                    <div className="attack-site-container">
                        <h3>Attacking Site</h3>
                        <p className="siteText">
                            {this.props.attackSite}
                        </p>
                    </div>
                    <div className="defense-site-container">
                        <h3>Defending Site</h3>
                        <p className="siteText">{this.props.defendSite}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default NewMember;