// src/rym/rym.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class RyMService {
  private readonly apiUrl = 'https://rickandmortyapi.com/api';

  // Obtener todos los personajes (con paginación)
  async getCharacters(page?: number) {
    const url = page ? `${this.apiUrl}/character?page=${page}` : `${this.apiUrl}/character`;
    const response = await axios.get(url);
    return response.data;
  }

  // Obtener un personaje por ID
  async getCharacterById(id: number) {
    const response = await axios.get(`${this.apiUrl}/character/${id}`);
    return response.data;
  }

  // Filtrar personajes (ej: status, species)
  async filterCharacters(params: { status?: string; species?: string; name?: string }) {
    const query = new URLSearchParams(params).toString();
    const response = await axios.get(`${this.apiUrl}/character/?${query}`);
    return response.data;
  }

  // Obtener ubicaciones o episodios (similar a los métodos anteriores)
  async getLocations() {
    const response = await axios.get(`${this.apiUrl}/location`);
    return response.data;
  }
}