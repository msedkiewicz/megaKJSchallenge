class User {
    #hash = '';
    constructor(name) {
        this.name = name;
        this.#hash = (Math.random() * 100000000 + 100000000).toString();
    }

    set  hash(newHash) {
        if(newHash.length < 4) return;
        this.#hash = newHash;
    }

    get hash() {
       const random = Math.random();

       if(random > 0.5) return 'Mam zły humor, nic nie dostaniesz.';

        return this.#getHash();
    }

    #getHash() {
        return this.#hash;
    }
}

const user = new User('Marcin');

user.hash = 'Nowa nadzieja';
console.log(user.hash);
user.hash = 'Nowa nadzieja 2';
console.log(user.hash);
// console.log(user.#hash); // Private field '#hash' must be declared in an enclosing class
user.hash = 'Nowa nadzieja 3 i 3/4';
console.log(user.hash);
// console.log(user.#getHash); // Private field '#getHash' must be declared in an enclosing class