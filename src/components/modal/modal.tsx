import * as React from "react";

import "./modal.scss";

export interface IModal {
    isVisible?: boolean;
    modalTitle: string;
    modalFooterButton: {
        title: string;
        callback: () => void;
    };
    children: React.ReactNode;
    onClose?: () => void;
}

export function Modal({
    isVisible = true,
    children,
    modalTitle,
    modalFooterButton,
    onClose
    }: IModal) {

    const [isModalVisible, setModalVisibility] = React.useState(isVisible);
    const onCloseCallback = () => {
        setModalVisibility(!isModalVisible);
        onClose && onClose();
    };

    return isModalVisible ? (
        <div className="m-modal">
            <div className="s-modal-container">
                <div className="s-container-head">
                    <div className="s-head-title">
                        {modalTitle}
                    </div>

                    <button className="s-head-button" onClick={onCloseCallback} type="button">
                        Cancel
                    </button>
                </div>

                <div className="s-container-body">
                    {children}
                </div>

                <div className="s-container-footer">
                    <button
                        className="s-footer-button"
                        onClick={modalFooterButton.callback}
                    >
                        {modalFooterButton.title}
                    </button>
                </div>


            </div>

            <div className="s-backplate" onClick={onCloseCallback}/>
        </div>
    ) : null;
}
