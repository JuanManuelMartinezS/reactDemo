import axios from "axios";
import { Permiso } from "../models/Permiso";

const API_URL = import.meta.env.VITE_API_URL + "/permisos" || "";

class PermisoService {
    async getPermisos(): Promise<Permiso[]> {
        try {
            const response = await axios.get<Permiso[]>(API_URL);
            return response.data;
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
            return [];
        }
    }

    async getPermisoById(id: number): Promise<Permiso | null> {
        try {
            const response = await axios.get<Permiso>(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error("Usuario no encontrado:", error);
            return null;
        }
    }

    async createPermiso(Permiso: Omit<Permiso, "id">): Promise<Permiso | null> {
        try {
            const response = await axios.post<Permiso>(API_URL, Permiso);
            return response.data;
        } catch (error) {
            console.error("Error al crear usuario:", error);
            return null;
        }
    }

    async updatePermiso(id: number, Permiso: Partial<Permiso>): Promise<Permiso | null> {
        try {
            const response = await axios.put<Permiso>(`${API_URL}/${id}`, Permiso);
            return response.data;
        } catch (error) {
            console.error("Error al actualizar usuario:", error);
            return null;
        }
    }

    async deletePermiso(id: number): Promise<boolean> {
        try {
            await axios.delete(`${API_URL}/${id}`);
            return true;
        } catch (error) {
            console.error("Error al eliminar usuario:", error);
            return false;
        }
    }
}

// Exportamos una instancia de la clase para reutilizarla
export const permisoService = new PermisoService();
