import React, { Component, useState } from 'react';
import { Container, Table, Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { catchemall } from '../actions';
import ModalDialog from '../functions/modal';

class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {},
            ownedPokemon: []
        };
    }
    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokedex/national")
        .then(res => res.json())
        .then(parsedJSON => {
            this.setState({
                items: parsedJSON
            });
        })
        .catch(error => console.log('parsing failed', error))
    }
    gottaCatchEmAll(item,region) {
        const dispatch = useDispatch();
        dispatch(catchemall(item,region));
    }
    render() {
        const { items } = this.state;
        console.log(items.pokemon_entries);
        return (
            <Container className="p-3">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Entry Number</th>
                            <th>Name</th>
                            <th>Pokedex Region</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (items.pokemon_entries && items.pokemon_entries.length > 0) ? items.pokemon_entries.map(item => {
                                const {entry_number, pokemon_species} = item;
                                return (
                                    <tr>
                                        <td>{entry_number}</td>
                                        <td>{pokemon_species.name}</td>
                                        <td>national</td>
                                        <td><Button variant="primary" onClick={handleShow}>Gotta Catch Em'All!</Button></td>
                                    </tr>
                                )
                            }) : null
                        }
                    </tbody>
                </Table>
                <ModalDialog/>
            </Container>
        );
    }
}

export default Pokedex;
