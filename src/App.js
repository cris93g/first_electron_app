import React, { Component } from "react";
import axios from "axios";

class App extends Component {
	componentDidMount() {
		axios
			.get("https://reddit.com/r/aww.json")
			.then(response => {
				console.log(response.data.data.children);
			})
			.catch(error => {
				console.log(error);
			});
	}
	render() {
		return (
			<div className="App">
				<p>it worked</p>
			</div>
		);
	}
}

export default App;
