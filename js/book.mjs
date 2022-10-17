import {Media} from "./media.mjs";

class Book extends Media {
    constructor(title, author, releaseYear, cover) {
        super(title, releaseYear, cover);
        this._author = author;

    }

    get author() {
        return this._author;
    }

     html(){
        let obj = document.createElement("div");
        obj.classList.add("card");

        obj.innerHTML= `
                <img class="card-image" draggable="false" src="${this.cover}" alt="album">
                    <div class="card-content">
                        <h4><span class="icon icon-music"></span> ${this.title}</h4>
                        <small>Released ${this.release}</small>
                        <p>${this._author}</p>
                    </div>
                    <div class="actions">
                        <button class="action-edit">Edit</button>
                        <button class="action-remove">Remove</button>
                    </div>`;
        return obj;
    }
}

export {Book};