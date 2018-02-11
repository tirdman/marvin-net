import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const MyAwesomeReactComponent = () => (
  <RaisedButton onClick={ doit } label="Default" />
);

function doit(){
  alert("Hello World!")
}

export default MyAwesomeReactComponent;
