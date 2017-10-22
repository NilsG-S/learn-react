import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Container,
  List,
  Button,
} from 'semantic-ui-react';

// TODO(NilsG-S): Separate list item out into separate component w/ functionality
function Todos(props) {
  return (
    <Container text textAlign='left' style={{ marginTop: '1em' }}>
      <List divided verticalAlign='middle'>
        {[...props.todo.entries()].map(todo => (
          <List.Item
            key={todo[0]}
          >
            <List.Content floated='right'>
              <Button icon='delete' />
            </List.Content>
            <List.Content>
              <Button icon='check' />
              {todo[1].text}
            </List.Content>
          </List.Item>))}
      </List>
    </Container>
  );
}

Todos.propTypes = {
  todo: PropTypes.shape({
    entries: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    todo: state.get('todo'),
  };
}

export default connect(mapStateToProps)(Todos);
