import React, { Component } from "react";

class SonPage extends Component {
	
	UNSAFE_componentWillMount() {
		console.log("sonPage--willmount");
	}
	componentDidMount() {
		console.log("sonPage--didmount");
	}

	componentWillUnmount() {
		console.log("sonPage--willUmmount");
	}

	// getSnapshotBeforeUpdate(preProps, preState) {
	// 	console.log("sonPage---getSnapshotBeforeUpdate");
	// 	console.log(preProps);
	//     console.log(preState);
	//     return {};
	// }
	UNSAFE_componentWillUpdate() {
		console.log('sonPage--willUpdate')
	}
	componentDidUpdate() {
		console.log("sonPage---componentDidUpdate");
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("sonPage---showComponentUpdate");
		console.log(nextProps);
		console.log(nextState);
		return true;
	}

	// static getDerivedStateFromProps(props) {
	// 	console.log("sonPage----getDrivedStateFromProps");
	// 	console.log(props);
	// 	// console.log(state);
	// 	return null;
	// }
	render() {
		return <div>Son Page</div>;
	}
}

class LifeCyclePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}
	UNSAFE_componentWillMount() {
		console.log("--willmount");
	}
	componentDidMount() {
		console.log("--didmount");
	}

	componentWillUnmount() {
		console.log("--willUmmount");
	}

	UNSAFE_componentWillUpdate() {
		console.log("--willUpdate");
	}
	getSnapshotBeforeUpdate(preProps, preState) {
		console.log("---getSnapshotBeforeUpdate");
		console.log(preProps);
		console.log(preState);
		return {};
	}

	componentDidUpdate() {
		console.log("---componentDidUpdate");
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("---showComponentUpdate");
		console.log(nextProps);
		console.log(nextState);
		return true;
	}

	static getDerivedStateFromProps(props, state) {
		console.log("getDrivedStateFromProps");
		console.log(props);
		console.log(state);
		return null;
	}
	handleClick = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};

	render() {
		return (
			<div className="container">
				<div>生命周期测试</div>
				<div>
					count:<button onClick={this.handleClick}>{this.state.count}</button>
				</div>
				<SonPage count={this.state.count} />
			</div>
		);
	}
}

export default LifeCyclePage;
