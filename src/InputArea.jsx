import React, { useState } from "react";

function InputArea(props) {
	const [inputText, setInputText] = useState("");

	function handleChange(event) {
		const newValue = event.target.value;
		setInputText(newValue);
	}

	return (
		<div className="form">
			<input className="box-border bg-transparent p-3" onChange={handleChange} type="text" value={inputText} />
			<button
				className="p-0 border-none italic no-underline bg-yellow-100 pb-1 rounded-lg"
				onClick={() => {
					props.onAdd(inputText);
					setInputText("");
				}}
			>
				<span className="bg-white block py-2 px-4 rounded-lg border-2 border-solid border-black text-xs">Add</span>
			</button>
		</div>
	);
}

export default InputArea;
