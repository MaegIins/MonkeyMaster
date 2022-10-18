class Media {
    constructor(title, release, cover) {
        this._title = title;


        if (cover === "") {
            this._cover = 'style/icon/nopic.svg';
        }
        if (cover.substring(cover.length - 4) === ".jpg" || cover.substring(cover.length - 4) === ".png" || cover.substring(cover.length - 4) === ".svg" || cover.substring(cover.length - 4) === ".gif" || cover.substring(cover.length - 4) === ".bmp" || cover.substring(cover.length - 4) === "webp") {
            this._cover = cover;
        } else {
            this._cover = 'style/icon/nopic.svg';
        }
        this._release = release;
    }

    get title() {
        return this._title;
    }

    get cover() {
        return this._cover;
    }

    get release() {
        return this._release;
    }

}


export {Media};