class User {
    hash = '';
    constructor(name) {
        this.name = name;
        this.hash = (Math.random() * 100000000 + 100000000).toString();
    }

    setNewHash(newHash) {
        if(newHash.length < 4) return;
        this.hash = newHash;
    }

    getHash() {
        return this.hash;
    }
}

const user = new User('Marcin');
console.log(user);
user.setNewHash('asdq');
console.log(user);
user.getHash();
console.log(user);
user.setNewHash('34qrfw43efd');
user.getHash();
console.log(user);