import { LearningOutcome } from "./LearningOutcome";
import { LearningOutcomeType } from "./EnumerationTypes";

export class SubjectLearningOutcome extends LearningOutcome {

    constructor (
        symbol: string,
        type: LearningOutcomeType,
        description: string
    ) {
        super(symbol, type, description);
    }
};