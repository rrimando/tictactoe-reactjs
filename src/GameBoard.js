import React from 'react';

// Component Imports
import Square from './Square';


export class GameBoard extends React.Component {

    constructor() {
        super();
        this.state = {
            currentPlayer: 1 
        }
    }

    handleSquareClick = () => {
        this.setState({
            currentPlayer: (this.state.currentPlayer === 2) ? 1 : 2
        })
    }

    render() {

        // TODO: Do in forloop or something simpler

        return (
            <div className="GameBoard">
                <hr/>
                <h2>Player {this.state.currentPlayer}</h2>
                <hr/>
                <div className="container">
                    <div className="row">
                        <Square player={this.state.currentPlayer} handler={this.handleSquareClick}/>
                        <Square player={this.state.currentPlayer} handler={this.handleSquareClick}/>
                        <Square player={this.state.currentPlayer} handler={this.handleSquareClick}/>
                    </div>
                    <div className="row">
                        <Square player={this.state.currentPlayer} handler={this.handleSquareClick}/>
                        <Square player={this.state.currentPlayer} handler={this.handleSquareClick}/>
                        <Square player={this.state.currentPlayer} handler={this.handleSquareClick}/>
                    </div>
                    <div className="row">
                        <Square player={this.state.currentPlayer} handler={this.handleSquareClick}/>
                        <Square player={this.state.currentPlayer} handler={this.handleSquareClick}/>
                        <Square player={this.state.currentPlayer} handler={this.handleSquareClick}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default GameBoard;