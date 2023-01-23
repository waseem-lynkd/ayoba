import { GetCommand, GetCommandInput } from '@aws-sdk/lib-dynamodb';
import client from '../db/client';

const getPlaylist = async (id: string) => {
  const getPlaylistParams: GetCommandInput = {
    TableName: 'Playlists',
    Key: {
      id: String(id),
    },
  };

  const command = new GetCommand(getPlaylistParams);
  return await client.send(command);
};

export default getPlaylist;
