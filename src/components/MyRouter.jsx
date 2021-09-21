import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Works from './pages/Works'
import Home from './pages/Home'
import Header from './pages/Header'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'

const MyRouter = () => {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    {/* <Route exact path="/" component={Header}/> */}
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/skills" component={Skills}/>
                    <Route exact path="/works" component={Works}/>
                    <Route exact path="/contact" component={Contact}/>
                </Switch>
                <Footer/>
            </Router>
        </>
    )
}

export default MyRouter
