import axios from "axios";
import { Rol } from "../models/Rol";

const API_URL = import.meta.env.VITE_API_URL + "/roles" || "";

class RolService {
    async getRols(): Promise<Rol[]> {
        try {
            const response = await axios.get<Rol[]>(API_URL);
            return response.data;
        } catch (error) {
            console.error("Error al obtener roles:", error);
            return [];
        }
    }

    async getRolById(id: number): Promise<Rol | null> {
        try {
            const response = await axios.get<Rol>(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error("Rol no encontrado:", error);
            return null;
        }
    }

    async createRol(Rol: Omit<Rol, "id">): Promise<Rol | null> {
        try {
            const response = await axios.post<Rol>(API_URL, Rol);
            return response.data;
        } catch (error) {
            console.error("Error al crear rol:", error);
            return null;
        }
    }

    async updateRol(id: number, Rol: Partial<Rol>): Promise<Rol | null> {
        try {
            const response = await axios.put<Rol>(`${API_URL}/${id}`, Rol);
            return response.data;
        } catch (error) {
            console.error("Error al actualizar rol:", error);
            return null;
        }
    }

    async deleteRol(id: number): Promise<boolean> {
        try {
            await axios.delete(`${API_URL}/${id}`);
            return true;
        } catch (error) {
            console.error("Error al eliminar rol:", error);
            return false;
        }
    }
}

// Exportamos una instancia de la clase para reutilizarla
export const rolService = new RolService();
