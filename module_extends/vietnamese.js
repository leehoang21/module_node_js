let vi = require('./vi.json');

class vietnamese {
    constructor(name) {
        this.name = name;
    }

    greeting() {
        console.log(this.name);
    }
}

module.exports = new vietnamese(vi.hello);