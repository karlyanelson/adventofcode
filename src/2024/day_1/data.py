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

def parse_input(input = None):
    raw_data = ''

    if input:
        raw_data = input
    else:
        with open('input.txt', 'r') as file:
            raw_data = file.read()  

    parser = ListParser()   

    parsed = parser.parse(raw_data) 

    print("Parsed data from input")

    return parsed

def get_data(input = None):
    parsed = parse_input(input) 

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

    print("Formatted data for this day")

    return left_sorted, right_sorted