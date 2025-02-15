import React from "react";

// function Detail({ location }) {
//   // console.log(location);
//   return <span>hello detail</span>;
// }

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    // console.log(location.state);
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>hello detail</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
