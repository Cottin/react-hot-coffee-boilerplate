React = require 'react'

{h1} = React.DOM

AppView = React.createClass
	displayName: 'AppView'

	render: ->
		h1 {}, 'Hello World'

module.exports = AppView
