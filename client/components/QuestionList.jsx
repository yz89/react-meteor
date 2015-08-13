QuestionList = React.createClass({

	render: function() {

		var questions = this.props.questions;
		var onVote = this.props.onVote;

		var questionComps = questions.map(function (qst) {
			return <QuestionItem 
						key={qst.key}
						questionKey={qst.key}
						title={qst.title}
						desc={qst.desc}
						voteCount={qst.voteCount} 
						onVote={onVote} />
		});

		return (
			<div id="questions" className="">
				{questionComps}
			</div>
		);
	}

});