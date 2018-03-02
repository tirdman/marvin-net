import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { setConfigurishIP } from 'actions/configurish';

class InputIp extends React.Component {
  constructor(props) {
    super(props);

    console.log(props, "!!!");

    this.state = {
      name: this.props.ip,
      err: false,
      successValidation: false,
    };
  }

  handleChange = name => event => {
    this.setState({
      name: event.target.value,
      err: false,
      successValidation: false
    });
  };

  isValid = () => {
    const { name } = this.state;
    return name != 'bad';
  };

  handleOnKeyPressEnter = e => {
    if (e.key === 'Enter') {
      this.submitIp();
    }
  };

  submitIp = () => {
    const { dispatch } = this.props;
    if (this.isValid()) {
      this.setState({ successValidation: true, err: false });
      dispatch(setConfigurishIP(this.state.name));
    } else {
      this.setState({ err: true });
    }
  };

  render = () => {
    const { value, err, successValidation } = this.state;
    const { ip, dispatch } = this.props;

    return (
      <div>
        <span style={{ margin: 10 }}>
          <TextField
            error={err}
            id="with-placeholder"
            label="IP"
            placeholder="IP"
            defaultValue={ip}
            onChange={this.handleChange('name')}
            onKeyPress={this.handleOnKeyPressEnter}
          />
        </span>
        <span style={{ margin: 10 }}>
          <Button variant="raised" color="primary" onClick={this.submitIp}>
            Ok
          </Button>
        </span>
        <span style={{ margin: 10 }}>
          <TextField
          value={ip}
          />

        </span>
      </div>
    );
  };
}

export default InputIp;
