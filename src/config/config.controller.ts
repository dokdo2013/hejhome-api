import {
  Controller,
  Get,
  HttpException,
  HttpExceptionBody,
  HttpStatus,
  Req,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ConfigService } from './config.service';
import { ConfigMemberDto } from './config.dto';
import { ApiResponseType } from 'src/common/api-response.dto';
import { Request } from 'express';
import { CommonErrorResponseType } from 'src/common/common-error.dto';

@Controller('config')
@ApiTags('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get('user')
  @ApiOperation({
    summary: 'Get User Information',
    description: 'Get logged in user information',
  })
  @ApiOkResponse({
    description: 'Users Information',
    type: ApiResponseType(ConfigMemberDto, {
      isArray: true,
    }),
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
    type: CommonErrorResponseType({
      error: 'invalid_token',
      error_description: 'Invalid access token: something',
    }),
  })
  @ApiBearerAuth()
  async getUser(@Req() req: Request): Promise<ConfigMemberDto[]> {
    const token = req.headers.authorization?.split(' ')[1] || '';
    return await this.configService.getUserConfig(token);
  }
}
