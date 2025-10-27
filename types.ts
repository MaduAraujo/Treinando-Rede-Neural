export interface TrainingCase {
    id: number;
    inputs: [number, number];
    expected: number;
    description: string;
    inputLabels: [string, string];
    outputLabel: string;
}