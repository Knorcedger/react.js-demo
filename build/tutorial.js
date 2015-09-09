"use strict";

var CommentBox = React.createClass({
	displayName: "CommentBox",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentBox" },
			"Hello, world! I am a CommentBox8.",
			React.createElement(
				"h1",
				null,
				"Comments"
			),
			React.createElement(CommentList, { data: this.props.data }),
			React.createElement(CommentForm, null)
		);
	}
});

var CommentForm = React.createClass({
	displayName: "CommentForm",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentForm" },
			"Hello, world! I am a CommentForm."
		);
	}
});

// tutorial4.js
var Comment = React.createClass({
	displayName: "Comment",

	render: function render() {
		var rawMarkup = marked(this.props.children.toString(), { sanitize: true });
		return React.createElement(
			"div",
			{ className: "comment" },
			React.createElement(
				"h2",
				{ className: "commentAuthor" },
				this.props.author,
				" - ",
				this.props.role
			),
			React.createElement("span", { dangerouslySetInnerHTML: { __html: rawMarkup } })
		);
	}
});

// tutorial5.js
var CommentList = React.createClass({
	displayName: "CommentList",

	render: function render() {
		var commentNodes = this.props.data.map(function (comment) {
			return React.createElement(
				Comment,
				{ author: comment.author },
				comment.text
			);
		});
		return React.createElement(
			"div",
			{ className: "commentList" },
			commentNodes
		);
	}
});

// tutorial8.js
var data = [{
	author: "Pete Hunt",
	text: "This is one comment2"
}, {
	author: "Jordan Walke",
	text: "This is *another* comment"
}];

React.render(React.createElement(CommentBox, { data: data }), document.getElementById('content'));