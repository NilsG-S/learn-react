import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  List,
  Button,
} from 'semantic-ui-react';

import {
  deleteTodo,
  toggleTodo,
} from 'redux/actions.js';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.check = this.check.bind(this);
    this.delete = this.delete.bind(this);
  }

  check() {
    this.props.dispatch(toggleTodo(this.props.id));
  }

  delete() {
    this.props.dispatch(deleteTodo(this.props.id));
  }

  render() {
    return (
      <List.Item>
        <List.Content floated='right'>
          <Button
            icon='delete'
            onClick={this.delete}
          />
        </List.Content>
        <List.Content>
          <Button
            icon={this.props.checked === true ? 'check circle outline' : 'radio'}
            onClick={this.check}
          />
          {this.props.text}
        </List.Content>
      </List.Item>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Todo);
