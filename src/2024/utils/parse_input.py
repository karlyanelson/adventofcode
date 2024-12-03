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