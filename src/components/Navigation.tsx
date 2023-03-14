import { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
    
    render() {
        return <nav>
                    <Link to='/'>Főoldal</Link>
                    <Link to='/bemutatkozas'>Bemutatkozás</Link>
                    <Link to='/kapcsolat'>Kapcsolat</Link>
                </nav>
    }
}
