import React from "react";
import cls from "./profile_status.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode = () => {
        this.setState({ editMode: true });
    };

    deactivateEditMode = () => {
        this.setState({ editMode: false });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value,
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    render() {
        console.log("render");
        return (
            <div className={cls.status_wrapper}>
                {!this.state.editMode ? (
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status || "Can fish fly?"}
                        </span>
                    </div>
                ) : (
                    <div>
                        <input
                            onChange={this.onStatusChange}
                            className={cls.status_input}
                            autoFocus
                            type="text"
                            value={this.state.status}
                            onBlur={this.deactivateEditMode}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default ProfileStatus;
