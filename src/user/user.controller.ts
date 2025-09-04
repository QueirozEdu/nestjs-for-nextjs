import { Controller, Get, Param } from '@nestjs/common';
import { CustomParseIntPipe } from 'src/common/pipes/custom-parse-int-pipe.pipe';

@Controller('user')
export class UserController {
  @Get(':id')
  findOne(
    @Param('id', new CustomParseIntPipe())
    id: number,
  ) {
    console.log(id, typeof id);
    return `Hello from user ${id} controller `;
  }
}
