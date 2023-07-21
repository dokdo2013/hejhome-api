import { HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ControlService {
  async getDevices(familyId: string, token: string): Promise<any> {
    const endpoint = `https://square.hej.so/dashboard/${familyId}/devices-state?scope=shop`;

    const response = await axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error.response);
        throw new HttpException(error.response.data, error.response.status);
      });

    return response || [];
  }

  async control(deviceId: string, token: string, body: any): Promise<string> {
    const endpoint = `https://square.hej.so/dashboard/control/${deviceId}`;
    console.log(body);

    const response = await axios
      .post(endpoint, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error.response);
        throw new HttpException(error.response.data, error.response.status);
      });

    return response || [];
  }
}
