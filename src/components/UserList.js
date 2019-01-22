import React from 'react';
import { User } from './User';

export class UserList extends React.Component {

    render () {

        const { personas , add , isRemoval , remove } = this.props;

        return (
            <div> 
                {personas && personas.map(person => (
                    <User 
                    key={person.login.uuid}
                    person={person}
                    add={add}
                    remove={remove}
                    isRemoval={isRemoval}
                    />
                ))}
            </div>
        )
    }
}
