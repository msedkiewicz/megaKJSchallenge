class User {
    _hash = '';
    constructor(name) {
        this.name = name;
        this.hash = (Math.random() * 100000000 + 100000000).toString();
    }

    set  hash(newHash) {
        if(newHash.length < 4) return;
        this._hash = newHash;
    }

    get hash() {
        return this._hash;
    }
}

const user = new User('Marcin');
// console.log(user.hash('askksks')); - hash is not a fuction :P

user.hash = 'Nowa nadzieja';
console.log(user.hash);
user.hash = 'Nowa nadzieja 2';
console.log(user.hash);