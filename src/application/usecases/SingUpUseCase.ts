import { User } from "@/domain/entities/User";
import { IUserRepository } from "../repository/UserRepository";

export class SignUpUseCase {

  constructor(private userAuthRepository: IUserRepository){}

  async execute(user:User ):Promise<any> {

      return await this.userAuthRepository.createLogin(user);          
  }
}