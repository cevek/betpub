import {v,Component} from '../../lib/V';

export class RadioButtons extends Component {

    click(item) {
        this.props.onChange(item);
    }

    render() {
        return this.root(
            this.props.empty ?
                v('button', {
                    type: 'button',
                    classes: {active: null == this.props.active},
                    onclick: ()=>this.click(null)
                }, this.props.empty) : null,
            this.props.items.map(item =>
                v('button', {
                    type: 'button',
                    classes: {active: item == this.props.active},
                    onclick: ()=>this.click(item)
                }, this.props.label(item)))
        );
    }
}

