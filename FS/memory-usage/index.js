const os = require('os');

const toMb = memory => Math.round((memory / 1024 / 1024) * 100) / 100;

const displayMemoryStats = () => console.log(`
    ${toMb(os.freemem())} of ${toMb(os.totalmem)} Mb Free
`)

setInterval(displayMemoryStats, 100);