import { Calendar } from "../Calendar'";
import day1 from "./days/day1";

export function Year2023() {
    const answers = [day1];

    return (
        <Calendar answers={answers} />
    );
}
