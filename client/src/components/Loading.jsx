import React from 'react'

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center'
  }
}

export default class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state = { content: this.props.text}
  }

  render() {
    return (
      <p>LOADING</p>
    )
  }
}
