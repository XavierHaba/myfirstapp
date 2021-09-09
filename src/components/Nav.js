import React, { Component } from 'react';

import './Nav.css';

class Nav extends Component {
     render(){
          return (
          <div className="navigation">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                         <div className="container-fluid">
                              <a className="navbar-brand" href="#">{this.props.titulo}</a>
                              <span className="badge bg-secondary">{this.props.numtask}</span>
                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                   <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse" id="navbarNav">
                                   <ul className="navbar-nav">
                                        <li className="nav-item">
                                             <a className="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link" href="#">Features</a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link" href="#">Pricing</a>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </nav>
          </div>
          );
     }
}

export default Nav;