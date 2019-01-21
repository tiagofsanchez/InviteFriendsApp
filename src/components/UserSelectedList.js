import React from 'react'
import { User } from './User';


export class UserSelectedList extends React.Component {
    
    render () {

        const { personas , personasSelected } = this.props;

        return (
            <div>
                <User personas={personas} personasSelected={ personasSelected } />
            </div>
        )
    }
}