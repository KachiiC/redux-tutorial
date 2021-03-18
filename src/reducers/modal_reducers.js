import { ModalActionTypes } from '../store/actions';

const initialState = false
  
const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ModalActionTypes.showModal:
            return {
                ...state,
                modal: true,
            };
        case ModalActionTypes.HideModal:
            return {
                ...state,
                modal: false,
            };
        default:
            return state;
  }
}

export default modalReducer;