import React from 'react';
import type { TrainingCase } from '../types';

interface ControlPanelProps {
    w1: number;
    setW1: (value: number) => void;
    w2: number;
    setW2: (value: number) => void;
    bias: number;
    setBias: (value: number) => void;
    currentCase: TrainingCase;
    weightedSum: number;
    modelOutput: number;
    error: number;
    isCorrect: boolean;
    allCasesCorrect: boolean;
    handleNextCase: () => void;
    handleResetWeights: () => void;
}

const Slider: React.FC<{ label: string, value: number, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ label, value, onChange }) => (
    <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">{label}: <span className="font-bold text-cyan-400">{value.toFixed(2)}</span></label>
        <input
            type="range"
            min="-2"
            max="2"
            step="0.01"
            value={value}
            onChange={onChange}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
        />
    </div>
);

const ResultCard: React.FC<{ label: string, value: string | number, bgColor?: string }> = ({ label, value, bgColor = 'bg-gray-700/50' }) => (
    <div className={`p-3 rounded-md text-center ${bgColor}`}>
        <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
        <div className="text-2xl font-bold font-mono text-white">{typeof value === 'number' ? value.toFixed(2) : value}</div>
    </div>
);

export const ControlPanel: React.FC<ControlPanelProps> = ({
    w1, setW1, w2, setW2, bias, setBias, currentCase,
    weightedSum, modelOutput, error, isCorrect, allCasesCorrect,
    handleNextCase, handleResetWeights
}) => {
    
    return (
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 shadow-lg flex flex-col gap-6">
            <div>
                <h3 className="text-xl font-bold text-gray-300">Painel de Controle</h3>
                <p className="text-sm text-gray-500">Ajuste os pesos e o bias para treinar a rede.</p>
            </div>
            
            <div className="bg-gray-900/70 p-4 rounded-lg border border-gray-600">
                <p className="text-sm text-center text-gray-400">
                    <span className="font-bold text-gray-300">Caso de Teste {currentCase.id}/4:</span> "{currentCase.description}"
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Slider label="Peso 1 (w1)" value={w1} onChange={(e) => setW1(parseFloat(e.target.value))} />
                <Slider label="Peso 2 (w2)" value={w2} onChange={(e) => setW2(parseFloat(e.target.value))} />
                <Slider label="Bias (b)" value={bias} onChange={(e) => setBias(parseFloat(e.target.value))} />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ResultCard label="Soma Ponderada" value={weightedSum} />
                <ResultCard label="Saída do Modelo" value={modelOutput} />
                <ResultCard label="Saída Esperada" value={currentCase.expected} />
                <ResultCard label="Erro" value={error} bgColor={isCorrect ? "bg-green-500/30" : "bg-red-500/30"} />
            </div>

            {allCasesCorrect && (
                 <div className="bg-green-500/20 border border-green-500 text-green-300 text-center p-4 rounded-lg animate-pulse">
                    <h4 className="font-bold">Parabéns! Você treinou a rede!</h4>
                    <p className="text-sm">Os pesos e bias que você encontrou resolvem todos os casos de teste.</p>
                </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={handleNextCase}
                    className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                    Próximo Caso de Teste
                </button>
                <button
                    onClick={handleResetWeights}
                    className="flex-1 bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                    Resetar Pesos
                </button>
            </div>
        </div>
    );
};