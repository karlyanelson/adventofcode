from aocp import (
    CustomTransform,
    SortTransform,
    MapTransform,
    ReplaceTransform,
    IntParser,
    IntListParser,
    BoolParser,
    ChainParser,
    ListParser,
    SetParser,
    TupleParser,
    DictParser,
)

def get_day_1_data(input = None):
    raw_data = ''

    if input:
        raw_data = input
    else:
        with open('input.txt', 'r') as file:
            raw_data = file.read()  

    parser = ListParser()   

    parsed = parser.parse(raw_data) 

    left = []  
    right = []

    for item in parsed:
        split = item.split('   ')
        left.append((split[0]))
        right.append((split[1]))  

    left_list = list(map(int, left))
    right_list = list(map(int, right)) 

    left_sorted = sorted(left_list)
    right_sorted = sorted(right_list) 

    return left_sorted, right_sorted

def day_1_part_1(left:list, right:list):
    diffs = []

    for i in range(len(left)):
        diff = abs(left[i] - right[i])
        diffs.append(diff)

    return sum(diffs)

def day_1_part_2(left:list, right:list):
    #This time, you'll need to figure out exactly how often each number from the left list 
    # appears in the right list. Calculate a total similarity score by adding up each number in the left list 
    # after multiplying it by the number of times that number appears in the right list.

    similarity = 0

    for i in range(len(left)):
        similarity += left[i] * right.count(left[i])

    return similarity