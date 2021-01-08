//note this will be coming via a service in furtuer and will be mocked
//duing testing
const tabs = [
    {
        id: 'first-tab',
        linkText: 'Terminal1',
        title: 'My First Tab',
        text: 'this is the textural content for the first tab'
    },
    {
        id: 'second-tab',
        linkText: 'Terminal2',
        title: 'My Second Tab',
        text: `there is some text here for the second tab
        
        this is the second paragraph`
    }
]

const renderTab = (tab) => {
    const container = document.getElementById('container');
    //Temporarily here for test debugging purposes
    console.log('HTML:', document.body.innerHTML);
    const tabDiv = document.createElement('div', { class: 'tabcontent', id: tab.id });
    const title = document.createElement('h1', { id: `${tab.id}-heading`, class: 'tab-heading' });
    const text = document.createElement('p', { id: `${tab.id}-text`, class: 'tab-text' })

    title.innerText = tab.title;
    text.innerText = tab.text;

    tabDiv.appendChild(title);
    tabDiv.appendChild(text);

    container.appendChild(tabDiv);
}

renderTab(tabs[0]);
