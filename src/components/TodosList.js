import React, { Component } from 'react';

class TodosList extends Component {
     constructor(props){
          super(props);
          console.log(this.props.mistodos);
     }
     removeTodo(index){
          
          this.props.onRemoveTodo(index);
     }
     render(){
          const listodos = this.props.mistodos.map((mistodo, i) => {
               return(
                    <div className="col-12 col-md-6 col-lg-4 mt-4" key={i}>
                         <div className="card">
                              <div className="card-header">
                                   <h3>{mistodo.title}</h3>
                                   <span className="badge rounded-pill bg-danger">{mistodo.priority}</span>
                              </div>
                              <div className="card-body">
                                   <p>{mistodo.description}</p>
                                   <hr/>
                                   <p>{mistodo.responsible}</p>
                              </div>
                              <div className="card-footer">
                                   <button
                                        className="btn btn-danger"
                                        onClick={this.removeTodo.bind(this,i)}
                                   >Delete</button>
                              </div>
                         </div>
                    </div>
               )
          })

          return(
               <div className="row">
                    {listodos}
               </div>
          )
     }
}

export default TodosList;