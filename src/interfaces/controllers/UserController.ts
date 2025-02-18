import { Request, Response } from 'express';
import { ConfirmSignUpUseCase } from '../../application/usecases/ConfirmSignUpUseCase';
import { InitiateAuthUseCase } from '../../application/usecases/InitiateAuthUseCase';
import { SignUpUseCase } from '../../application/usecases/SingUpUseCase';
import { User } from '../../domain/entities/User';
import { UserCognito } from '../../infrastructure/repository/UserCognito';

export class UserController {
    private signUp:SignUpUseCase
    private iniciateAuth:InitiateAuthUseCase
    private confirmSignUp:ConfirmSignUpUseCase

    constructor(){
        this.iniciateAuth = new InitiateAuthUseCase(new UserCognito())        
        this.confirmSignUp = new ConfirmSignUpUseCase(new UserCognito())
        this.signUp = new SignUpUseCase(new UserCognito())
    }
    async createLogin(req: Request, res: Response): Promise<any> {
        const {  username,email, password  } = req.body  
        const user:User = {
            username:String(username), 
            password:String(password), 
            email:String(email)            
        }      
        return this.signUp.execute(user)   
    }


    async login(req: Request, res: Response): Promise<any> {
        const { username, password  } = req.body
        
        return this.iniciateAuth.execute(String(username), String(password) )   
    }

    async confirmCreateLogin(req: Request, res: Response): Promise<any> {
        const { username,confirmationCode } = req.body
        return this.confirmSignUp.execute(String(username), String(confirmationCode))  
    }
}
