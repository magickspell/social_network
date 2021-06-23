import React from 'react';
import style from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state ={
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        /*console.log(this.state.editMode)*/
        this.setState({
            editMode: true
        })
        /*this.state.editMode = true;
        /!*this.forceUpdate();*!/*/

        /*console.log(this.state.editMode)*/ /*WE ARE IN ANOTHER PLACE*/
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {

        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "no status"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }
}

console.log(ProfileStatus.editMode)

export default ProfileStatus;