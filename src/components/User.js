import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';


export class User extends React.Component {
    constructor() {
        super();
        this.addToList = this.addToList.bind(this);
    }

    //will trigger the onAdd function that will add a persona to the selectedPersonas state array. This is an event handler that is triggered by onClick event listener
    addToList(person) {
        this.props.add(person)
    }

    //will remove the friend that was selected from the selected list



    render() {

        const { person, isRemoval } = this.props;


        return (
            <div>
                {!isRemoval ?
                    <Card.Group>
                        {/* personas && will prevent error anytime that the personas is undefined */}

                        <Card raised centered key={person.login.uuid} >
                            <Card.Content>
                                <Image floated='right' size={!isRemoval && 'medium'} avatar={isRemoval} src={person.picture.large} />
                                <Card.Header textAlign='left'>{person.name.first} {person.name.last} </Card.Header>
                                <Card.Description textAlign='left'>Hi, my name is {person.name.first} and I am from {person.nat}</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='green' onClick={() => this.addToList(person)}> Add to List </Button>
                                </div>
                            </Card.Content>
                        </Card>

                    </Card.Group>
                    :
                    <Card.Group>


                        <Card raised centered key={person.login.uuid} >
                            <Card.Content>
                                <Image floated='right' avatar={isRemoval} size={!isRemoval && 'medium'} src={person.picture.large} />
                                <Card.Header textAlign='left'>{person.name.first} {person.name.last} </Card.Header>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='red' /* onClick={ this.removeFromList } */> Remove from List </Button>
                                </div>
                            </Card.Content>
                        </Card>



                    </Card.Group>
                }


            </div>
        )
    }
}

