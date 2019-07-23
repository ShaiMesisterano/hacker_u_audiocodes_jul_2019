const rp = require('request-promise');
const { JSDOM } = require('jsdom');

class Scraper {
    constructor(url) {
        this.url = url
    }

    scrape({ selector, wrapper: {before, after} }) {
        const handler = (resolve, reject) => {
            rp(this.url).then(body => {
                try{
                    const dom = new JSDOM(body);
                    resolve(`
                    ${before}
                    ${dom.window.document.querySelector(selector).outerHTML}
                    ${after}
                    `)
                }
                catch(ex) {
                    reject(ex);
                }
            });
        }
        return new Promise(handler);
    }
}

module.exports = Scraper;