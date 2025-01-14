import React from "react";

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import Tabs from "../common/tab/tabs";
import TabsContent from "../common/tab/TabsContent";
import TabsHeader from "../common/tab/TabsHeader";
import TabHeader from "../common/tab/TabHeader";

const BillingCycle = () => {
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

                    </TabsContent>
                </Tabs>
            </Content>
        </div>
    );
};

export default BillingCycle;