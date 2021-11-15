import React from 'react';

export const RegisterModal = ({ toggleModal, children }) => {
    const toggleModalByClickingContainer = (event) => {
        if (event.target.className === "modal-container") {
            toggleModal();
        }
    };
    return (
        <React.Fragment>
            <div
                className="modal-container"
                data-testid="modal"
                onClick={toggleModalByClickingContainer}
            >
                <div className="modal">
                    {children}
                </div>
            </div>
        </React.Fragment>
    );
};

export default RegisterModal;