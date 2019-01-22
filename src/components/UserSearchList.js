import React from 'react';
import './UserSearchList.css';
import { UserList } from './UserList';


export class UserSearchList extends React.Component {
    render () {
        
        const { personas , add , isRemoval } = this.props;

        return (
            <div className="UserSearchList">
                <UserList personas={personas} isRemoval={isRemoval} add = {add} />
            </div> 
        )
    }

}