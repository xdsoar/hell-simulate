import { Weapon } from '@/model/Weapon';

export class HellCounting {
    static WEAPONLIST: Array<Weapon> = require("@/assets/data.json");


    farmingOnce(): Weapon | null {
        if (Math.random() > 0.9) {
            let index = Math.floor(Math.random() * HellCounting.WEAPONLIST.length);
            return HellCounting.WEAPONLIST[index];
        }
        return null;
    }


    graduateOnce(): number {
        let weaponRepo: Map<Weapon, number> = new Map();
        for (let weapon of HellCounting.WEAPONLIST) {
            weaponRepo.set(weapon, 0);
        }

        let farmingTimes = 0;
        while (true) {
            let weapon = this.farmingOnce();
            if (weapon != null) {
                let curCount = weaponRepo.get(weapon);
                weaponRepo.set(weapon, curCount ? curCount + 1 : 1);
                let aim = weaponRepo.get(HellCounting.WEAPONLIST[0]);
                if (aim && aim > 4) {
                    break;
                }
                if (farmingTimes > 10000) {
                    break;
                }
            }
            farmingTimes++;
        }
        return farmingTimes;
    }

    graduate(aimWeapons: Array<Weapon>): number {
        let weaponRepo: Map<Weapon, number> = new Map();
        for (let weapon of HellCounting.WEAPONLIST) {
            weaponRepo.set(weapon, 0);
        }

        let farmingTimes = 0;
        while (true) {
            let weapon = this.farmingOnce();
            if (weapon != null) {
                let curCount = weaponRepo.get(weapon);
                weaponRepo.set(weapon, curCount ? curCount + 1 : 1);
                let aimCount = 0;
                for (let aim of aimWeapons) {
                    let realCount = weaponRepo.get(aim);
                    if (realCount && realCount >= 1){
                        aimCount++;
                    }
                }
                if (aimCount >= aimWeapons.length)
                    break;
            }
            farmingTimes++;
        }
        console.log('times is ' + farmingTimes);
        return farmingTimes;
    }
}