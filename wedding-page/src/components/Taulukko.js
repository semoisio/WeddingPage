import 'bootstrap/dist/css/bootstrap.min.css';
import { Table} from 'react-bootstrap';
import React, { useState, useContext } from 'react';




function Taulukko(props) {

    return (
        <Table  striped bordered hover variant="light" >
                <thead>
                   {props.otsikko}
                </thead>
                <tbody>
                    {props.sisalto}
                </tbody>
        </Table>
    );
}

export default Taulukko;