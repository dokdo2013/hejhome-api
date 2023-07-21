import { HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigMemberDto, ConfigMemberResponseDto } from './config.dto';

@Injectable()
export class ConfigService {
  async getUserConfig(token: string): Promise<ConfigMemberDto[]> {
    const endpoint = 'https://square.hej.so/dashboard/config/user';

    const response = await axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data as ConfigMemberResponseDto;
      })
      .catch((error) => {
        console.error(error);
        throw new HttpException(error.response.data, error.response.status);
      });

    return response?.member || [];
  }
}
