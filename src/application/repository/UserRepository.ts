import { User } from "@/domain/entities/User"

export interface IUserRepository {
  login(username:string, password:string):Promise<object>
  confirmSignUp(username:string, confirmationCode:string):Promise<object>
  createLogin(user:User):Promise<object>
}