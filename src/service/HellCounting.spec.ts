import { HellCounting }  from '@/service/HellCounting';


    test('should get a weapon successfully', () => {
        expect(new HellCounting().farmingOnce().weaponName).toBe('hello');
    });

    