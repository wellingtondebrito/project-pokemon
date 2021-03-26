import React from "react"
import Home from "../pages/home"
import Pokeball from "../pages/pokeball"
import Details from '../pages/details'

import {BrowserRouter, Route, Switch} from "react-router-dom"

const Router = () => {
    return(
        
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <Home/>
                </Route>

                <Route exact path={"/details/:id"}>
                    <Details/>
                </Route>

                <Route exact path={"/pokeball"}>
                    <Pokeball/>
                </Route>
            </Switch>
         </BrowserRouter>
     
      
    )
}

export default Router
