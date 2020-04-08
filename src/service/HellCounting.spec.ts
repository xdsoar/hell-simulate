import { HellCounting } from '@/service/HellCounting';


test('should get a weapon successfully', () => {
    let hell = new HellCounting();
    let count = 0;
    for (let i = 0; i < 1000; i++) {
        if (hell.farmingOnce() != null) {
            count++;
        }
    }
    expect(count).toBeGreaterThanOrEqual(50);
    expect(count).toBeLessThan(300);
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
    const loopTime = 100;

    let result1 = [];
    let result2 = [];

    const getAvg = (function (sum: number, value: number): number {
        return sum + value;
    });

    for (let i = 0; i < loopTime; i++) {
        result1.push(hell.graduate(aims));
    }
    for (let i = 0; i < loopTime; i++) {
        result2.push(hell.graduateWithHold(aims, 4));
    }

    let avg1 = result1.reduce(getAvg);
    let avg2 = result2.reduce(getAvg);

    expect(avg1).toBeGreaterThanOrEqual(avg2);
})

test('should calcute gradute times with weapon suit name', () => {
    let hell = new HellCounting();
    const aimSuits = ['改恶', '军神', '大恍惚'];
    let farmingTimes = hell.graduteWithSuitNameAndHold(aimSuits, 2);
    expect(farmingTimes).toBeGreaterThanOrEqual(100);
    expect(farmingTimes).toBeLessThanOrEqual(10000)
})

test('should calcute avg and q1 q3 correct', () => {
    let hell = new HellCounting();
    const aimSuits = ['大恍惚'];
    const stats = hell.calculateForTimes(aimSuits, 0, 1, 777);

    expect(stats.q1).toBeLessThanOrEqual(stats.q3);
    expect(stats.avg).toBeGreaterThanOrEqual(stats.q1);


})

