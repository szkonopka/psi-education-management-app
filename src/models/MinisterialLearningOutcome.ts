import { LearningOutcome } from "./LearningOutcome";
import { LearningOutcomeType } from "./EnumerationTypes";

export class MinisterialLearningOutcome extends LearningOutcome {

    constructor (
        symbol: string,
        type: LearningOutcomeType,
        description: string
    ) {
        super(symbol, type, description);
    }
};