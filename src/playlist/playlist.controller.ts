import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';

@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Post()
  createPlaylist(@Body() playlist) {
    return this.playlistService.createPlaylist(
      playlist.id,
      playlist.name,
      playlist.creator,
      playlist.playtime,
      playlist.tracklist,
    );
  }

  @Get()
  getPlaylists() {
    return this.playlistService.getPlaylists();
  }

  @Get(':id')
  getPlaylist(@Param('id') id: string) {
    return this.playlistService.getPlaylist(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlaylistDto: UpdatePlaylistDto,
  ) {
    return this.playlistService.update(+id, updatePlaylistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playlistService.remove(+id);
  }
}
