import { Client, Issuer } from 'openid-client';
import { env } from '../config/env';

export class OpenIdClient {
    private static instance: Client;

    static async getClient(): Promise<Client> {
        if (!this.instance) {
            const issuer = await Issuer.discover(env.COGNITO_ISSUER);
            this.instance = new issuer.Client({
                client_id: env.COGNITO_CLIENT_ID,
                client_secret: env.COGNITO_CLIENT_SECRET,
                redirect_uris: [env.COGNITO_REDIRECT_URI],
                response_types: ['code']
            });
        }
        return this.instance;
    }
}
