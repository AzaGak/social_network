import React from "react";
import cls from "./profile_status.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    };

    activateEditMode = () => {
        this.setState({ editMode: true });
    };

    deactivateEditMode = () => {
        this.setState({ editMode: false });
    };

    render() {
        return (
            <div className={cls.status_wrapper}>
                {!this.state.editMode ? (
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status}
                        </span>
                    </div>
                ) : (
                    <div>
                        <input
                            className={cls.status_input}
                            autoFocus
                            type="text"
                            value={this.props.status}
                            onBlur={this.deactivateEditMode}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default ProfileStatus;
