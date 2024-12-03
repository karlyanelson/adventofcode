def _check_if_safe(report: list[int]) -> bool:
    # The levels are either all increasing or all decreasing.
    # Any two adjacent levels differ by at least one and at most three.

    is_safe = False
    increases = []
    decreases = []
    for i in range(1, len(report)):
        prev = report[i - 1]
        cur = report[i]

        diff = prev - cur
        
        if abs(diff) > 3 or diff == 0:
            is_safe = False
            break
        elif diff >= 1:
            decreases.append(diff)
        elif diff <= 1:
            increases.append(diff)
        else:
            is_safe = False
            break
        
    all_decreasing = len(decreases) == len(report) - 1
    all_increasing = len(increases) == len(report) - 1

    is_safe = all_decreasing or all_increasing

    return is_safe

def answer_part_1(reports: list[list[int]]):
    safe_reports = 0

    for report in reports:
        is_safe = _check_if_safe(report)
        if is_safe:
            safe_reports += 1
    
    return safe_reports

