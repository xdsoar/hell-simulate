import { Weapon } from '@/model/Weapon';

export class HellCounting {
    static WEAPONLIST: Array<Weapon> = require("@/assets/data.json");

    private mapWeaponWithSuitName(): Map<string, Array<Weapon>> {
        const weaponMap = new Map();
        for (let weapon of HellCounting.WEAPONLIST) {
            let suit = weaponMap.get(weapon.weaponSuit);
            if (!suit) {
                suit = [weapon];
                weaponMap.set(weapon.weaponSuit, suit);
            } else {
                suit.push(weapon);
            }
        }
        return weaponMap;
    }


    farmingOnce(): Weapon | null {
        if (Math.random() > 0.9) {
            let index = Math.floor(Math.random() * HellCounting.WEAPONLIST.length);
            return HellCounting.WEAPONLIST[index];
        }
        return null;
    }

    graduteWithSuitNameAndHold(weaponSuit: Array<string>, hold: number, aceCard: number = 0) {
        const map = this.mapWeaponWithSuitName();
        let aims = new Array<Weapon>();
        for (let weapon of weaponSuit) {
            if (!weapon)
                continue;
            let suit: Array<Weapon> = map.get(weapon)!;
            aims = aims.concat(suit);
        }
        return this.graduateWithHold(aims, hold, aceCard);
    }

    graduateWithHold(aimWeapons: Array<Weapon>, hold: number, aceCard: number = 0): number {
        let weaponRepo: Map<Weapon, number> = new Map();
        for (let weapon of HellCounting.WEAPONLIST) {
            weaponRepo.set(weapon, 0);
        }
        const leftAim = aimWeapons.slice(hold);
        let farmingTimes = 0;
        while (farmingTimes <= 100000 && leftAim.length > 0) {
            let weapon = this.farmingOnce();
            if (weapon != null) {
                let curCount = weaponRepo.get(weapon);
                weaponRepo.set(weapon, curCount ? curCount + 1 : 1);
                let aimCount = 0;
                for (let aim of leftAim) {
                    let realCount = weaponRepo.get(aim);
                    if (realCount && realCount >= 1) {
                        aimCount++;
                    }
                }
                if (aimCount + aceCard >= leftAim.length)
                    break;
            }
            farmingTimes++;
        }
        return farmingTimes;
    }

    graduate(aimWeapons: Array<Weapon>): number {
        return this.graduateWithHold(aimWeapons, 0);
    }

    calculateForTimes(weaponSuit: Array<string>, hold: number, aceCard: number, times: number): any {
        let result = new Array<number>();
        
        for (let index = 0; index < times; index++) {
            result.push(this.graduteWithSuitNameAndHold(weaponSuit, hold, aceCard));
        }

        const sum = result.reduce(function (sum: number, value: number): number {
            return sum + value;
        });

        if (sum == 0)
            return 0;
        const avg = sum / result.length;
        return avg;
    }
}