import { LoginDto } from "models";

export interface apiFunction {
  login: (data: LoginDto) => Promise<LoginDto | undefined>;
}
