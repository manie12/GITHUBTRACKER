import React, { useState, useEffect } from 'react';
import Repos from './components/Repo/Repos';
import SearchBar from './components/Search/SearchComp';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Issue from './components/Issues/Issue';
import { setQuery } from './Redux/Actions/Query'

export default function Home() {
    const dispatch = useDispatch();
    const [searchIssue, setsearchIssue] = useState({ searchName: "", filter: '', search: '', label: '' });

    useEffect(() => {
        dispatch(setQuery(searchIssue));
    }, [searchIssue]);

    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <SearchBar searchIssue={searchIssue} setsearchIssue={setsearchIssue} />

                </Route>
                <Route exact path='/repo'>
                    <Repos />

                </Route>
                <Route exact path='/issues'>
                    <Issue searchIssue={searchIssue} setsearchIssue={setsearchIssue} />

                </Route>
            </Switch>

        </div>
    )
}
