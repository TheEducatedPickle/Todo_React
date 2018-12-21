import React from 'react';
import InputField from './InputField';
import InputDeleteButton from './InputDeleteButton';
import ListItem from '@material-ui/core/ListItem';

class InputElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.index,
            text: "",
        }
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(event) {
        this.setState(state => ({
            text: event.target.value
        }));
        console.log(this.state.text);
    }

    render() {
        return (
            <ListItem disableGutters>
                <InputField onChange={this.handleTextChange}/>
                <InputDeleteButton />
            </ListItem>
        );
    }
}

export default InputElement;