class Media {
    constructor(title, release, cover, desc ="") {
        this._title = title;
        this._description = desc;

        if (cover === "") {
            this._cover = 'style/icon/nopic.svg';
        }

        if (cover.substring(cover.length - 4) === ".jpg" || cover.substring(cover.length - 4) === ".png" || cover.substring(cover.length - 4) === ".svg" || cover.substring(cover.length - 4) === ".gif" || cover.substring(cover.length - 4) === "_api") {
            this._cover = cover;
        } else {
            this._cover = 'style/icon/nopic.svg';
        }
        if(title.toLowerCase() === "monkey")
        {
            this._cover = 'https://media.tenor.com/7hd53a2Fg30AAAAC/monkey-dancing.gif';
        }
        if(title.toLowerCase() === "fish"){
            this._cover = 'https://media.tenor.com/vKFRkomSlS4AAAAC/puffer-fish.gif';
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
    get description() {
        return this._description;
    }

}


export {Media};