import { Controller, Get } from '@nestjs/common';
import { Body, Param, Post, Put, Delete } from '@nestjs/common/decorators';
import { CreateTrackDto } from './dto/create-track.dto';
import getTracks from './getTracks';
import { TrackService } from './track.service';

@Controller('tracks')
export class TrackController {
  constructor(private readonly trackservice: TrackService) {}

  @Get()
  getTracks() {
    return this.trackservice.getTracks();
  }

  @Get(':id')
  getTrack(@Param('id') id: string) {
    return this.trackservice.getTrack(id);
  }

  @Post()
  addTrack(@Body() track: CreateTrackDto) {
    return this.trackservice.insertTrack(
      track.name,
      track.album,
      track.artist,
      track.duration,
      track.genre,
      track.artwork,
      track.audio,
    );
  }

  @Put(':id')
  updateTrack(@Body() track: CreateTrackDto) {
    return this.trackservice.updateTrack(
      track.name,
      track.album,
      track.artist,
      track.duration,
      track.genre,
      track.artwork,
      track.audio,
    );
  }

  @Delete(':id')
  deleteTrack(@Param('id') id: string) {
    this.trackservice.deleteTrack(id);
  }
}
