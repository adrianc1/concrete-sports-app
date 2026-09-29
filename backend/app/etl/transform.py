def parse_score(raw_score):
    if raw_score is None or raw_score.strip() == "":
        return None
    else:
        return int(raw_score)
