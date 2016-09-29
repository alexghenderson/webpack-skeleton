import React from 'react'

import './HelloWorldComponent.less'

const HelloWorldComponent = ({onClick, ...props}) => {
  return (
    <div className="wps-HelloWorldComponent">
      Hello world! <a onClick={onClick}>Open Modal</a>
    </div>
  )
}

export default HelloWorldComponent;
