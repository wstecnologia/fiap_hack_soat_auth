import { IUserRepository } from "../repository/UserRepository";

export class InitiateAuthUseCase {
  constructor(private userAuthRepository:IUserRepository){}

  async execute(username:string, password:string):Promise<object> {
         
      return await this.userAuthRepository.login(username, password)
      
  }
}