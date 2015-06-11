import React from 'react';
export default class LineUp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="line-up">
                <thead>
                <th className="player-name">Player</th>
                <th className="right">Points</th>
                </thead>
                <tbody>
                {this.props.players.map((player:Player) =>
                    <tr>
                        <td>{player.name}</td>
                        <td className="right">{player.points || '-'}</td>
                    </tr>)}
                </tbody>
            </table>
        );
    }
} 