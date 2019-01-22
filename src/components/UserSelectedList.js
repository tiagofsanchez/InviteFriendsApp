import React from 'react'
import { User } from './User';


export class UserSelectedList extends React.Component {
    
    render () {

        const { personasSelected , isRemoval} = this.props;

        return (
            <div>
                <User personasSelected={ personasSelected }  isRemoval={ isRemoval }/>
            </div>
        )
    }
}