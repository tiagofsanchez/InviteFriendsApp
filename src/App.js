import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import FetchRandom from './util/FetchRandom'
import { UserSearchList } from './components/UserSearchList';
import { UserSelectedList } from './components/UserSelectedList';

import { Grid, Segment , Header, Container } from 'semantic-ui-react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      personas: [],
      personasSelected: [],
    }

    this.onAdd = this.onAdd.bind(this);

  }


  componentDidMount() {
    FetchRandom.users()
      .then(friends => this.setState({ personas: friends, loading: false }))
  };

  //will add your friend into the new list that the user will used to contact them after selecting
  onAdd(person) {
    let newPersonasSelected = this.state.personasSelected;
    if (this.state.personasSelected.find(friend => friend.login.uuid === person.login.uuid)) {
      return;
    } else {
      newPersonasSelected.push(person);
      this.setState({ personasSelected: newPersonasSelected });
    }
  };


  render() {

    const { personas, loading, personasSelected } = this.state;

    return (
      <div className="App">

        <Grid>
          <Grid.Column width={3}>
            <Segment.Group>
              <Segment>
                <Header as='h1' className="SearchBar" >
                  SearchBar
              </Header>
              </Segment>
              <Segment>
                SearchBar
              </Segment>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column width={9}>
            <Segment.Group raised>
            <Segment color='blue'>
              <Header as='h1' textAlign='center' color='blue'>
                Returning the list of friends you searched
              </Header>
            </Segment>
            <Segment>
              <div className="SearchList">
                {loading ?
                  <div >loading...</div>
                  :
                  <UserSearchList personas={personas} add={this.onAdd} />

                }
              </div>
            </Segment>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column width={4}>
           
            {loading ?
              <div >loading...</div>
              :
              <UserSearchList personas={personas} add={this.onAdd} />

            }
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
