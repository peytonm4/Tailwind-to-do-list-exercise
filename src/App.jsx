import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
	const [items, setItems] = useState([]);

	function addItem(inputText) {
		setItems((prevItems) => {
			return [...prevItems, inputText];
		});
	}

	function deleteItem(id) {
		setItems((prevItems) => {
			return prevItems.filter((item, index) => {
				return index !== id;
			});
		});
	}

	return (
		<div className=" bg-yellow-200 h-screen p-4 box-border flex justify-center items-center text-center text-lg">
			<div className="w-full h-auto min-h-3/4 bg-slate-100 max-w-md bg-25 bg-gradient-radial shadow-md shadow-black p-4 box-border rounded-3xl">
				<div className="flex items-center justify-center mb-4">
					<h1 className=" bg-yellow-500 py-2 px-5 text-2xl rounded-md">To-Do List</h1>
				</div>
				<InputArea onAdd={addItem} />
				<div>
					<ul>
						{items.map((todoItem, index) => (
							<ToDoItem key={index} id={index} text={todoItem} onChecked={deleteItem} />
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;
