import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Menu,
  Container,
  Input,
  Button,
} from 'semantic-ui-react';

import { addTodo } from 'redux/actions.js';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    };

    this.textChange = this.textChange.bind(this);
    this.add = this.add.bind(this);
  }

  textChange(event, data) {
    this.setState({
      [data.name]: data.value,
    });
  }

  add() {
    this.props.dispatch(addTodo(this.state.todo));
  }

  render() {
    return (
      <div>
        <Menu>
          <Container>
            <Menu.Item
              header
              active={false}
            >
              To Dos
            </Menu.Item>
            <Menu.Item>
              <Input
                name='todo'
                placeholder='What needs to be done?'
                value={this.state.todo}
                onChange={this.textChange}
              />
            </Menu.Item>
            <Menu.Item position='right'>
              <Button
                onClick={this.add}
              >
                Add
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Header);
