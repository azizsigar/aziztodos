import React, { useState } from 'react'
import axios from "axios";

export default function Add({setTodos,fetchData}) {
    const [inputValue, setInputValue] = useState('');

    const [newTodo, setNewTodo] = useState({
        'body': '',
        'description':'',
        'due_datetime':'',
        'location':'',
        'related_url':'',
    })
    const inputChange = (e) => {
        
        setNewTodo(prev => ({
            
            ...prev,
            'body': e.target.value
            
        }))
        console.log(newTodo)
    }
    const inputDescription = (e) => {
        
        setNewTodo(prev => ({
            ...prev,
            'description': e.target.value
            
        }))
        setInputValue('');
        console.log(newTodo)
    }
    const inputDue_datetime = (e) => {
        
        setNewTodo(prev => ({
            ...prev,
            'due_datetime': e.target.value
            
        }))
        setInputValue('');
        console.log(newTodo)
    }
    const inputLocation = (e) => {
        
        setNewTodo(prev => ({
            ...prev,
            'location': e.target.value
            
        }))
        setInputValue('');
        console.log(newTodo)
    }
    const inputRelated_url = (e) => {
        
        setNewTodo(prev => ({
            ...prev,
            'related_url': e.target.value
            
        }))
        setInputValue('');
        console.log(newTodo)
    }

    const postTodo = async()=>{
        try {
            await axios.post('http://127.0.0.1:8000/api/todo/',newTodo)
            setTodos(prevTodos=>[...prevTodos,newTodo])
            fetchData()
            setNewTodo({
                body: '',
                description: '',
                due_datetime: '',
              });
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <input
                placeholder='title'
                onChange={inputChange}
                value={newTodo.body}
            />
            <input placeholder='description'
            onChange={inputDescription}
            value={newTodo.description}
            />
            <input
            onChange={inputDue_datetime}
            value={newTodo.due_datetime}
            type='datetime-local'
            />
            <input
            type='url'
            placeholder='location'
            onChange={inputLocation}
            value={newTodo.location}

            />
            <input
            type='url'
            placeholder='related_url'
            onChange={inputRelated_url}
            value={newTodo.related_url}

            />
            <button
            onClick={postTodo}
            >
            add todon
            </button>

        </div>
    )
}
