import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        title: "yo"
    }

    toggleHandlerEditMode() {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return (
            <div>
                <div>
                    {
                        this.state.editMode
                            ? <input autoFocus onBlur={this.toggleHandlerEditMode.bind(this)} value={this.state.title}
                                     type="text"/>
                            : <span onDoubleClick={this.toggleHandlerEditMode.bind(this)}>{this.state.title}</span>
                    }
                </div>
            </div>
        )
    }
}


export default ProfileStatus