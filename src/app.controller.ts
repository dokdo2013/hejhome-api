import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiResponseType, Response200 } from './common/api-response.dto';

@Controller()
@ApiTags('common')
export class AppController {
  @Get('health')
  @ApiOperation({
    summary: 'Health check',
    description: 'Check if API is up and running',
  })
  @ApiOkResponse({
    description: 'Hejhome API is up and running!',
    type: ApiResponseType(Response200<string>, {
      data: 'Hejhome API is up and running!',
    }),
  })
  healthCheck(): string {
    return 'Hejhome API is up and running!';
  }
}
