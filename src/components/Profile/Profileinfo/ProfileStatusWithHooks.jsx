import React, {useState} from 'react';


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateProfileStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className="container">
            {!editMode &&
                <div className="status">
                    <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
                </div>
            }
            {editMode &&
                <div className="">
                    <input  autoFocus={true} onBlur={deActivateEditMode} onChange={onStatusChange}
                    value={status}
                         />
                </div>
            }

        </div >
    )
}

export default ProfileStatusWithHooks;