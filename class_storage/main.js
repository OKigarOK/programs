class Storage {
    constructor(key = null, value = null, storage) {
        if (storage !== 'local') {
            storage = 'session'
        }
        this.key = key;
        this.value = value;
        this.storage = storage;
        storage === 'local'
            ? localStorage.setItem(key, value)
            : sessionStorage.setItem(key, value)
        }

    get() {
        return localStorage.getItem(this.key);
    }

    set(value) {
        this.value = value;
        localStorage.setItem(this.key, this.value);
    }

    clear() {
        this.value = null;
        localStorage.setItem(this.key, this.value);
    }

    isEmpty() {
        return this.value === null || this.value === undefined;
    }
}

// TEST
const userName = new Storage('name', 'John', 'local');
const userAge = new Storage('age', '20', 'local');
const usesNull = new Storage();
userName.set('Pete');
userName.get();
userAge.clear();
console.log(userAge);
console.log(userAge.isEmpty());
console.log(userName.isEmpty());
