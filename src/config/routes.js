import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ContentHome from '../screen/ContentHome'
import BookDetail from '../screen/BookDetail'


export default function Routes(){


    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ContentHome}/>
                <Route path='/book/:id' component={BookDetail}/>
            </Switch>
        </BrowserRouter>
    )
}



