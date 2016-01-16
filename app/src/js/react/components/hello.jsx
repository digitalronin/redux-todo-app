var React = require('react')

var Hello = React.createClass({
  render() {
    return <h1>{this.props.greeting}</h1>
  }
})

module.exports = Hello
