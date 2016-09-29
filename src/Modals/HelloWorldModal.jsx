import React from 'react'

import "./HelloWorldModal.less"

const HelloWorldModal = ({message, close, ...props}) => {
  return (
    <div className="wps-HelloWorldModal">
      <div className="wps-HelloWorldModal-header">
        <div className="wps-HelloWorldModal-title">
          Example Header
        </div>
      </div>
      <div className="wps-HelloWorldModal-body">
        Hello {message}!
      </div>
      <div className="wps-HelloWorldModal-footer">
        <a onClick={() => {
          alert("Closing modal");
          close();
        }}> Close </a>
      </div>
    </div>
  )
}

export default HelloWorldModal;
