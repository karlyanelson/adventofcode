def get_raw_input(folder_name:str, input = None) -> list[str]:
    raw_data = ''

    if input:
        raw_data = input
    else:
        with open(f'../{folder_name}/input.txt', 'r') as file:
            raw_data = file.read()  

    return raw_data