import React, { useState, useEffect } from 'react'
import { Todo } from './Todo'
import png1 from '../img/1.png'
import png2 from '../img/2.png'
import png3 from '../img/3.png'
import png4 from '../img/4.png'
export function TodoList() {
	const [value, setValue] = useState('change your input here')
	const [todoArray, setTodoArray] = useState([])
	const [imgPlay, setimgPlay] = useState(true)
	const [imgIndex, setimgIndex] = useState(0)
	const imgList = [png1, png2, png3, png4]

	useEffect(() => {
		const interval = setInterval(() => {
			if (imgIndex === 3) {
				setimgIndex(0)
			} else {
				setimgIndex(imgIndex + 1)
			}
		}, 5000)
		if (!imgPlay) { 
			clearInterval(interval)
		}
		return () => clearInterval(interval)
	}, [imgIndex,imgPlay])
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
	function handleStopImg() {
		setimgPlay(false)
	}
	return (
		<div>
			<div id="img" onClick={handleStopImg}>
				{imgList
					.filter((item, index) => index === imgIndex)
					.map((item, index) => {
						return <img src={item} alt={index} key={index} width="200" />
					})}
			</div>
			<br />
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
