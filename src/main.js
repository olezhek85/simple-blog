import 'regenerator-runtime/runtime'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import App from './components/App'
import getStore from './store'

const store = getStore()

const ui = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
const container = document.getElementById('root')

render(ui, container)
