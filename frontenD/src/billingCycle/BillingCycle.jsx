import React, { useEffect } from "react";

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import Tabs from "../common/tab/tabs";
import TabsContent from "../common/tab/TabsContent";
import TabsHeader from "../common/tab/TabsHeader";
import TabHeader from "../common/tab/TabHeader";
import TabContent from "../common/tab/TabContent";
import { selecTab, showTabs } from "../common/tab/tabActions";
import { useDispatch } from "react-redux";
import BillingCycleList from "./BillingCycleList";
import BiilingCycleForm from "./BillingCycleForm";
import { create } from "./billingCycleAction";

const BillingCycle = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(selecTab('tabList'))
        dispatch( showTabs('tabList', 'tabCreate'))
    }, [])

    return (
        <div>
            <ContentHeader title="Dashboard" small="Versão 1.0" />
            <Content>
               <Tabs>
                    <TabsHeader>
                        <TabHeader label='Listar' icon='bars' target='tabList' />
                        <TabHeader label='Adicionar' icon='plus' target='tabCreate' />
                        <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                        <TabHeader label='Eliminar' icon='trash-o' target='tabDelete' />
                    </TabsHeader>
                    <TabsContent>
                        <TabContent id='tabList'>
                            <BillingCycleList />
                        </TabContent>
                        <TabContent id='tabCreate'>
                            <BiilingCycleForm onSubmit={(data) => dispatch(create(data))}/>
                        </TabContent>
                        <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
                        <TabContent id='tabDelete'><h1>Eliminar</h1></TabContent>
                    </TabsContent>
                </Tabs>
            </Content>
        </div>
    );
};

export default BillingCycle;