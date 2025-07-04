import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class ApiMalpoService {
    // configuracion desde las variables de entorno
    private readonly baseUrl = process.env.API_MALPO_BASE_URL!;
    private readonly username = process.env.API_MALPO_USER!;
    private readonly password = process.env.API_MALPO_PASS!;
    private readonly apiKey = process.env.API_MALPO_KEY!;   
    private readonly authHeader = process.env.API_MALPO_AUTH_HEADER!;


    constructor(private readonly httpService: HttpService) { }

    async getDataFromEndpoint(endpoint: string): Promise<any> {
        const url = `${this.baseUrl}/${endpoint}`; // construye la url

        // configuracion de la autenticacion
        const auth = Buffer.from(`${this.username}:${this.password}`).toString('base64');
 
        // configuracion del header
        const headers = {
            Authorization: `Basic ${auth}`,
            [this.authHeader]: this.apiKey,
        };

        try {
            const response = await firstValueFrom(
                this.httpService.get(url, { headers }),
            );
            return response.data;

        } catch (error) {
            // manejo de errores
            console.error('Error al consultar el endpoint dinámico:', error?.response?.data || error.message);
            throw error;
        }
    }
}
