import React, {Component} from 'react';

class Project03 extends Component {
    render(){
        return (
            <div>
                <p><strong>Ime:</strong> {this.props.ime}</p>
                <p><strong>Prezime:</strong> {this.props.prezime}</p>
                <p><strong>Godina rodjenja:</strong> {this.props.godina_rodjenja}</p>
                <p><strong>Zanimanje:</strong> {this.props.zanimanje}</p>
            </div>
        );
    }
}

export default Project03;