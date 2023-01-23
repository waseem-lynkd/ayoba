import { Injectable } from '@nestjs/common';
import deletePlaylist from './deletePlaylist';
import getPlaylist from './getPlaylist';
import getPlaylists from './getPlaylists';
import { Playlist } from './playlist.model';
import putPlaylist from './putPlaylist';

@Injectable()
export class PlaylistService {
  constructor() {}

  async createPlaylist(
    name: string,
    creator: string,
    playtime: string,
    tracklist: string[],
  ) {
    const id = '987';
    const newPlaylist = new Playlist(id, name, creator, playtime, tracklist);
    putPlaylist(newPlaylist);
    return id;
  }

  async updatePlaylist(
    name: string,
    creator: string,
    playtime: string,
    tracklist: string[],
  ) {
    const id = '987';
    const newPlaylist = new Playlist(id, name, creator, playtime, tracklist);
    putPlaylist(newPlaylist);
    return id;
  }

  getPlaylists() {
    return getPlaylists();
  }

  getPlaylist(id: string) {
    return getPlaylist(id);
  }

  deletePlaylist(id: string) {
    return deletePlaylist(id);
  }
}
