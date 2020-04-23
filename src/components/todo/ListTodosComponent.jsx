import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export default function ListTodosComponent() {
    const [todoList, setTodoList] = useState([{id: 1, description: 'Finish Todo List App', done: 'No', targetDate: new Date()}]);
    const [id, setId] = useState(2);
    const [description, setDescription] = useState("");

    function clickHandler() {
        setTodoList([...todoList, {id: id, description: description, done: 'No', targetDate: new Date()}]);
        setId(id + 1);
        setDescription("");
    }

    return (
        <div>
            <h1>List your Todos</h1>
            <input type="text" value ={description} onChange = {(event) => {setDescription(event.target.value)}} />
            <button onClick={clickHandler}>Add Item</button>
            <Container>
                <Table striped bordered>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Done</th>
                        <th>Target Date</th>
                    </tr>
                </thead>
                <tbody>
                    {todoList.map((item, i) => 
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.description}</td>
                            <td>{item.done}</td>
                            <td>{item.targetDate.toString()}</td>
                        </tr>)}
                </tbody>
            </Table>
            </Container>
        </div>

    )
}