class Media {
    constructor(title, release,  cover) {
        this._title = title;
        if(cover === "") {
        this._cover = 'style/css/icon/img.png';
        }
        else{
            this._cover = cover;
        }
        this._cover = cover;
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