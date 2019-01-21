import React from 'react';
import { User } from './User';


export class UserSearchList extends React.Component {
    render () {
        
        const { personas , add } = this.props;

        return (
            <div>
                <User personas={personas} isRemoval={true} add = { add } />
            </div> 
        )
    }

}