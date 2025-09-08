import { ApiProperty } from '@nestjs/swagger';
import { Event } from '@prisma/client';

export class EventEntity implements Event {
  @ApiProperty()
  id: string;

  @ApiProperty()
  logo: string;

  @ApiProperty()
  poster: string;

  @ApiProperty()
  images: string[];

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty({
    enum: ['CONCERT', 'THEATER', 'SPORT', 'FESTIVAL', 'OTHER'],
  })
  category: 'CONCERT' | 'THEATER' | 'SPORT' | 'FESTIVAL' | 'OTHER';

  @ApiProperty()
  price: number;

  @ApiProperty()
  date: Date;
  @ApiProperty()
  venueId: string;

  @ApiProperty()
  vipCapacity: number;

  @ApiProperty()
  vipAvailable: number;

  @ApiProperty()
  regularCapacity: number;

  @ApiProperty()
  regularAvailable: number;

  @ApiProperty()
  regularReserved: number;

  @ApiProperty()
  regularSold: number;

  @ApiProperty()
  vipReserved: number;

  @ApiProperty()
  vipSold: number;

  @ApiProperty()
  vipPrice: number;

  @ApiProperty()
  regularPrice: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
