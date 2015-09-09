'use strict';

React.render(React.createElement(
	'h1',
	null,
	'Hello, world3!'
), document.getElementById('example'));

var Inbox = React.createClass({
	displayName: 'Inbox',

	render: function render() {
		return React.createElement(
			'div',
			null,
			'This is the inbox'
		);
	}
});

var Calendar = React.createClass({
	displayName: 'Calendar',

	render: function render() {
		return React.createElement(
			'div',
			null,
			'This is the calendar'
		);
	}
});

var Dashboard = React.createClass({
	displayName: 'Dashboard',

	render: function render() {
		return React.createElement(
			'div',
			null,
			'This is the dashboard'
		);
	}
});

var App = React.createClass({
	displayName: 'App',

	render: function render() {
		return React.createElement(
			'div',
			null,
			'This is the app'
		);
	}
});