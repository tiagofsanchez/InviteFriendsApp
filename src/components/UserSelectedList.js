import React from 'react'
import { User } from './User';


export class UserSelectedList extends React.Component {
    
    render () {

        const { personasSelected } = this.props;

        return (
            <div>
                <User personasSelected={ personasSelected }  isRemoval={ false }/>
            </div>
        )
    }
}