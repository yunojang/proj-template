export class Storage {
    constructor(public key: string) {
        this.key = key;

        if (!Storage.existStorage(key)) {
            this.item = "";
        }
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
}

// export class ArrayStorage extends Storage {}
