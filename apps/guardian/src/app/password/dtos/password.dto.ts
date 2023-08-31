import {
  ArgsType,
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

@InputType('CreatePasswordInput')
export class CreatePasswordRequest {
  /**
   * @description Identity field accepts a username, email or phoneNumber of an account
   */
  @Field({
    description: 'Identity field accepts a username, email or phoneNumber of an account',
    nullable: true,
  })
  @ApiProperty()
  identity: string;

  /**
   * @description This is the password used together with any identity to verify an account by the owner
   */
  @Field({
    description:
      'This is the password used together with any identity to verify an account by the owner',
  })
  @ApiProperty()
  password: string;
}

@ArgsType()
export class PasswordScoreRequest {
  /**
   * @description A password string or text
   */
  @Field({
    description: 'a password string or text',
  })
  @ApiProperty()
  @IsNotEmpty()
  password: string;
}

export enum PasswordScoreEnum {
  TooWeak = 'TOO-WEAK',
  Weak = 'WEAK',
  Medium = 'MEDIUM',
  Strong = 'STRONG',
  VeryStrong = 'VERY-STRONG',
}

registerEnumType(PasswordScoreEnum, {
  name: 'PasswordScore',
});

/**
 * @description session response is a public representation of an session
 */
@ObjectType('password', {
  description: 'Password response is a public representation of an session',
})
export class PasswordResponse {
  /**
   * @description ID field is a database generated unique identifier for an session
   */
  @Field({
    description: 'ID field is a database generated unique identifier for an session',
  })
  @ApiProperty()
  id: string;

  /**
   * @description Email field is a unique but optional identity of an session
   */
  @Field({
    description: 'Email field is a unique but optional identity of an session',
  })
  @ApiProperty()
  email?: string;

  /**
   * @description Username field is a unique but optional identity of an session
   */
  @Field({
    description: 'Username field is a unique but optional identity of an session',
  })
  @ApiProperty()
  username?: string;

  /**
   * @description Phone number field is a unique but optional identity of an session
   */
  @Field({
    description: 'Phone number field is a unique but optional identity of an session',
  })
  @ApiProperty()
  phoneNumber?: string;
}
