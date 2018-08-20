import React from 'react';
import ReactDOM from 'react-dom';
import { GameBoard, RowItem, SingleBox, Header, NextTurn } from './style';


class Square extends React.Component {
  render () {
    return (
      <SingleBox className="SingleBox" onClick={() => this.props.onClick()} >
        {this.props.value}
      </SingleBox>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      status: null,
      checkArrayIsFilled: false,
    };

    this.replay = this.replay.bind(this);
  }

  calculateWinner(square) {

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (var i = 0; i < lines.length; i++) {
      var [a,b,c] = lines[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
  }

  calculateNext(winnerStatus) {
    if (!winnerStatus) {
      return (
        <Header className="h3"> Next Move :  {this.state.xIsNext ? 'X' : '0'} </Header>
      )
    }
  }

  replay() {
    this.setState((prevState) => (
     {
        squares: prevState.squares.fill(null),
        xIsNext: true,
        status: null,
        checkArrayIsFilled: false,
      })
    )

  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (!squares[i] && !this.state.status) {
      squares[i] = this.state.xIsNext ? 'X' : '0';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
        checkArrayIsFilled: squares.every( n => n ),
        status: this.calculateWinner(squares) ? this.calculateWinner(squares) + ' win' : null});
    }
  }



  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render () {
    const { status, checkArrayIsFilled } = this.state;
    return (
      <div>
        <Header> Tic-Tac-Toe Game </Header>
        <NextTurn>
          <Header> {status} </Header>
          { !checkArrayIsFilled && this.calculateNext(status)}
          { (checkArrayIsFilled || status) && ( <div> <p>Game Over! </p>
            <button onClick={this.replay}>Replay</button></div>)}
        </NextTurn>

        <GameBoard>
        <RowItem>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </RowItem>
        <RowItem>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </RowItem>
        <RowItem>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </RowItem>
        </GameBoard>
      </div>
    );
  }
}


class Game extends React.Component {
  render () {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

ReactDOM.render(
  <Game/>,
  document.getElementById('root')
);
