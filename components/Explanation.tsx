import React, { useState } from 'react';

const AccordionItem: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-700">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left p-4 hover:bg-gray-800 focus:outline-none"
            >
                <span className="text-lg font-semibold text-cyan-400">{title}</span>
                <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            {isOpen && (
                <div className="p-4 bg-gray-800/50">
                    <div className="text-gray-300 space-y-3">{children}</div>
                </div>
            )}
        </div>
    );
};


export const Explanation: React.FC = () => {
    return (
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 shadow-lg h-full">
            <h3 className="text-2xl font-bold mb-4 text-gray-300 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
                Guia Teórico-Prático
            </h3>
            <div className="bg-gray-900/50 rounded-lg overflow-hidden">
                <AccordionItem title="🧠 O que é um Neurônio Artificial?">
                    <p>Pense nele como um pequeno 'decisor'. Ele recebe informações (as 'Entradas'), pondera a importância de cada uma delas (usando os 'Pesos') e, com base nisso, toma uma decisão de 'ativar' (saída 1) ou 'não ativar' (saída 0).</p>
                </AccordionItem>
                <AccordionItem title="⚖️ O que são Pesos e Bias?">
                    <p><strong className="text-cyan-300">Pesos (w1, w2):</strong> Determinam a importância de cada entrada. Um peso maior significa que a entrada correspondente tem mais influência na decisão final. Um peso negativo significa que a entrada tem uma influência 'inibidora'.</p>
                    <p><strong className="text-cyan-300">Bias (b):</strong> É como um 'empurrãozinho' ou 'freio'. Ele ajusta o limiar de ativação do neurônio. Um bias positivo torna mais fácil para o neurônio 'ativar', enquanto um bias negativo torna mais difícil.</p>
                </AccordionItem>
                <AccordionItem title="⚙️ Como a Rede 'Pensa'?">
                    <p>O processo é simples:</p>
                    <ol className="list-decimal list-inside space-y-2 pl-2">
                        <li><strong>Multiplicação:</strong> Cada valor de entrada é multiplicado pelo seu peso correspondente.</li>
                        <li><strong>Soma Ponderada:</strong> Todos os resultados da multiplicação são somados, e o bias também é adicionado a essa soma.</li>
                        <li><strong>Função de Ativação:</strong> A 'decisão' final. Nesta simulação, usamos uma função simples: se a <strong className="text-white">Soma Ponderada for maior que 0</strong>, a saída é 1. Caso contrário, é 0.</li>
                    </ol>
                     <pre className="bg-gray-900 text-cyan-300 p-2 rounded-md mt-2 text-sm">
                        <code>Soma = (Entrada1 * w1) + (Entrada2 * w2) + b</code>
                    </pre>
                </AccordionItem>
                 <AccordionItem title="🎯 Seu Objetivo: O Treinamento Manual">
                    <p>O 'treinamento' de uma rede neural é o processo de encontrar os valores de Pesos e Bias corretos para que ela sempre produza a saída esperada para qualquer entrada.</p>
                    <p>Aqui, você é o algoritmo de 'retropropagação'! Sua tarefa é:</p>
                    <ol className="list-decimal list-inside space-y-2 pl-2">
                         <li>Observar o 'Erro' (Diferença entre a saída do modelo e a esperada).</li>
                         <li>Ajustar os sliders de Pesos e Bias para tentar zerar o erro no caso de teste atual.</li>
                         <li>Avançar para o próximo caso e verificar se seus ajustes ainda funcionam. Se não, reajuste!</li>
                         <li>O desafio é encontrar <strong className="text-white">UM conjunto de Pesos e Bias</strong> que funcione para <strong className="text-white">TODOS os 4 casos de teste</strong> ao mesmo tempo.</li>
                    </ol>
                </AccordionItem>
            </div>
        </div>
    );
};