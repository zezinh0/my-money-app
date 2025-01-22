import React from "react";

import Grid from "../common/layout/Grid";
import Row from '../common/layout/Row';
import ValueBox from "../common/widget/valueBox";

export default ({ credit, debt }) => {
    return (
        <Grid cols='12'>
            <fieldset>
                <legend>Resumo</legend>
                <Row>
                    <ValueBox cols='12 4' color='green' icon='bank' value={`$ ${credit}`} text='Total de Créditos' />
                    <ValueBox cols='12 4' color='red' icon='credit-card' value={`$ ${debt}`} text='Total de Débitos' />
                    <ValueBox cols='12 4' color='blue' icon='money' value={`$ ${credit - debt}`} text='Valor Consolidado' />
                </Row>
            </fieldset>
        </Grid>
    )

}