import React from 'react'
import { connect } from 'react-redux'

import modals from '../Modals/index'
import { CloseModal } from '../Reducers/Modal'

import './ModalContainer.less'

const ModalContainer = ({modal, closeModal, modalProps, ...props}) => {
  if(modals[modal] === undefined) return null;
  const ModalComponent = modals[modal];
  console.log(ModalComponent);
  return (
    <div className="fta-ModalContainer">
      <ModalComponent close={closeModal} {...modalProps}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal.type,
    modalProps: state.modal.props
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch(CloseModal());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
