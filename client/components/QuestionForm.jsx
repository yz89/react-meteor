QuestionForm = React.createClass({
	submitQuestion: function(e){
		e.preventDefault();

		if( !this.refs.title.getDOMNode().value ) return;

		var newQuestion = {
			title: this.refs.title.getDOMNode().value,
			desc: this.refs.desc.getDOMNode().value,
			voteCount: 0
		}

		this.refs.addQuestionForm.getDOMNode().reset();

		this.props.onNewQuestion( newQuestion );
	},
	render: function() {
		var styleObj = {
			display: this.props.formDisplayed ? 'block' : 'none'
		}

		return (
			<form ref="addQuestionForm" name="addQuestion" className="clearfix" style={styleObj} onSubmit={this.submitQuestion}>
	          <div className="form-group">
	            <label htmlFor="qtitle">问题</label>
	            <input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题的标题" />
	          </div>
	          <textarea ref="desc" className="form-control" rows="3" placeholder="问题的描述"></textarea>
	          <button className="btn btn-success pull-right">确认</button>
	          <a className="btn btn-default pull-right" onClick={this.props.onToggleForm}>取消</a>
	        </form>
		);
	}

});