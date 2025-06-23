import { Body, Controller, Get, Post } from '@nestjs/common';
import { BokingService } from './boking.service';
import { DtoBoking } from './dto/Boking.dto';

@Controller('boking')
export class BokingController {
  constructor(private readonly serviceBooking: BokingService) {}

  @Post()
  async boking(@Body() dto: DtoBoking) {
    return this.serviceBooking.bookingBarang(dto);
  }

  @Get()
  async bokingGet() {
    return this.serviceBooking.getBoking();
  }
}
