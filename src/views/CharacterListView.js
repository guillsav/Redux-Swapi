import React from 'react';
import {connect} from 'react-redux';

import {CharacterList} from '../components';
// import actions
import {getChars} from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getChars();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <h1>Loading...</h1>;
    }
    return (
      <React.Fragment>
        {this.props.error && <div>{this.props.error}</div>}
        {this.props.characters && (
          <div className="CharactersList_wrapper">
            <CharacterList characters={this.props.characters} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.isFetching,
    error: state.charsReducer.error
  };
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    getChars
  }
)(CharacterListView);
