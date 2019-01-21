import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';


export class User extends React.Component {
    constructor () {
        super ();
        this.addToList = this.addToList.bind(this);
    }

    //will trigger the onAdd function that will add a persona to the selectedPersonas state array. This is an event handler that is triggered by onClick event listener
    addToList() {
        this.props.add(this.props.personas)
    }

    //will render the remove button if the friend is in the selected list    
    renderRemove = () => {
        if (this.props.isRemoval) {
            return (<Button basic color='green' onClick={this.addToList}> Add to List </Button>)
        } else {
            return (<Button basic color='red'> Remove from List </Button>)
        }
    };

    

    render() {

        const { personas, isRemoval } = this.props;
    

        return (
            <div>
                {isRemoval ?
                    <Card.Group>
                        {/* personas && will prevent error anytime that the personas is undefined */}
                        {personas && personas.map(person => (
                            <Card raised centered key={person.login.uuid} >
                                <Card.Content>
                                    <Image floated='right' size='medium' src={person.picture.large} />
                                    <Card.Header textAlign='left'>{person.name.first} {person.name.last} </Card.Header>
                                    <Card.Description textAlign='left'>Hi, my name is {person.name.first} and I am from {person.nat}</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                        {this.renderRemove()}
                                    </div>
                                </Card.Content>
                            </Card>
                        ))}
                    </Card.Group>
                    :
                    <Card.Group>
                        {/* personas && will prevent error anytime that the personas is undefined */}
                        {personas && personas.map(person => (
                            <Card raised centered key={person.login.uuid} >
                                <Card.Content>
                                    <Image floated='right' avatar src={person.picture.large} />
                                    <Card.Header textAlign='left'>{person.name.first} {person.name.last} </Card.Header>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                        {this.renderRemove()}
                                    </div>
                                </Card.Content>
                            </Card>
                        ))}
                    </Card.Group>
                }
            </div>
        )
    }
}

