import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class InputTextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multiline: 'Controlled',
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <TextField
        id="standard-textarea"
        label="text"
        value={this.props.text}
        multiline
        className={classes.textField}
        margin="normal"
        onChange={(e) => this.props.onChange(e)}
      />
    );
  }
}

InputTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputTextField);
