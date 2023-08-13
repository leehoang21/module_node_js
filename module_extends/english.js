let en = require('./en.json');

class english {
    constructor(name) {
        this.name = name;
    }

    greeting() {
        console.log(this.name);
    }
}

module.exports = new english(en.hello);