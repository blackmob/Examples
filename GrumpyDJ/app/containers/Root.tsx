
"use strict";
import * as React from "react";
import {Provider} from "react-redux";
import { PropTypes } from "react"
import {Route, Router, IndexRoute} from "react-router"
import {ShowListContainer} from "./ShowContainer";
import {App} from "./App"
import DevTools from "./DevTools";
import {EmotionCanvasContainer} from "../containers/EmotionContainer";

export const Root = (props) =>{
    
        const { store, history } = props;

        return <Provider store={store}>
                <div>
                    <DevTools/>
                    <Router history={history}>
                        <Route path="/" component={App}>
                            <IndexRoute component={ShowListContainer}>
                            </IndexRoute>
                            <Route path="/" component={ShowListContainer}>
                                <Route path=":show" component={EmotionCanvasContainer}></Route>
                             </Route>            
                        </Route>
                    </Router>
                </div>
            </Provider>        
}






