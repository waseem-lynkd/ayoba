import { PutCommand, PutCommandInput } from '@aws-sdk/lib-dynamodb';
import client from '../db/client';
import { Playlist } from './playlist.model';

const putPlaylist = (playlist: Playlist) => {
  const putPlaylistParams: PutCommandInput = {
    TableName: 'Playlists',
    Item: {
      id: playlist.id,
      name: playlist.name,
      creator: playlist.creator,
      playtime: playlist.playtime,
      tracklist: playlist.tracklist,
    },
  };

  const command = new PutCommand(putPlaylistParams);
  return client.send(command);
};

export default putPlaylist;
