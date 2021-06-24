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

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
        console.log("componentDidUpdate");
        /*this was written to escape problem with two request to api - get status and update status */
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