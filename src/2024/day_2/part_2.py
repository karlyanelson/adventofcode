def answer_part_2(left:list, right:list):
    similarity = 0

    for i in range(len(left)):
        similarity += left[i] * right.count(left[i])

    return similarity