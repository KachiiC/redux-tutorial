export const ModalActionTypes = () => {
    return {
        showModal,
        hideModal,
    }
}

export const showModal = () => {
    return {
        type: "ShowModal",
    };
}

export const hideModal = () => {
    return {
        type: "HideModal",
    };
}
