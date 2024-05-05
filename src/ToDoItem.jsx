import React from "react";

function ToDoItem(props) {
	return (
		<div
			onClick={() => {
				props.onChecked(props.id);
			}}
		>
			<li className="text-left p-2 relative">{props.text}</li>
		</div>
	);
}

export default ToDoItem;
