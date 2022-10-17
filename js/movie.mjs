import {Media} from "./media.mjs";

class Movie extends Media {
    constructor(title, director, releaseYear, cover) {
        super(title, releaseYear, cover);
        this._director = director;
    }

    get director() {
        return this._director;
    }



    get html(){
        return `<div class="card">
                <img class="card-image" draggable="false" src="${this.cover}" alt="album">
                    <div class="card-content">
                        <h4><span class="icon icon-music"></span> ${this.title}</h4>
                        <small>Released ${this.release}</small>
                        <p>${this._director}</p>
                    </div>
                    <div class="actions">
                        <button class="action-edit">Edit</button>
                        <button class="action-remove">Remove</button>
                    </div>
            </div>`;
    }
}

export {Movie};