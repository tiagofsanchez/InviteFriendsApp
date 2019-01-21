import React from 'react';
import { User } from './User';
import './UserSearchList.css';


export class UserSearchList extends React.Component {
    render () {
        
        const { personas , add } = this.props;

        return (
            <div className="UserSearchList">
                <User personas={personas} isRemoval={true} add = { add } />
            </div> 
        )
    }

}