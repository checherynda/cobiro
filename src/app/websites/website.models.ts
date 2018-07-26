export interface WebsiteModel {
    website: string;
    name: string;
    id?: number;
}

export function getDefaultModel() {
    return {
        website: '',
        name: ''
    } as WebsiteModel;
}
