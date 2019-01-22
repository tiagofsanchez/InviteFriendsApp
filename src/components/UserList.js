import React from 'react';
import { User } from './User';

export class UserList extends React.Component {

    render () {

        const { personas , add , isRemoval } = this.props;

        debugger
        return (
            <div> 
                {personas && personas.map(person => (
                    <User 
                    key={person.login.uuid}
                    person={person}
                    add={add}
                    isRemoval={isRemoval}
                    />
                ))}
            </div>
        )
    }
}
