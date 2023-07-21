import { ApiProperty } from '@nestjs/swagger';

export class ConfigMemberDto {
  @ApiProperty({
    type: String,
    description: 'Home Name',
    example: 'My Home',
  })
  homeName: string;

  @ApiProperty({
    type: Boolean,
    description: 'Is the user an admin',
    example: true,
  })
  admin: boolean;

  @ApiProperty({
    type: String,
    description: 'User Name',
    example: 'John Doe',
  })
  name: string;

  @ApiProperty({
    type: String,
    description: "User's unique ID",
    example: 'abcde1234567890abcde',
  })
  uid: string;

  @ApiProperty({
    type: String,
    description: 'Home ID',
    example: 'abcde12345',
    nullable: true,
  })
  homeId: string;

  @ApiProperty({
    type: String,
    description: 'Member Account ID',
    example: 'abc************om',
  })
  memberAccount: string;
}

export class ConfigMemberResponseDto {
  @ApiProperty({
    type: ConfigMemberDto,
    description: 'Member Information',
  })
  member: ConfigMemberDto[];
}
