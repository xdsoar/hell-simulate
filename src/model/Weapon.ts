export class Weapon {
    weaponName: string;
    weaponSuit: string;
    weaponType: string;
    suitCount: number;

    constructor(weaponName: string, weaponSuit: string, weaponType: string, suitCount: number) {
        this.weaponName = weaponName;
        this.weaponSuit = weaponSuit;
        this.weaponType = weaponType;
        this.suitCount = suitCount;
    }

    
}