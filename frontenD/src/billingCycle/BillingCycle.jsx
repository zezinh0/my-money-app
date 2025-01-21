import React, { useEffect } from "react";

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import Tabs from "../common/tab/tabs";
import TabsContent from "../common/tab/TabsContent";
import TabsHeader from "../common/tab/TabsHeader";
import TabHeader from "../common/tab/TabHeader";
import TabContent from "../common/tab/TabContent";
import { useDispatch } from "react-redux";
import BillingCycleList from "./BillingCycleList";
import BiilingCycleForm from "./BillingCycleForm";
import { create, update, remove, init } from "./billingCycleAction";

const BillingCycle = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(init())
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
                            <BiilingCycleForm onSubmit={(data) => dispatch(create(data))} submitLabel='Adicionar' submitClass='primary'/>
                        </TabContent>
                        <TabContent id='tabUpdate'>
                            <BiilingCycleForm onSubmit={(data) => dispatch(update(data))} submitLabel='Alterar' submitClass='info'/>
                        </TabContent>
                        <TabContent id='tabDelete'>
                            <BiilingCycleForm onSubmit={(data) => dispatch(remove(data))} readOnly={true} submitLabel='Eliminar' submitClass='danger'/>
                        </TabContent>
                    </TabsContent>
                </Tabs>
            </Content>
        </div>
    );
};

export default BillingCycle;