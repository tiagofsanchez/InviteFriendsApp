import React from 'react';
import { User } from './User';
import './UserSearchList.css';


export class UserSearchList extends React.Component {
    render () {
        
        const { personas , add , isRemoval } = this.props;

        return (
            <div className="UserSearchList">
                <User personas={personas} isRemoval={isRemoval} add = {add} />
            </div> 
        )
    }

}