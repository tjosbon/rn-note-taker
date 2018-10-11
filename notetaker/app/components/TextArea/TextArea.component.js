import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './TextArea.component.style';

class TextArea extends Component {
  state = {
    text : 'hello from non-os specific file'
  }
  render() {
    const {...extraProps} = this.props;
    return (
      <TextInput
        {...extraProps}
        style={[styles.textArea, extraProps.style]}
        multiline = {true}
        onChangeText={this._onChangeText}
        value={this.state.text}
      />
    );
  }
  _onChangeText = ( text ) => {
    this.setState( { text } );
  }
}

export default TextArea;