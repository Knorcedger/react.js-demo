React.render(
	<h1>Hello, world3!</h1>,
	document.getElementById('example')
);

var Inbox = React.createClass({
	render: function() {
		return (
			<div>
				This is the inbox
			</div>
		);
	}
});

var Calendar = React.createClass({
	render: function() {
		return (
			<div>
				This is the calendar
			</div>
		);
	}
});

var Dashboard = React.createClass({
	render: function() {
		return (
			<div>
				This is the dashboard
			</div>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div>
				This is the app
			</div>
		);
	}
});
