import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => { // bisa juga langsung getStyle() {}
        return {
            color: this.props.todo.completed ? 'inherit' : 'red'
        }
    }
    
  render() {
    const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
            { title }
            <button style={btnStyle} onClick={this.props.deleteItem.bind(this, id)}>X</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    border: 'none',
    padding: '5px',
    borderRadius: '100%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
