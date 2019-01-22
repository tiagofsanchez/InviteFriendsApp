import React from 'react';
import './UserSearchList.css';
import { UserList } from './UserList';


export class UserSelectedList extends React.Component {
    
    render () {
        const { personasSelected , isRemoval , remove } = this.props;
    
        return (
            <div className="UserSearchList" >
                <UserList personas={personasSelected}  isRemoval={isRemoval} remove={remove} />
            </div>
        )
    
    }
}