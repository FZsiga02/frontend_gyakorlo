import { Component } from "react";

interface State {
    email: string,
    message: string,
    output: string,
}

export default class Contact extends Component<{}, State> {

    constructor(props: {}) {
        super(props);

        this.state = {
            email: '',
            message: '',
            output: ''
        }
    }

    handleClick = async () => {
        const { email, message, output } = this.state;
        if (email.trim() == '' || message.trim() == ''){
            this.setState({ output: "Nincs kitöltve minden mező" })
        } else {
            this.setState({ output: "Köszönjük!" })
            this.setState({
                email: '',
                message: '',
            })
        }
        return false;
    }

    render() {
        const { email, message, output } = this.state;
        return <div>
                <input type="text" placeholder="Email" value={ email } onChange={e => this.setState({ email: e.currentTarget.value })} /><br />
                <textarea value={ message } onChange={e => this.setState({ message: e.currentTarget.value })}/> <br />
                <button onClick={this.handleClick}>Elküld</button>
                <p>{ output }</p>
        </div>
    }
}