import csv
import random


class Weapon:
    def __init__(self, weapon_name, weapon_type, weapon_suit, suit_count):
        self.weapon_name = weapon_name
        self.weapon_suit = weapon_suit
        self.weapon_type = weapon_type
        self.suit_count = suit_count

    def __str__(self):
        return 'weapon name is {weapon_name}, in suit {weapon_suit}'.format(weapon_name = self.weapon_name, weapon_suit = self.weapon_suit)


def parse_weapon(file_path):
    weapon_list = []
    with open(file_path) as csv_file:
        csv_reader = csv.reader(csv_file)
        for row in csv_reader:
            w = Weapon(row[0], row[3], row[1], row[2])
            weapon_list.append(w)
    return weapon_list

def get_a_weapon_in_weapon_list(weapon_list):
    roll = random.randint(0, 208)
    return weapon_list[roll]

def is_weapon_enought(weapon_repo, weapon_dict):
    distinct_rpeo = set()
    for weapon in weapon_repo:
        distinct_rpeo.add(weapon)

    gaie_count = 0
    shoucuo_count = 0
    fruit_count = 0

    headgear_suit_count = 0
    dahuanghu_count = 0

    spec_suit_count = 0
    lkbk_count = 0
    for weapon in distinct_rpeo:
        if weapon.weapon_suit == '改恶':
            gaie_count+=1
        if weapon.weapon_suit == '贫瘠沙漠':
            shoucuo_count += 1
        if weapon.weapon_suit == '水果':
            fruit_count += 1
        if weapon.weapon_suit == '幸运777':
            headgear_suit_count += 1
        if weapon.weapon_suit == '大恍惚':
            dahuanghu_count += 1
        if weapon.weapon_suit == '军神':
            spec_suit_count += 1
        if weapon.weapon_suit == '灵宝':
            lkbk_count += 1
    return max(gaie_count,shoucuo_count, fruit_count) +  max(headgear_suit_count, dahuanghu_count)  + max(spec_suit_count,lkbk_count) >= 9




def simulate_once():
    weapon_repo = []
    hell_count = 0
    while True:
        hell_count += 1
        w = get_a_weapon_in_weapon_list(weapon_ref)
        weapon_repo.append(w)
        if is_weapon_enought(weapon_repo, weapon_dict):
            break
        if hell_count > 100000:
            print('i ont get weapon then???\n')
            w_dict = set()
            for w in weapon_repo:
                w_dict.add(w)
            print(len(w_dict))
            for w in w_dict:
                print(w)
            break
    return hell_count

if __name__ == "__main__":
    weapon_ref = parse_weapon('C:\\Users\\qwerp\\Documents\\source\\HellSImulate\\weapon.csv')
    weapon_dict = dict()
    for weapon in weapon_ref:
        weapon_dict[weapon.weapon_name] = weapon
    
    hell_counts = []
    simulate_times = 100
    for i in range(0, simulate_times):
        hell_count = simulate_once()
        hell_counts.append(hell_count)


    print(
        'the hell is over, the total simluate time is {count}, and average fit time is {avg}, max time is {max}, min time is {min}'
        .format(count=simulate_times, avg=sum(hell_counts)/len(hell_counts), max=max(hell_counts), min=min(hell_counts))
        )
