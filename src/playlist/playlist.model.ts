export class Playlist {
  constructor(
    public id: string,
    public name: string,
    public creator: string,
    public playtime: string,
    public tracklist: string[],
  ) {}
}
