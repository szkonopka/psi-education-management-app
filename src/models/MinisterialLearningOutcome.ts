import LearningOutcome from "./LearningOutcome";
import { LearningOutcomeType } from "./EnumerationTypes";

export default class MinisterialLearningOutcome extends LearningOutcome {

    constructor (
        symbol: string,
        type: LearningOutcomeType,
        description: string
    ) {
        super(symbol, type, description);
    }
};