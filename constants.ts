import type { TrainingCase } from './types';

export const TRAINING_DATA: TrainingCase[] = [
    {
        id: 1,
        inputs: [1, 1],
        expected: 1,
        description: "Está ensolarado e tenho tempo livre. Devo ir correr.",
        inputLabels: ["Ensolarado", "Tempo Livre"],
        outputLabel: "Vai Correr"
    },
    {
        id: 2,
        inputs: [1, 0],
        expected: 0,
        description: "Está ensolarado, mas não tenho tempo livre. Não devo ir correr.",
        inputLabels: ["Ensolarado", "Tempo Livre"],
        outputLabel: "Vai Correr"
    },
    {
        id: 3,
        inputs: [0, 1],
        expected: 0,
        description: "Não está ensolarado, mas tenho tempo livre. Não devo ir correr.",
        inputLabels: ["Ensolarado", "Tempo Livre"],
        outputLabel: "Vai Correr"
    },
    {
        id: 4,
        inputs: [0, 0],
        expected: 0,
        description: "Não está ensolarado e não tenho tempo livre. Definitivamente não vou correr.",
        inputLabels: ["Ensolarado", "Tempo Livre"],
        outputLabel: "Vai Correr"
    },
];