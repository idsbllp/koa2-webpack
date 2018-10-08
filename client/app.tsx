import * as React from 'react'
import PropTypes from 'prop-types'

export interface IAppProps {
  title: string
}

class App extends React.Component<IAppProps, {}> {
  static protoTypes = {
    title: PropTypes.string
  }

  render() {
    return (
      <div id="article-form">
        {this.props.title}
      </div>
    )
  }
}

export default App
