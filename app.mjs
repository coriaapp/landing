// import scrape from 'website-scraper'; // only as ESM, no CommonJS
// // const scrape = require('website-scraper'); // CommonJS only
// const options = {
//   urls: ['https://adored-words-668969.framer.app'],
//   directory: './coria'
// };

// // with async/await
// // const result = await scrape(options);

// // with promise
// scrape(options).then((result) => {});


import scrape from 'website-scraper';
import PuppeteerPlugin from 'website-scraper-puppeteer';

await scrape({
    urls: ['https://adored-words-668969.framer.app'],
    directory: './coria',
    plugins: [
        new PuppeteerPlugin({
            launchOptions: { headless: false }, /* optional */
            scrollToBottom: { timeout: 10000, viewportN: 10 }, /* optional */
            blockNavigation: false, /* optional */
            isMobile: false, /* optional */
            // Add width and height for the browser viewport
            viewport: {
                width: 2560, // Add your desired width here
                height: 1600, // Add your desired height here
            },
        }),
    ],
});
