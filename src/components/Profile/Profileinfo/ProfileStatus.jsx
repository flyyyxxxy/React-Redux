import React from 'react';


class ProfileStatus extends React.Component {
    
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
    }

    deActivateEditMode = () => {
        this.setState(
            {
                editMode: false
            }
        )
        
        this.props.updateProfileStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
        
    }

    
    render() {
        return (
            <div className="container">
            {!this.state.editMode &&
                <div className="status">
                    <span onClick={this.activateEditMode}>{this.props.status || "----"}</span>
                </div>
            }
            {this.state.editMode &&
                <div className="">
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} 
                    value={this.state.status} />
                </div>
            }
                
            </div >   
        );
    }

}

export default ProfileStatus;