import React from 'react';
import {
  Header as Heading,
  Input,
} from 'semantic-ui-react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
    };

    this.textChange = this.textChange.bind(this);
  }

  textChange(event, data) {
    this.setState({
      [data.name]: data.value,
    });
  }

  render() {
    return (
      <div >
        <Heading as='h1'>todos</Heading>
        <Input
          name='todo'
          placeholder='What needs to be done?'
          value={this.state.todo}
          onChange={this.textChange}
        />
      </div>
    );
  }
}

export default Header;
