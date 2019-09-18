
export class SearchItemModel {

    public name: string;
    public artist: string;
    public link: string;
    public thumbnail: string;
    public artistId: string;

    constructor(name: string,
        artist: string,
        link: string,
        thumbnail: string,
        artistId: string) {

        this.name = name;
        this.artist = artist
        this.link = link;
        this.thumbnail = thumbnail;
        this.artistId = artistId;

    }

}