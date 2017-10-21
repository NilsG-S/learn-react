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
        {props.todo.map(todo => (
          <List.Item
            key={todo.id}
          >
            <List.Content floated='right'>
              <Button icon='delete' />
            </List.Content>
            <List.Content>
              <Button icon='check' />
              {todo.text}
            </List.Content>
          </List.Item>))}
      </List>
    </Container>
  );
}

Todos.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

function mapStateToProps(state) {
  return {
    todo: state.todo,
  };
}

export default connect(mapStateToProps)(Todos);
