import { HellCounting }  from '@/service/HellCounting';


    test('should get a weapon successfully', () => {
        expect(new HellCounting().farmingOnce().weaponName).toBe('hello');
    });

    test('farming once should have a rate to get expect weapon', () => {
        expect(new HellCounting().calculateSingleRate()).toBeCloseTo(1/200, 3);
    });

    test('should have much more chance to get weapon with more farming times', () => {
        let hell = new HellCounting();
        let onceTimeRate = hell.calculateSingleRate();
        let tenTimeRate = hell.calculateRateWithSpecifiedTimes(10);
        expect(tenTimeRate).toBeGreaterThan(onceTimeRate);
    });
    