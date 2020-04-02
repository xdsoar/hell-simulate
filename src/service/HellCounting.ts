import { Weapon } from '@/model/Weapon';

export class HellCounting {
    weaponRepo: Array<Weapon>;
    weaponDict: Map<string, Weapon>;
    static WEAPONLIST: Array<Weapon> = require("@/assets/data.json");

    constructor() {
        this.weaponRepo = new Array<Weapon>();
        this.weaponDict = new Map();
    }

    farmingOnce(): Weapon {
        return new Weapon("hello", "", "", 5);
    }

    calculateSingleRate(): number {
        return 1/HellCounting.WEAPONLIST.length;
    }

    calculateRateWithSpecifiedTimes(farmingTimes: number): number {
        const farmingOnce:number = this.calculateSingleRate()
        return Math.pow(1-farmingOnce, farmingTimes);
    }
}