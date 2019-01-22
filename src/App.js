import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import FetchRandom from './util/FetchRandom'
import { UserSearchList } from './components/UserSearchList';
import { UserSelectedList } from './components/UserSelectedList';

import { Grid, Segment , Header } from 'semantic-ui-react';


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

  //will add your friend into the new list that the user will used to contact them after selecting (nao estou a fazer 1 copia)
  onAdd(person) {
    const { personasSelected } = this.state
    if (personasSelected.find(friend => friend.login.uuid === person.login.uuid)) {
      
    } else {
      this.setState({ personasSelected: [...personasSelected, person] })
      
    }
  };

  //onRemove (array.prototype.reduce)


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
              <Header as='h1' color='blue'>
                Returning the list of friends you searched for
              </Header>
            </Segment>
            <Segment>
              <div className="SearchList">
                {loading ?
                  <div >loading...</div>
                  :
                  <UserSearchList personas={personas} add={this.onAdd} isRemoval={false}/>
                  /* Mudar para UserLis */
                }
              </div>
            </Segment>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment.Group>
              <Segment color='blue'>
                <Header as='h1' color='blue'>
                  the list
              </Header>
              </Segment>
              <Segment>
              <UserSelectedList personasSelected={personasSelected} isRemoval={true} />
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
