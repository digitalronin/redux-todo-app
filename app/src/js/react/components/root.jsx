var ReactDOM = require('react-dom')
var React    = require('react')

var Hello = require('./hello.jsx')

ReactDOM.render(
  <Hello greeting="Hello from React" />,
  document.getElementById('root')
)
