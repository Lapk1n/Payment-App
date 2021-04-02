import './App.css'
import Main from './pages/Main/Main'
import Payment from './pages/Payment/Payment'
import AlertProvider from './context/AlertContext'
import AlertMessage from './components/AlertMessage/AlertMessage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <AlertProvider>
        <AlertMessage />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/payment" component={Payment} />
        </Switch>
      </AlertProvider>
    </Router>
  )
}

export default App
