import { Component } from "react";
import profile from '../profile.png';

export default class Introduction extends Component {
    render() {
        return <div>
            <h1>Történet</h1>
            <p>A Petrik Webehely-gyárat 2011-ben alapították, hogy az egyre növekvő webes igényeket ki tudja elégíteni.</p>
            <h1>Jelenlegi tagjaink</h1>
            <img src={profile} alt="Fotó a főnökről" id="fonok"/>
            <ul>
                <li>Erdős Ildikó</li>
                <li>Jónás Viola</li>
                <li>Kató Anna</li>
                <li>Pintér Koppány</li>
                <li>Sas Gizi</li>
            </ul>
        </div>
    }
}