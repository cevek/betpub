import React, { Component } from 'react';

export default class MyComp extends Component {
	counter = 0;

	tick() {
		this.counter++;
		this.forceUpdate();
	}

	componentDidMount() {
		this.interval = setInterval(()=>this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div>Seconds Elapsed: {this.counter}</div>
		);
	}
}