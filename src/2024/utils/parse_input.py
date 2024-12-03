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

def parse_input(folder_name:str, input = None) -> list[str]:
    raw_data = ''

    if input:
        raw_data = input
    else:
        with open(f'../{folder_name}/input.txt', 'r') as file:
            raw_data = file.read()  

    parser = ListParser()   

    parsed = parser.parse(raw_data) 

    print("Parsed data from input")

    return parsed