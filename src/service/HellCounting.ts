import { Weapon } from '@/model/Weapon';

export class HellCounting {
    weaponRepo: Array<Weapon>;
    weaponDict: Map<string, Weapon>;

    constructor() {
        this.weaponRepo = new Array<Weapon>();
        this.weaponDict = new Map();
    }

    farmingOnce(): Weapon {
        return new Weapon("hello", "", "", 5);
    }
}