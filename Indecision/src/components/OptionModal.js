import React from 'react'
import Modal from 'react-modal';


export const OptionModal = (props) => (
    <div>
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleCloseModal}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="modal"
            ariaHideApp={false}
        >
            <div>
                <h3 className="modal__title">Selected Option</h3>
                {props.selectedOption && <p className="modal__body">{props.selectedOption}</p> }
            </div> 
            <button 
                className="button big-button"
                onClick={props.handleCloseModal}
                >
                Close
            </button>
        </Modal>
    </div>
)


