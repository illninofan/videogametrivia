import { shuffleAnswers } from './utils'

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

/* Export new type called Question state
   which takes the Question type object
   and adds a new array to it called answers
*/

export type QuestionState = Question & { answers: string[] }

// ENUM consisting of key value pairs for Difficulty
// so that difficulty can not be modified

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard',
}
 
export const fetchQuizQuestions = async (
    amount: number,
    difficulty: Difficulty
) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch (endpoint)).json();
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleAnswers([
                ...question.incorrect_answers, 
                question.correct_answer
            ])
        }
    ))
}