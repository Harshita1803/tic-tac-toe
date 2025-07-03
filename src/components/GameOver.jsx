import GameState from "./GameState";

function GameOver({ gameState }) {
    switch(gameState) {
        case GameState.inProgress:
          return <></>;
        case GameState.playerOWins:
            return <div classname='game-over'> O Wins</div>;
        case GameState.playerXWins:
            return <div classname='game-over'> X Wins</div>;
        case GameState.draw:
            return <div classname='game-over'> Draw </div>;
        default:
            return <></>;
    }   

}

export default GameOver;