
import { IUserRepository } from "../repository/UserRepository";

export class ConfirmSignUpUseCase {      
  constructor(private userAuthRepository:IUserRepository){}

  async  execute(username:string, confirmationCode:string):Promise<any> {
      
      return await this.userAuthRepository.confirmSignUp(username, confirmationCode)
      
    
  }
}