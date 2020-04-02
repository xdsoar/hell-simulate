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

    test('should graduate finally', () => {
        let hell = new HellCounting();
        let farmingTimes = hell.graduateOnce();
        expect(farmingTimes).toBeGreaterThanOrEqual(100);
    });

    test('should gradute with specified weapon finally', () => {
        let hell = new HellCounting();
        let aim = HellCounting.WEAPONLIST[2];
        let farmingTimes = hell.graduate([aim]);
        expect(farmingTimes).toBeGreaterThanOrEqual(100);
    })


    