export class AgencyResponse {
    id: number;
    name: string;
    postCode: string;
    longitude: number;
    latitude: number;
    ageGroup: boolean;
    tournamentTypeId: number;
  }

  export class UserModel {
    id: string;
    userName: string;
    email: string;
    fullName: string;
    isPlayer: boolean;
    isCaptain: boolean;
    token: string;
   }
