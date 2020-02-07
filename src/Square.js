import React from 'react';


export class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleClick = () => {
        // pass e for preventdefault
        console.log(this.props.player);
        this.setState({
            value: (this.props.player === 1) ? 'X' : 'O'
        })

        return this.props.handler()
    }

    render() {

        return (
            <div className="Square" onClick={this.handleClick}>{this.state.value}</div>
        )
    }

}

export default Square;