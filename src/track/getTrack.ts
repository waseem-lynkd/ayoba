import { GetCommand, GetCommandInput } from '@aws-sdk/lib-dynamodb';
import client from '../db/client';
import { Track } from './track.model';

const getTrack = async (id: string) => {
  const getTrackParams: GetCommandInput = {
    TableName: 'Tracks',
    Key: {
      id: String(id),
    },
  };

  const command = new GetCommand(getTrackParams);
  return await client.send(command);
};

export default getTrack;
