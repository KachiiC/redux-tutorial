import React from 'react'
import './modal.css'



const SiteModal = (props) => {

    const { onCloseButtonClick } = props;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <span className="modal-close" onClick={onCloseButtonClick}>
                    &#10005;
                </span>
                {props.content}
            </div>
        </div>
    );
}

export default SiteModal