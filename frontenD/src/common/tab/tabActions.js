export function selecTab(tabId){
    console.log(tabId)
    return {
        type: 'TAB_SELECT',
        payload: tabId
    }
}


export function showTabs(...tabIds) {
    const tabsToShow = {};
    tabIds.forEach(element => tabsToShow[element] = true);

    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}