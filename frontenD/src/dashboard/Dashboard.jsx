import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getSummary } from './dashboardAction';
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';

const Dashboard = () => {
    const dispatch = useDispatch();
    console.log('PPPPP');
    console.log(useSelector);
    // Access summary data from Redux store
    const { credit, debt } = useSelector(state => 
        state.dashboard.summary
            
        );

    // Fetch data on component mount
    useEffect(() => {
        dispatch(getSummary());
    }, [dispatch]);

    return (
        <div>
            <ContentHeader title="Dashboard" small="Versão 1.0" />
            <Content>
                <Row>
                    <ValueBox 
                        cols="12 4" 
                        color="green" 
                        icon="bank" 
                        value={`R$ ${credit}`} 
                        text="Total de Créditos" 
                    />
                    <ValueBox 
                        cols="12 4" 
                        color="red" 
                        icon="credit-card" 
                        value={`R$ ${debt}`} 
                        text="Total de Débitos" 
                    />
                    <ValueBox 
                        cols="12 4" 
                        color="blue" 
                        icon="money" 
                        value={`R$ ${credit - debt}`} 
                        text="Valor Consolidado" 
                    />
                </Row>
            </Content>
        </div>
    );
};

export default Dashboard;