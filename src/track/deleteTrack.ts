import { DeleteCommand, DeleteCommandInput } from '@aws-sdk/lib-dynamodb';
import client from '../db/client';
import { Track } from './track.model';

const deleteTrack = (id: string) => {
  const deleteTrackParams: DeleteCommandInput = {
    TableName: 'Tracks',
    Key: {
      id: String(id),
    },
  };

  const command = new DeleteCommand(deleteTrackParams);
  return client.send(command);
};

export default deleteTrack;
