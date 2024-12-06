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

from utils.get_raw_input import get_raw_input

def parse_input(folder_name:str, input = None) -> list[str]:
    raw_data = get_raw_input(folder_name, input)

    parser = ListParser()   

    parsed = parser.parse(raw_data) 

    print("Parsed data from input")

    return parsed