import React from "react";
import Grid from "../common/layout/Grid";
import Input from "../common/form/Input";
import { Field } from "redux-form";


const CreditList = (props) => {

    function renderRows(){
        const list = props.list || []
        console.log(list)
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`credits[${index}].name`} component={Input} placeholder="Informe o nome" readOnly={props.readOnly}/></td>
                <td><Field name={`credits[${index}].value`} component={Input} placeholder="Informe o valor" readOnly={props.readOnly}/></td> 
                <td></td>
            </tr>
        ))

    }

    return (
        <Grid cols={props.cols}>
            <fieldset>
                <legend>Créditos</legend>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </fieldset>
        </Grid>
    )
}

export default CreditList