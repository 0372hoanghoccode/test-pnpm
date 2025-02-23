import axios from "axios";

const API_URL = "http://localhost:8080/crud";

export interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  dob: string;
}

export interface UserCreationRequest {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  dob: string;
}

export interface UserUpdateRequest {
  firstName?: string;
  lastName?: string;
  dob?: string;
}

export const api = {
  getUsers: () => axios.get<User[]>(`${API_URL}/users`),
  getUser: (id: string) => axios.get<User>(`${API_URL}/users/${id}`),
  createUser: (user: UserCreationRequest) =>
    axios.post<User>(`${API_URL}/users`, user),
  updateUser: (id: string, user: UserUpdateRequest) =>
    axios.put<User>(`${API_URL}/users/${id}`, user),
  deleteUser: (id: string) => axios.delete(`${API_URL}/users/${id}`),
};
