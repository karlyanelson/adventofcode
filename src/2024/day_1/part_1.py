
def answer_part_1(left:list, right:list):
    diffs = []

    for i in range(len(left)):
        diff = abs(left[i] - right[i])
        diffs.append(diff)

    return sum(diffs)

