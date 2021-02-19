import React from 'react';
import Repos from './components/Repo/Repos';
import SearchBar from './components/Search/SearchComp';
import { Route, Switch } from 'react-router-dom';
import Issue from './components/Issues/Issue';

export default function Home() {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <SearchBar />

                </Route>
                <Route exact path='/repo'>
                    <Repos />

                </Route>
                <Route exact path='/issues'>
                    <Issue />

                </Route>
            </Switch>

        </div>
    )
}
