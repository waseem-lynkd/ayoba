import { PutCommand, PutCommandInput } from '@aws-sdk/lib-dynamodb';
import { Track } from './track.model';
import client from '../db/client';

const putTrack = (track: Track) => {
  const putTrackParams: PutCommandInput = {
    TableName: 'Tracks',
    Item: {
      id: track.id,
      name: track.name,
      album: track.album,
      genre: track.genre,
      artist: track.artist,
      duration: track.duration,
      artwork: track.artwork,
      audio: track.audio,
    },
  };

  const command = new PutCommand(putTrackParams);
  return client.send(command);
};

export default putTrack;
