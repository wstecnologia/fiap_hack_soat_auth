import { CognitoIdentityProviderClient, ConfirmSignUpCommand, InitiateAuthCommand, SignUpCommand } from "@aws-sdk/client-cognito-identity-provider";
import { env } from "process";
import { IUserRepository } from "../../application/repository/UserRepository";
import { User } from "../../domain/entities/User";

export class UserCognito implements IUserRepository {
  
  private client_id :string = env.COGNITO_CLIENT_ID 
  private client:CognitoIdentityProviderClient = new CognitoIdentityProviderClient({ region: process.env.COGNITO_REGION }); 


  async login(username: string, password: string): Promise<object> {
         const command = new InitiateAuthCommand({
            AuthFlow: "USER_PASSWORD_AUTH",
            ClientId: this.client_id,
            AuthParameters: {
              USERNAME: username,
              PASSWORD: password,
            },
          });
          const response = await this.client.send(command);
          return response.AuthenticationResult; 
  }

  async confirmSignUp(username: string, confirmationCode: string): Promise<object> {
    const command = new ConfirmSignUpCommand({
      ClientId: this.client_id,
      Username: username,
      ConfirmationCode: confirmationCode,
    });
    const response = await this.client.send(command);
    return response;

    
  }

  async createLogin(user: User): Promise<object> {
          const command = new SignUpCommand({
            ClientId: this.client_id,
            Username: user.username,
            Password: user.password,
            UserAttributes: [{ Name: "email", Value: user.email }],
          });
          const response = await this.client.send(command);
          return response;
  }

}