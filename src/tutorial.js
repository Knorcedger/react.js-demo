var CommentBox = React.createClass({
	render: function() {
		return (
			<div className="commentBox">
				Hello, world! I am a CommentBox8.
				<h1>Comments</h1>
				<CommentList data={this.props.data} />
				<CommentForm />
			</div>
		);
	}
});

var CommentForm = React.createClass({
	render: function() {
		return (
			<div className="commentForm">
			Hello, world! I am a CommentForm.
			</div>
		);
	}
});

// tutorial4.js
var Comment = React.createClass({
	render: function() {
		var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
		return (
			<div className="comment">
			<h2 className="commentAuthor">
			{this.props.author} - {this.props.role}
			</h2>
			<span dangerouslySetInnerHTML={{__html: rawMarkup}} />
			</div>
		);
	}
});

// tutorial5.js
var CommentList = React.createClass({
	render: function() {
		var commentNodes = this.props.data.map(function (comment) {
			return (
				<Comment author={comment.author}>
				{comment.text}
				</Comment>
			);
		});
		return (
			<div className="commentList">
			{commentNodes}
			</div>
		);
	}
});

// tutorial8.js
var data = [
	{
		author: "Pete Hunt",
		text: "This is one comment2"
	},
	{
		author: "Jordan Walke",
		text: "This is *another* comment"
	}
];

React.render(
	<CommentBox data={data} />,
	document.getElementById('content')
);
