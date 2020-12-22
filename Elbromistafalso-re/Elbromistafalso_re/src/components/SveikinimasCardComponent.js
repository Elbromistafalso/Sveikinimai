import React from 'react'
import Proptypes from 'prop-types';
import "bootstrap/dist/js/bootstrap.bundle.min";

let SveikinimasCardComponent = (props) => {
    return(
        <div className="card">
            <img src={props.paveiksliukas} alt = "" style={{width:"250px", height:"200px"}}/>
            <div className="card-body">
                <p>Sveikintojas: {props.vardas} &nbsp {props.pavarde}</p>
                <p>Sveikinimas: {props.tekstas}</p>
            </div>
        </div>
    )
}

SveikinimasCardComponent.propTypes = {
     
    tekstas: Proptypes.string.isRequired,
    paveiksliukas: Proptypes.string.isRequired,
    vardas: Proptypes.string.isRequired,
    pavarde: Proptypes.string.isRequired,
 };

export default SveikinimasCardComponent