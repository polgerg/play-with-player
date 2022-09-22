import { Player } from "./player";

export interface Team {
    teamName: string;
    totalWage: number;
    players: Player[]
}
