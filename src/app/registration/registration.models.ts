export interface RegistrationModel {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    country_code: string;
}

export function getDefaultModel() {
    return {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        country_code: ''
    } as RegistrationModel;
}

export interface LoginModel {
    email: string;
    password: string;
}

export const COUNTRIES: { [key: string]: string } = {
    DK: 'Denmark',
    UA: 'Ukraine'
};

export interface Customer {
    id: number;
    active: boolean;
    email: string;
    group: string;
    first_name: string;
    last_name: string;
    country_code: string;
    weekly_summary: boolean;
    created_at: string;
    updated_at: string;
}

export interface LoginSuccessResponse {
    token_type: string;
    expires_in: number;
    access_token: string;
    refresh_token: string;
    customer: Customer;
}

export interface RegistrationSuccessResponse {
    message: string;
}
