import React, { Component } from "react";

export class Changetext extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return(this.state.isLoggedIn ? (
      <div>Login Successful</div>
    ) : (
      <div>Please Login</div>
    ))
    // return (this.state.isLoggedIn && <div>Login Successful</div>)
    //     if (this.state.isLoggedIn) {
    //         return <div>This User is logged in</div>
    //     } else {
    //         return <div>Please login</div>
    //     }

    //     return (
    //       <div>

    //       </div>
    //     )
    //   }
  }
}

export default Changetext;
