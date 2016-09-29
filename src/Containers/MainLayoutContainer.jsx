import React from 'react'
import { connect } from 'react-redux'

import ModalContainer from './ModalContainer'
import HelloWorldComponent from '../Components/HelloWorldComponent'

import { OpenModal } from '../Reducers/Modal'

const MainLayoutContainer = ({...props}) => {
  return (
    <div>
      <ModalContainer/>
      <HelloWorldComponent onClick={props.onOpenModal}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenModal: () => {
      dispatch(OpenModal("HelloWorldModal", {message: "Bob"}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayoutContainer)
