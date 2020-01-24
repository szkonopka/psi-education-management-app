import { LearningOutcomeType } from './EnumerationTypes';

export default abstract class LearningOutcome {
    
    constructor (
        symbol: string,
        type: LearningOutcomeType,
        description: string
    ) {
        this.symbol = symbol;
        this.type = type;
        this.description = description;
    }

    symbol: string;
    type: LearningOutcomeType;
    description: string;
};

export function LearningOutcomeTypeToString(type: LearningOutcomeType): string {
    switch (type) {
        case LearningOutcomeType.SocialCompetences: return "Kompetencje społeczne";
        case LearningOutcomeType.Skills: return "Umiejetności";
        case LearningOutcomeType.Knowledge: return "Wiedza";
    }
    return "";
};