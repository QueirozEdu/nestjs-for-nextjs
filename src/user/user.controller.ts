import { Controller, Get, Param } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CustomParseIntPipe } from 'src/common/pipes/custom-parse-int-pipe.pipe';

@Controller('user')
export class UserController {
  constructor(private readonly configService: ConfigService) {}
  @Get(':id')
  findOne(
    @Param('id', new CustomParseIntPipe())
    id: number,
  ) {
    console.log(process.env.TEST || 'Default');
    console.log(this.configService.getOrThrow('TEST1'));
    return `Hello from user ${id} controller `;
  }
}
