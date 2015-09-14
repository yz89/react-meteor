ProgressLLL = React.createClass({
  displayName: 'ProgressLLL',

  render() {
    var progress = 50;
    var textStyle = {
      'fill': '#ffffff',
      'textAnchor': 'middle'
    };

    return (
      <ProgressLabel
        progress={progress}
        startDegree={60}
        progressWidth={8}
        trackWidth={20}
        cornersWidth={4}
        size={400}
        fillColor="black"
        trackColor="red"
        progressColor="green">

        <text x="200" y="200" style={textStyle}>{`${progress}%`}</text>

      </ProgressLabel>
    );
  }
});