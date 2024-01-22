import React, { Component } from "react";

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message:"welcome vistore"
        }
    }
  render() {
    return (
<h1>{this.state.message}</h1>
    //   <div>
    //     <h1>
    //       PORT<span>folio</span>
    //     </h1>
    //     <nav>
    //       <ul>
    //         <li>
    //           <a href="#">HOME</a>
    //         </li>
    //       </ul>
    //       <ul>
    //         <li>
    //           <a href="#">ABOUT</a>
    //         </li>
    //       </ul>
    //       <ul>
    //         <li>
    //           <a href="#">SERVICES</a>
    //         </li>
    //       </ul>
    //       <ul>
    //         <li>
    //           <a href="#">CONTACT</a>
    //         </li>
    //       </ul>
    //     </nav>
    //     <button>Read more</button>
    //   </div>
    );
  }
}
export default Message;
