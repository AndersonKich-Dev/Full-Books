import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ContentHome from '../screen/ContentHome'


export default function Routes(){


    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ContentHome}/>
            </Switch>
        </BrowserRouter>
    )
}