import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'

export default function CusForm() {
    const [title, setTitle] = useState('');
    const [id, setId] = useState('');
   
    const postData = () => {
        console.log(title);
        console.log(id);
       
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Title</label>
                    <input placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Id</label>
                    <input placeholder='Id' onChange={(e) => setId(e.target.value)}/>
                </Form.Field>
             
                <Button onClick={postData} type='submit'   title = {title} id = {id}>Submit</Button>
            </Form>
        </div>
    )
}