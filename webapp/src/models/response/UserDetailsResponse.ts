import { EmployerResponse } from './EmployerResponse';
import { MenuResponse } from './MenuResponse';

export interface UserDetailsResponse {
    alertCount: number;
    fullName: string;
    lastSuccessLogin: number;
    employers: Array<EmployerResponse>;
    menus: Array<MenuResponse>;
}