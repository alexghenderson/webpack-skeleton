const initialState = {
  type: null,
  props: null
}

const ACTION_OPEN_MODAL = "fta/Modal/open";
const ACTION_CLOSE_MODAL = "fta/Modal/close";

const Modal = (state = initialState, { type, payload }) => {
  switch(type) {
    case ACTION_OPEN_MODAL: {
      return {
        type: payload.type,
        props: payload.props
      }
    }
    case ACTION_CLOSE_MODAL: {
      return {
        type: null,
        props: null
      }
    }
  }
  return state;
}

export default Modal;

const OpenModal = (type, props = null) => {
  return {
    type: ACTION_OPEN_MODAL,
    payload: {
      type,
      props
    }
  }
}

const CloseModal = () => {
  return {
    type: ACTION_CLOSE_MODAL,
    payload: null
  }
}

export { OpenModal, CloseModal };
