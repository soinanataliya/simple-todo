import React from 'react';
import styles from './Todo.module.scss'

export class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            todoList: [
                {
                    name: 'Попрогать',
                    id: 0
                },
                {
                    name: 'Покушать',
                    id: 1
                },
                {
                    name: 'Погамать',
                    id: 2
                },
            ],
            newTask: ''
        }
    }
    handleClick = (i) => {
        const toDoList1 = [...this.state.todoList];
        this.setState(
            {
                todoList: toDoList1.filter(elem => elem.id !== i)
            }
        )
    }
    onChangeNewTask = (event) => {
        this.setState({
            newTask: event.target.value
        })
    }
    addNewTask = (e) => {
        e.preventDefault();
        if (this.state.newTask !== "") {
            let toDoList1 = [...this.state.todoList];
            const newTask1 = this.state.newTask;
            toDoList1.push({ name: newTask1, id: this.generateId() });
            this.setState(
                {
                    todoList: [...toDoList1]
                }
            )
            this.setState({
                newTask: ''
            })
        }
        else return
    }
    generateId = () => {
        return Math.floor(Math.random() * Math.floor(1000))
    }
    render() {
        const todoList1 = [...this.state.todoList];
        let ToDo = todoList1.map((item) => (<li key={item.id}>{item.name}<button onClick={() => this.handleClick(item.id)}>х</button></li>));
        return (
            <>
                <div className={styles.todoWrapper}>
                    <ol>
                        {ToDo}
                    </ol>
                </div>
                <div className={styles.newTask}>
                    <h3>Добавить новое дело:</h3>
                    <input type="name" name="new" value={this.state.newTask} onChange={this.onChangeNewTask}></input>
                    <button onClick={this.addNewTask}>+</button>
                </div>
            </>
        )
    }
}