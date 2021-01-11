// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
    render() {
        return (
            <div className='todoList'>
                {this.props.list.map(item => {
                    return <Todo handleToggleItem={this.props.handleToggleItem} key={item.id} item={item} />
                })}
            </div>
        )
    }
}
