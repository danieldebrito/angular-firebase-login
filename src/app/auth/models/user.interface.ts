export type Roles = 'PACIENTE' | 'PROFECIONAL' | 'ADMINISTRADOR';

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  emailVerified: boolean;
  password?: string;
  photoURL?: string;
  role?: Roles;
}
