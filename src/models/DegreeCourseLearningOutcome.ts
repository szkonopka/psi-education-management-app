import { LearningOutcome } from "./LearningOutcome";
import { LearningOutcomeType } from "./EnumerationTypes";

export class DegreeCourseLearningOutcome extends LearningOutcome {

    constructor (
        symbol: string,
        type: LearningOutcomeType,
        description: string
    ) {
        super(symbol, type, description);
    }
};