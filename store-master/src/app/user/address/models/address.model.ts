export interface Address {
    street: string;
    city: string;
    zipcode: string;
    suite?: string;
    geo?: GeoLocation;
}

export interface GeoLocation {
    lat: string;
    lng: string;
}