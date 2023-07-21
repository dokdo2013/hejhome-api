import { Type } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export interface CommonErrorResponse {
  error: string;
  error_description: string;
}

interface ApiOptions {
  error: string;
  error_description: string;
}

export function CommonErrorResponseType(
  options?: Partial<ApiOptions>,
): Type<CommonErrorResponse> {
  abstract class CommonErrorResponseTypeClass implements CommonErrorResponse {
    @ApiProperty({
      type: String,
      default: options?.error ?? 'Something bad happens',
    })
    error: string;

    @ApiProperty({
      type: String,
      default: options?.error_description ?? 'Some error description',
    })
    error_description: string;
  }

  return CommonErrorResponseTypeClass as Type<CommonErrorResponseTypeClass>;
}
