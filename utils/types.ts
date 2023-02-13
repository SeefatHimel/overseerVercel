import { LoginDto } from "models/auth";
import { CreateTaskDto } from "models/tasks";
import { RegisterDto } from "../models/auth/index";

export interface apiFunction {
  login: (data: LoginDto) => Promise<LoginDto | undefined>;
  logout: () => {};
  registerUser: (data: RegisterDto) => Promise<RegisterDto | undefined>;
  createTask: (data: CreateTaskDto) => Promise<CreateTaskDto | undefined>;
}
