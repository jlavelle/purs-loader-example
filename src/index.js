import React from 'react'
import ReactDOM from 'react-dom'
import { main } from './Main.purs'

const test = () => <p>Hello, world!</p>
main()
ReactDOM.render(test(), document.getElementById('app'))