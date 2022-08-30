export class FreeAgencyModel {
    id: number;
    playerId: string;
    name: string;
    postCode: string;
    country: ListItem;
    longitude: number;
    latitude: number;
    ageGroup: boolean;
    tournamentTypeId: number;
  }

  export class UserModel {
    id: string;
    userName: string;
    email: string;
    fullName: string
    isPlayer: boolean;
    isCaptain: boolean;
    token: string;
   }

   export class InvitationRequest {
    captainId: string;
    playerId: string;
   }

   export class IdModel{
    constructor(id: number){
      this.id = id;
    }
    id: number;
   }

   export class ListItem{
    constructor(id: number, code: string, name: string){
      this.id = id;
      this.code = code;
      this.name = name;
    }
    id: number;
    code: string;
    name: string;
   }

   export class IdStringModel{
    constructor(id: string){
      this.id = id;
    }
    id: string;
   }