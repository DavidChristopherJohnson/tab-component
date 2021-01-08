const tabs = require('../tabs');


describe('Checking testing works', () => {
    it('should render tab with specified data', () => {
        //For some reason the document is not currently getting
        //populated with the HTML. This needs to be investigated further
        document.body.innerHTML = `<div id='container'></div>`;

        const tabData = {
            id: 'test-tab',
            linkText: 'TestLink',
            title: 'My Test Tab',
            text: 'This is a tab with test text'
        };

        tabs.renderTab(tabData);

        const tab = document.getElementById('test-tab');
        const title = tab.getElementById('test-tab-heading');
        const text = tab.getElementById('test-tab-text');

        expect(tab).not.toBeNull();
        expect(title).not.toBeNull();
        expect(text).not.toBeNull();
    })
})