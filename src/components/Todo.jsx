import React from 'react';
import PropTypes from 'prop-types';

import {
  List,
  Button,
} from 'semantic-ui-react';

function Todo(props) {
  return (
    <List.Item>
      <List.Content floated='right'>
        <Button icon='delete' />
      </List.Content>
      <List.Content>
        <Button icon='check' />
        {props.text}
      </List.Content>
    </List.Item>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Todo;
