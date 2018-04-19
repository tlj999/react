import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/style.css';
import HomeLayout from '../layouts/HomeLayout';

class Home extends React.Component {
    render () {
        return (
            <HomeLayout title="Welcome">
                <ul>
                    <li className="active">
                        <Link to="/user/add">添加用户</Link>
                    </li>
                    <li>
                        <Link to="/book/add">添加书籍</Link>
                    </li>
                    <li>
                        <Link to="/user/list">用户列表</Link>
                    </li>

                </ul>
            </HomeLayout>

        );
    }
}
export default Home;