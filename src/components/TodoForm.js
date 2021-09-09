import React, { Component } from 'react'

class TodoForm extends Component {
     constructor(props){
          super(props);
          this.state = {
               title: '',
               responsible: '',
               description: '',
               priority: 'baixa',
               desactivated: true
          }
          this.handleInput = this.handleInput.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.handleDesactive = this.handleDesactive.bind(this);
     }

     handleInput(e){
          //console.log(e.target.value);
          const { value, name } = e.target;
          this.setState({
               [name]: value
          });

          this.handleDesactive(e);
     }

     handleDesactive(e){
          console.log('Estado: ', e.target.value);

          if(e.target.value !== ''){
               this.setState({
                    desactivated: false
               });
          }else{
               this.setState({
                    desactivated: true
               });
          }
     }

     handleSubmit(e){
          e.preventDefault();
          //console.log(this.state);
          this.props.onAddTodo(this.state);
          e.target.reset();
          this.setState({
               desactivated: true
          });

     }
     render(){
          return(
               <div className="card mt-4">
                    <form className="card-body" onSubmit={this.handleSubmit}>
                         <div className="form-body mb-3">
                              <input 
                                   type="text"
                                   name="title"
                                   onChange={this.handleInput}
                                   className="form-control"
                                   placeholder="Title"
                              />
                         </div>
                         <div className="form-body mb-3">
                              <input 
                                   type="text"
                                   name="responsible"
                                   onChange={this.handleInput}
                                   className="form-control"
                                   placeholder="Responsible"
                              />
                         </div>
                         <div className="form-body mb-3">
                              <input 
                                   type="text"
                                   name="description"
                                   onChange={this.handleInput}
                                   className="form-control"
                                   placeholder="Description"
                              />
                         </div>
                         <div className="form-body mb-3">
                              <label className="form-label">Priority</label>
                              <select name="priority" className="form-control" onChange={this.handleInput} >
                                   <option value="baixa">Baixa</option>
                                   <option value="mitja">Mitja</option>
                                   <option value="alta">Alta</option>
                              </select>
                         </div>
                         <div className="form-body mb-3">
                              <input type="submit" value="Submit" className="btn btn-primary" disabled={this.state.desactivated} />
                         </div>
                    </form>
               </div>
          )
     }
}
export default TodoForm;