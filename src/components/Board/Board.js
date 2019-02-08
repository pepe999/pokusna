import React from 'react'
import  { Square }  from '../Square'


class Board extends React.Component {


    //   handleClick(i) {

    //     //zkopíruji pole pomocí funkce slice (bez argumentů kopíruje celé pole)  
    //     //kopíruji do konstanty ze state
    //     const squares = this.state.squares.slice();

    //     //ignoruj pokud už někdo vyhrál nebo na toto místo klikl 
    //     if (this.calculateWinner(squares) || squares[i]) {
    //         return;
    //       }
        
    //     // do pole napiš X pokud xIsNext jinak O
    //     squares[i] = this.state.xIsNext ? 'X' : 'O';
        
    //     //nastav state - uprav pole (squares) a změn xIsnext na opak
    //     this.setState({squares: squares, xIsNext: !this.state.xIsNext,
    //     });
    //   }

    //vyrenderování konkrétního pole
    renderSquare(i) {
      
        // předání hodnoty (value) a funkce (onClicky) pomocí props do square ze state BOARD  
    //   return <Square
    //     value={this.state.squares[i]}
    //     onClicky={() => this.handleClick(i)}
    //   />

      //předání hodnoty (value) a funkce (onClicky) pomocí props do Square z props Board 
      return <Square
        value={this.props.squares[i]}
        onClicky={() => this.props.onClicky(i)}
        />
    }

    //vyrenderování Board
    render() {
        //zjistit jestli už někdo nevyhrál
        // const winner = this.calculateWinner(this.state.squares);

        //pokud někdo vyhrál - vypsat status vítěz.., pokud ne - ukázat kdo je další hráč 
        // let status;
        // if (winner) {
        //     status = 'Winner: ' + winner;
        // } else {
        //     status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        // }
    
        return (
            // vykreslení celého boardu 
          <div>
            {/* <div className="status">{status}</div> */}
            <div className="board-row">

               {/* vykreslení jednotlivých položek pole  */}
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}      
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );
      }
}

export default Board;
