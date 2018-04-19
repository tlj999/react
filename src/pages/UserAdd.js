import React from 'react';
import UserEditer from '../components/UserEditer';
import HomeLayout from '../layouts/HomeLayout';
class UserAdd extends React.Component {

    render () {

        return (
            <HomeLayout title="添加用户">
               <UserEditer/>
            </HomeLayout>
        );
    }
}


export default UserAdd;