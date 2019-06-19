import React, { Component } from "react";
import Meta from './Meta.js'
import Header from './Header.js'

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default Page
