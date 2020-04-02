import { HellCounting }  from '@/service/HellCounting';


    test('should get a weapon successfully', () => {
        let hell = new HellCounting();
        let count = 0;
        for (let i = 0; i <1000; i++) {
            if (hell.farmingOnce() != null) {
                count++;
            }
        }
        expect(count).toBeGreaterThanOrEqual(80);
        expect(count).toBeLessThan(200);
    });

    test('should gradute with specified weapon finally', () => {
        let hell = new HellCounting();
        let aim = HellCounting.WEAPONLIST[2];
        let farmingTimes = hell.graduate([aim]);
        expect(farmingTimes).toBeGreaterThanOrEqual(10);
    })

    test('should gradute quickly with some weapon hold', () => {
        let hell = new HellCounting();
        let aim1 = HellCounting.WEAPONLIST[1];
        let aim2 = HellCounting.WEAPONLIST[2];
        let aim3 = HellCounting.WEAPONLIST[3];
        let aim4 = HellCounting.WEAPONLIST[4];
        let aim5 = HellCounting.WEAPONLIST[5];
        const aims = [aim1, aim2, aim3, aim4, aim5];
        let farmingTimes = hell.graduate(aims);
        let lessFarmingTimes = hell.graduateWithHold(aims, 4);
        expect(farmingTimes).toBeGreaterThanOrEqual(lessFarmingTimes);
    })


    