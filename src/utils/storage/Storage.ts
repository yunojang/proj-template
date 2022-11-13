export class Storage {
    constructor(public key: string) {
        this.key = key;
    }

    static existStorage(key: string) {
        const result = localStorage.getItem(key);

        return !!result;
    }

    get item() {
        const data = localStorage.getItem(this.key);

        if (!data) {
            throw new Error(`storage is unset - key: ${this.key}`);
        }

        return JSON.parse(data);
    }

    set item(data: any) {
        localStorage.setItem(this.key, JSON.stringify(data));
    }

    clear() {
        localStorage.removeItem(this.key);
    }
}

// export class ArrayStorage extends Storage {}
