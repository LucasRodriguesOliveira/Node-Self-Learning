const startUsage = process.cpuUsage();
console.log(startUsage);

const now = Date.now();
while (Date.now() - now < 500);

console.log(process.cpuUsage(startUsage));