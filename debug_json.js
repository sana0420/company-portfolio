const fs = require('fs');
const content = fs.readFileSync('c:/Users/sanaa/intern/src/package.json', 'utf8');
const lines = content.split('\n');
let inDependencies = false;
const foundKeys = new Map();

console.log('Scanning package.json for duplicates...');

lines.forEach((line, i) => {
    const lineNum = i + 1;
    if (line.includes('"dependencies": {')) {
        inDependencies = true;
        return;
    }
    if (inDependencies && line.trim() === '},') {
        inDependencies = false;
        return;
    }

    const match = line.match(/^\s*"([^"]+)":/);
    if (match) {
        const key = match[1];
        if (inDependencies) {
            if (foundKeys.has(key)) {
                console.log(`DUPLICATE FOUND: "${key}" at line ${lineNum}. Previous at line ${foundKeys.get(key)}`);
            } else {
                foundKeys.set(key, lineNum);
            }
        }
    }
    // Check specifically for the one suspected
    if (line.includes('embla-carousel-react')) {
        console.log(`TRACE: found embla-carousel-react at line ${lineNum}: ${line.trim()}`);
    }
});
