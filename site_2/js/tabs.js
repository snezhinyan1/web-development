var lastTab = document.getElementById('firstActiveTab')
var lastTabContent = document.getElementById(lastTab.getAttribute('data-tab-id'))

function clickTab(event){
    const target = event.target;
    const targetContent = document.getElementById(target.getAttribute('data-tab-id'))

    lastTabContent.classList.add('invisible') 
    targetContent.classList.remove('invisible')
    lastTabContent = targetContent

    lastTab.classList.remove('tab_active')
    target.classList.add('tab_active')
    lastTab = target
}