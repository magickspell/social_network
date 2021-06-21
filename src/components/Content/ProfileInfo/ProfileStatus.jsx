import React from 'react';
import style from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state ={
        editMode: false
    }

/*    activateEditMode = () => {
        this.state.editMode = true;
    }*/

    activateEditMode() {
        /*console.log(this.state.editMode)*/
        this.setState({
            editMode: true
        })
        /*this.state.editMode = true;
        /!*this.forceUpdate();*!/*/

        /*console.log(this.state.editMode)*/ /*WE ARE IN ANOTHER PLACE*/
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }
            </div>
        );
    }
}

console.log(ProfileStatus.editMode)

export default ProfileStatus;