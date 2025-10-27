import React, { useState, useMemo, useCallback } from 'react';
import { NetworkVisualizer } from './components/NetworkVisualizer';
import { ControlPanel } from './components/ControlPanel';
import { Explanation } from './components/Explanation';
import type { TrainingCase } from './types';
import { TRAINING_DATA } from './constants';

const App: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const getRandomValue = () => parseFloat((Math.random() * 2 - 1).toFixed(2));

    const [w1, setW1] = useState(getRandomValue());
    const [w2, setW2] = useState(getRandomValue());
    const [bias, setBias] = useState(getRandomValue());
    const [currentCaseIndex, setCurrentCaseIndex] = useState(0);

    const currentCase: TrainingCase = TRAINING_DATA[currentCaseIndex];
    const { inputs, expected } = currentCase;
    const [input1, input2] = inputs;

    const { weightedSum, modelOutput, error, isCorrect } = useMemo(() => {
        const sum = (input1 * w1) + (input2 * w2) + bias;
        const output = sum > 0 ? 1 : 0;
        const err = expected - output;
        return {
            weightedSum: sum,
            modelOutput: output,
            error: err,
            isCorrect: err === 0,
        };
    }, [input1, input2, w1, w2, bias, expected]);

    const handleNextCase = useCallback(() => {
        setCurrentCaseIndex((prevIndex) => (prevIndex + 1) % TRAINING_DATA.length);
    }, []);

    const handleResetWeights = useCallback(() => {
        setW1(getRandomValue());
        setW2(getRandomValue());
        setBias(getRandomValue());
    }, []);
    
    const allCasesCorrect = useMemo(() => {
        return TRAINING_DATA.every(c => {
            const sum = (c.inputs[0] * w1) + (c.inputs[1] * w2) + bias;
            const output = sum > 0 ? 1 : 0;
            return output === c.expected;
        });
    }, [w1, w2, bias]);

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 font-sans p-4 sm:p-6 lg:p-8 flex flex-col">
            <header className="text-center mb-8">
                <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400">Treinando uma Rede Neural</h1>
                <p className="text-lg text-gray-400 mt-2 max-w-3xl mx-auto">Uma simulação interativa para entender como as redes neurais aprendem.</p>
            </header>

            <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto flex-grow w-full">
                <div className="flex flex-col gap-8">
                   <ControlPanel
                        w1={w1}
                        setW1={setW1}
                        w2={w2}
                        setW2={setW2}
                        bias={bias}
                        setBias={setBias}
                        currentCase={currentCase}
                        weightedSum={weightedSum}
                        modelOutput={modelOutput}
                        error={error}
                        isCorrect={isCorrect}
                        handleNextCase={handleNextCase}
                        handleResetWeights={handleResetWeights}
                        allCasesCorrect={allCasesCorrect}
                    />
                     <NetworkVisualizer
                        inputs={inputs}
                        weights={[w1, w2]}
                        bias={bias}
                        output={modelOutput}
                    />
                </div>
                <div className="lg:mt-0">
                    <Explanation />
                </div>
            </main>
            <footer className="w-full mt-auto py-4 border-t border-slate-700/50 bg-slate-900">
              <div className="container mx-auto px-4 text-center text-sm text-slate-500">
               <p>&copy; {currentYear} Treinando uma Rede Neural. Todos os direitos reservados.</p>
              </div>
            </footer>
        </div>
    );
};

export default App;