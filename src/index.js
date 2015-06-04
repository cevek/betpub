import './main.css';
import Bar from './Bar.js';
import React from 'react';
import MyComp from './MyComp';


class Wow{
	constructor(){
		var bar = new Bar();
		console.log("Yeah!", bar.name);
	}
}
new Wow();



React.render(<MyComp/>, document.querySelector('#test'));


