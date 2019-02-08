import React from 'react'


class Square extends React.Component {
    
    constructor(props) {
        super(props);
        //konstruktor - promaže state
        this.state = {
          value: null,
        };
      }

    render() {
      return (
        // z props propíšu hodnotu buttonu (value) 
        // a funkci (poslanou v props) přiřadím metodě onClick
        <button
        className="square"
        onClick={() => this.props.onClicky()}
        >
        {this.props.value}
        </button>

      );
    }
  }

  export default Square;
