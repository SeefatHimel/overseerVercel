import { LoginDto } from "models";
import { RegisterDto } from "../models/index";

export interface apiFunction {
  login: (data: LoginDto) => Promise<LoginDto | undefined>;
  registerUser: (data: RegisterDto) => Promise<RegisterDto | undefined>;
}
