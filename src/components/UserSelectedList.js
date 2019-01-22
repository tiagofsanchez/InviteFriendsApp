import React from 'react'
import { UserList } from './UserList';


export class UserSelectedList extends React.Component {
    
    render () {
        const { personasSelected , isRemoval} = this.props;
    
        return (
            <div>
                <UserList personas={personasSelected}  isRemoval={isRemoval} />
            </div>
        )
    
    }
}