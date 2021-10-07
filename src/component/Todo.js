import React from 'react'

export function Todo({ item, handleEdit, handleEditChange, handleDelete }) {
	function clickEdit() {
		handleEdit(item.id)
	}
	function clickDelete() {
		handleDelete(item.id)
	}
	function handleItemChange(e) {
		handleEditChange(item.id, e.target.value)
	}
	if (item.editable) {
		return (
			<div key={item.id}>
				<input value={item.value} onChange={handleItemChange} />
				<button onClick={clickEdit}>Save</button>
				<button onClick={clickDelete}>Delete</button>
			</div>
		)
	}
	return (
		<div key={item.id}>
			{item.value}
			<button onClick={clickEdit}>Edit</button>
			<button onClick={clickDelete}>Delete</button>
		</div>
	)
}
