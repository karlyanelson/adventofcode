def answer_part_2(left:list, right:list):
    #This time, you'll need to figure out exactly how often each number from the left list 
    # appears in the right list. Calculate a total similarity score by adding up each number in the left list 
    # after multiplying it by the number of times that number appears in the right list.

    similarity = 0

    for i in range(len(left)):
        similarity += left[i] * right.count(left[i])

    return similarity