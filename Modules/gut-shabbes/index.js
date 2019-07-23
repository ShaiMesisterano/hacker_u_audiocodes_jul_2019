#!/usr/bin/env node 
const Mail = require('./Mail');
const Scraper = require('./Scraper');

const sendMail = (email, password, body) => {
    const mail = new Mail(
        'debugmail.io',
        25,
        email,
        password,
        'abc@domain.com',
        'מועדי כניסת השבת',
        ''
    )

    mail.send(body);
}

const getMailDetails = () => {
    // console.log(process.argv);
    const [ , , email, password] = process.argv;
    console.log(email, password);

    const throwError = arg => {
        throw Error(`Please pass ${arg} as an argument to the node process`);
    }

    if (!email) throwError('email');
    if (!password) throwError('password');

    return {
        email,
        password
    }
}

const getMailBody = async () => {
    const scrapeUrl = "http://www.dirshu.co.il/%D7%96%D7%9E%D7%A0%D7%99-%D7%94%D7%A9%D7%91%D7%AA/";
    const scrapeElement = {
        selector: '.row-hover',
        wrapper: {
            before: '<html><body><table>',
            after: '</table></body></html>'
        }
    }
    const scraper= new Scraper(scrapeUrl);
    return scraper.scrape(scrapeElement);
}

const init = (async () => {
    const { email, password } = getMailDetails();
    // getMailBody(sendMail(email, password));
    
    // getMailBody()
    // .then( body => sendMail(email, password, body) )
    // .catch(ex => console.error(ex));
    try{
        const body = await getMailBody();
        sendMail(email, password, body);
    }
    catch(ex){
        console.error(ex);
    }
})();