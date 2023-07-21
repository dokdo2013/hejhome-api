import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ControlService } from './control.service';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';

@Controller('control')
@ApiTags('control')
export class ControlController {
  constructor(
    private readonly controlService: ControlService,
    private readonly configService: ConfigService,
  ) {}

  @Get('family/:family_id')
  @ApiOperation({ summary: 'Get Remote Devices' })
  @ApiBearerAuth()
  async getDevices(
    @Param('family_id') familyId: string,
    @Req() req: Request,
  ): Promise<any> {
    const token =
      this.configService.get<string>('TOKEN') ||
      req.headers.authorization?.split(' ')[1] ||
      '';
    console.log('token', token);

    return await this.controlService.getDevices(familyId, token);
  }

  @Post('device/:device_id')
  @ApiOperation({ summary: 'Control Remote Device' })
  @ApiBody({})
  @ApiBearerAuth()
  async control(
    @Param('device_id') deviceId: string,
    @Body() body: any,
    @Req() req: Request,
  ): Promise<string> {
    const token =
      this.configService.get<string>('TOKEN') ||
      req.headers.authorization?.split(' ')[1] ||
      '';
    console.log('token', token);

    return await this.controlService.control(deviceId, token, body);
  }
}
