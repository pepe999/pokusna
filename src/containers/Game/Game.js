import React from 'react'
import  { Board }  from '../../components/Board'


class Game extends React.Component {

    
    constructor(props) {
        super(props);

        // uložení historie stavů do state history
        // inicializace historie na null
        this.state = {
          history: [{
            squares: Array(9).fill(null),
          }],
          xIsNext: true,
        };
      }

    //existuje vítěz?  
    calculateWinner(squares) {
        
        //možné výherní kombinace   
        const lines = [
                  [0, 1, 2],
                  [3, 4, 5],
                  [6, 7, 8],
                  [0, 3, 6],
                  [1, 4, 7],
                  [2, 5, 8],
                  [0, 4, 8],
                  [2, 4, 6],
                ];
        
        //projdu všechny výherní kombinace
        for (let i = 0; i < lines.length; i++) {
        
            //načtu ID jedné výherní kombinace do "a,b,c"  
            const [a, b, c] = lines[i];
        
            //kontrola zda hodnota "a" není prázdná a je stejná jako "b" a je stejná jako "C" 
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        
        }
        //pokud neplatí ani jedna výherní kombinace
        return null;
    }

    handleClick(i) {

        const history = this.state.history; //nacteni historie stavů hry
        const current = history[history.length - 1]; //aktualni stav
        const squares = current.squares.slice(); //zkopíruji pole pomocí funkce slice (bez argumentů kopíruje celé pole)  
      
        //ignoruj pokud už někdo vyhrál nebo na toto místo klikl 
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
                
        // do pole napiš X pokud xIsNext jinak O
        squares[i] = this.state.xIsNext ? 'X' : 'O';


        // připojit do historie stavů nový stav
        this.setState({      
            history: history.concat([{
                squares: squares,
                }]), 
            xIsNext: !this.state.xIsNext,
        });
    }
      
    render() {

        const history = this.state.history;

        //aktualni stav
        const current = history[history.length - 1];

        //zjistit jestli už někdo nevyhrál
        const winner = this.calculateWinner(current.squares);

        //pokud někdo vyhrál - vypsat status vítěz.., pokud ne - ukázat kdo je další hráč 
        let status;
        if (winner) {
        status = 'Winner: ' + winner;
        } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

      return (
        <div className="game">
          <div className="game-board">
            <Board
                squares={current.squares}
                onClicky={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  export default Game;
