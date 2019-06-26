import React from "react";

class Dashboard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div onClick={this.props.function} className="dashboard">
        I am the Dashboard component, and I am a child of the App component
      </div>
    );
  }
}

export default Dashboard;
