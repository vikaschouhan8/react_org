// import React, { Component } from 'react'
// //routing
// import {Route, Link } from "react-router-dom"

// // const Doc = ({match}) => <h1>I am a docs with id: {match.params.id}</h1>
// const User = ({ match }) => <p>{match.params.id}</p>


// export default class Docs extends Component {
//     render() {
//         // const { params } = this.props.match
//         const { url } = this.props.match
//         // console.log(this.props)
//         return (
//             <>
//                <div className="row">
//                     <div className="col-md-8">

//                         <h1>Indore Badi si heading</h1>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eius. 
//                             Nesciunt sunt maiores, provident officia quisquam ducimus laborum ad dolore 
//                             reiciendis magni ut a adipisci dicta molestias corrupti enim? Ratione.</p>
//                     </div>
//                     <div className="col-md-4">
//                         <ul>
//                             <li>
//                                 <Link to="/docs/1">docs 1</Link>
//                             </li>
//                             <li>
//                                 <Link to="/docs/2">docs 2</Link>
//                             </li>
//                             <li>
//                                 <Link to="/docs/3">dosc 3</Link>
//                             </li>
//                         </ul>
//                         <Route path="docs/:id" component={User}/>
//                     </div>
//                 </div> 
//             </>
//         )
//     }
// }


import React from 'react'
import { Route, Link } from 'react-router-dom'
const User = ({ match }) => <p>{match.params.id} fgfdg</p>
class Docs extends React.Component {
  render() {
    // const { url } = this.props.match
    return (
      <div>
        <h1>Users</h1>
        <strong>select a user</strong>
        <ul>
          <li>
            <Link to="/docs/1">User 1 </Link>
          </li>
          <li>
            <Link to="/docs/2">User 2 </Link>
          </li>
          <li>
            <Link to="/docs/3">User 3 </Link>
          </li>
        </ul>

        <Route path="/docs/:id" component={User} />
      </div>
    )
  }
}
export default Docs