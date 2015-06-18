import {Game} from '../models/Game';
import {v,Component} from '../lib/V';

export class AbstractGamePage extends Component {
    game;
    onDataUpdate = ()=> {
        this.forceUpdate();
    };

    gameLoaded(){

    }

    propsUpdated() {
        this.game && this.game.unlisten(this.onDataUpdate);
        this.game = null;
        let id = this.props.params.id;
        Game.fetch(id).then(game=> {
            this.game = game;
            this.game.listen(this.onDataUpdate);
            this.gameLoaded();
            this.forceUpdate();
        });
    }

    componentWillUnMount() {
        this.game && this.game.unlisten(this.onDataUpdate);
    }
}