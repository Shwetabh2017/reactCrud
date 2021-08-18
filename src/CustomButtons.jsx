import React, { useState } from 'react';
import axios from "axios";
import {Divider, Button, Form } from 'semantic-ui-react'

function CustomButtons(props) {
    const [title, setTitle] = useState('');
    const [id, setId] = useState('');

    const [res, setRes] = useState('');
   
    

    function getTodos() {
       
        axios
          .get('https://jsonplaceholder.typicode.com/todos?_limit=5', {
            timeout: 5000
          })
          .then(res => showOutput(res))
          .catch(err => console.error(err));
      }
      
      // POST REQUEST
      function addTodo() {
        axios
          .post('https://jsonplaceholder.typicode.com/todos', {
            title: title,
            id: id
          })
          .then(res => showOutput(res))
          .catch(err => console.error(err));
      }
      
      // PUT/PATCH REQUEST
      function updateTodo() {
      //axios.put('https://jsonplaceholder.typicode.com/todos/1', {
        axios.patch('https://jsonplaceholder.typicode.com/todos/'+id, {
            title: title,
            completed: true
          })
          .then(res => showOutput(res))
          .catch(err => console.error(err));
      }
      
      // DELETE REQUEST
      function removeTodo() {
        axios
          .delete('https://jsonplaceholder.typicode.com/todos/'+id)
          .then(res => showOutput(res))
          .catch(err => console.error(err));
      }
      
      function showOutput(res){
          console.log(res);
          setRes(JSON.stringify(res));
      }

      
      
    return (
        <div>
          <div style={{"borderWidth":"1px", 'borderColor':"#ff0000", 'borderStyle':'solid',  marginBottom: '.8rem'}}>
              <button onClick = {getTodos}>Get Data</button>

            </div>

            <div style={{"borderWidth":"1px", 'borderColor':"#00ff00", 'borderStyle':'solid', marginBottom: '.8rem'}}>
             
             <Form className="create-form">
                <Form.Field>
                    <label>Title</label>
                    <input placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
                </Form.Field>
                           
                <Button onClick={addTodo} type='submit'   >Add data</Button>
            </Form>
                
        </div>
           
          <div style={{"borderWidth":"1px", 'borderColor':"#ababaa", 'borderStyle':'solid', marginBottom: '.8rem'}}>
        

            <Form className="create-form" >
               <Form.Field>
                    <label>Title</label>
                    <input placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Id</label>
                    <input placeholder='Id' onChange={(e) => setId(e.target.value)}/>
                </Form.Field>
             
                <Button onClick={updateTodo} type='submit'  >updateTodo</Button>
            </Form>

        </div>
         
        <div style={{"borderWidth":"1px", 'borderColor':"#ababaa", 'borderStyle':'solid'}}>
            <Form  className="create-form" >
               
                <Form.Field>
                    <label>Id</label>
                    <input placeholder='Id' onChange={(e) => setId(e.target.value)}/>
                </Form.Field>
             
                <Button onClick={removeTodo} type='submit'  >removeTodo</Button>
            </Form>
            
             </div>

             <h3>{res}</h3>
        </div>
    )
}

export default CustomButtons
