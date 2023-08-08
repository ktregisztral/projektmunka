export class Reservation {
    key?: string|null;
    lastName?: string;
    firstName?: string;
    birthDate?: string;
    telephone?: number;
    address?: {
        zipCode: number,
        city: string,
        street: string,
        houseNumber: number,
      };
    checkIn?: string;
    checkOut?: string;
    howManyPerson?: number;
    isDataTrue?: boolean;
}