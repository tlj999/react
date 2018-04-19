import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import UserAddPage from './pages/UserAdd';
import HomePage from './pages/Home';
import BookAddPage from './pages/BookAdd';
import UserListPage from './pages/UserList';
import UserEditPage from './components/UserEditer'


ReactDOM.render((
    <Router>
        <div>

            <Route exact path="/" component={HomePage}/>
            <Route path="/user/add" component={UserAddPage}/>
            <Route path="/book/add" component={BookAddPage}/>
            <Route path="/user/list" component={UserListPage}/>
            <Route path="/user/edit:id" component={UserEditPage}/>


        </div>
    </Router>
), document.getElementById('app'));