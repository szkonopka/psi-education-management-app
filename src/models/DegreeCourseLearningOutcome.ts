import { LearningOutcome } from "./LearningOutcome";

export class DegreeCourseLearningOutcome extends LearningOutcome {

    constructor (
        symbol: string,
        type: LearningOutcomeType,
        description: string
    ) {
        super(symbol, type, description);
    }
};