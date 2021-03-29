import './App.css'
import Main from './pages/Main/Main'
import Payment from './pages/Payment/Payment'
import AlertProvider from './context/AlertContext'
import AlertMessage from './components/AlertMessage/AlertMessage'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
function App() {
  return (
    <AlertProvider>
      <AlertMessage />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/payment" exact component={Payment} />
      </Switch>
    </AlertProvider>
  )
}

export default App
