import { LearningOutcome } from "./LearningOutcome";

export class SubjectLearningOutcome extends LearningOutcome {

    constructor (
        symbol: string,
        type: LearningOutcomeType,
        description: string
    ) {
        super(symbol, type, description);
    }
};