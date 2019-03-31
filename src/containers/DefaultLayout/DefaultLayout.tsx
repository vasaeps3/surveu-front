import React, { Component } from 'react';


export default class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    return (
      <div className="defaultLayout">
        defaultLayout!
        {/* {this.props.children} */}
      </div>
    )
  }
}
