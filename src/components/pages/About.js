import React from 'react'
import { Link } from 'react-router-dom'

import renderPure from 'renderers/renderPure'
import Sample from 'components/sample/Sample'

export const About = () => (
	<div>
		<h1>About</h1>
		<Link to="/" title="Go to Home">Home</Link>
		<Sample />
	</div>
)

export default renderPure(About)
