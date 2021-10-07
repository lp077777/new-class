import React, { useState } from 'react'
import { Todo } from './Todo'

export function TodoList() {
	const [value, setValue] = useState('change your input here')
	const [todoArray, setTodoArray] = useState([])
	function handleAdd() {
		let newAddedValue = value === '' ? 'empty item' : value
		setTodoArray([
			...todoArray,
			{ id: new Date().getTime(), value: newAddedValue, editable: false },
		])
		setValue('')
	}
	function handleInputChange(e) {
		setValue(e.target.value)
	}
	function handleEdit(id) {
		let newArr = todoArray.map((item) => {
			if (item.id === id) {
				item.editable = !item.editable
			}
			return item
		})
		setTodoArray(newArr)
	}
	function handleDelete(id) {
		let newArr = todoArray.filter((item) => item.id !== id)
		setTodoArray(newArr)
	}
	function handleEditChange(id, value) {
		let newArr = todoArray.map((item) => {
			if (item.id === id) {
				item.value = value
			}
			return item
		})
		setTodoArray(newArr)
	}
	return (
		<div>
			<div>
				<input id="addInput" value={value} onChange={handleInputChange}></input>
				<button id="addButton" onClick={handleAdd}>
					Add
				</button>
			</div>
			{todoArray.map((item) => {
				return (
					<Todo
						key={item.id}
						item={item}
						handleEdit={handleEdit}
						handleEditChange={handleEditChange}
						handleDelete={handleDelete}
					/>
				)
			})}
		</div>
	)
}
