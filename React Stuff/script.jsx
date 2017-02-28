var ListItem = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    index: React.PropTypes.number
  },

  getInitialState: function() {
    return {
      starred: false,
      checked: false
    }
  },

  render: function() {
    return (
      <div> { this.props.title } </div>
    )
  }
});

ReactDOM.render(<ListItem title="My List Item" />, document.getElementById('app'))
