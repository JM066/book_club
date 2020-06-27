// import React, { Component } from 'react'
// import "./overlay.css";


// export default class Overlay extends Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           style : {
//               width : 350
//           }
//       };
//       this.openNav = this.openNav.bind(this);
//       this.closeNav = this.closeNav.bind(this);
//   }

//   componentDidMount() {
//       document.addEventListener("click", this.closeNav);
//   }

//   componentWillUnmount() {
//       document.removeEventListener("click", this.closeNav);
//   }

//   openNav() {
//       const style = { width : 350 };
//       this.setState({ style });
//       document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
//       document.addEventListener("click", this.closeNav);
//   }

//   closeNav() {
//       document.removeEventListener("click", this.closeNav);
//       const style = { width : 0 };
//       this.setState({ style });
//       document.body.style.backgroundColor = "#F3F3F3";
//   }

//   render() {
//       return (
//         <div>
//         {/* <h2>Fullscreen Overlay Nav Example</h2>
// <p>Click on the element below to open the fullscreen overlay navigation menu.</p>
// <p>In this example, the navigation menu will slide in, from left to right:</p> */}
// <span style={{fontSize:30,cursor:"pointer"}} onClick={this.openNav}>&#9776; open</span>
//           <div
//               ref       = "snav"
//               className = "overlay"
//               style     = {this.state.style}
//           >
//               <div className = "sidenav-container">
//                   <div className = "text-center">
//                     <h2>Form</h2>
//                     <p>This is a sample input form</p>
//                   </div>
//                   <a
//                       href      = "javascript:void(0)"
//                       className = "closebtn"
//                       onClick   = {this.closeNav}
//                   >
//                       ×
//                   </a>
//                 <div className = "list-group">

//                 <div 
//   style={{display: this.state.show_overlay === true ? 'block' : 'none'}}
// >
//   overlay
// </div>
//                     {this.props.children}
//                 </div>
//               </div>
//           </div>
//         </div>
//       );
//   }
// }