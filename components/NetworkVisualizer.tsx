import React from 'react';

interface NetworkVisualizerProps {
    inputs: [number, number];
    weights: [number, number];
    bias: number;
    output: number;
}

const Neuron: React.FC<{ label: string; value: number | string; x: number; y: number; isActive?: boolean, isOutput?: boolean }> = ({ label, value, x, y, isActive, isOutput }) => (
    <g transform={`translate(${x}, ${y})`} className="transition-all duration-300">
        <circle 
            cx="0" 
            cy="0" 
            r="35" 
            className={`stroke-2 ${isOutput ? 'stroke-cyan-400' : 'stroke-gray-500'} ${isActive ? 'fill-cyan-500/30' : 'fill-gray-800'}`}
        />
        <text x="0" y="-5" textAnchor="middle" className="fill-gray-300 text-xs font-mono">{label}</text>
        <text x="0" y="15" textAnchor="middle" className="fill-white text-lg font-bold font-mono">{value}</text>
    </g>
);

const Connection: React.FC<{ x1: number, y1: number, x2: number, y2: number, weight: number }> = ({ x1, y1, x2, y2, weight }) => {
    const opacity = Math.min(1, Math.abs(weight) * 0.5 + 0.1).toFixed(2);
    const color = weight > 0 ? `rgba(5, 255, 159, ${opacity})` : `rgba(255, 87, 102, ${opacity})`; // Green for positive, Red for negative
    const strokeWidth = Math.min(8, Math.abs(weight) * 3 + 1);

    return (
         <g>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={strokeWidth} className="transition-all duration-300" />
            <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 10} textAnchor="middle" className="fill-white font-mono text-sm" style={{ paintOrder: 'stroke', stroke: '#111827', strokeWidth: '4px', strokeLinejoin: 'round' }}>
                {weight.toFixed(2)}
            </text>
        </g>
    );
};


export const NetworkVisualizer: React.FC<NetworkVisualizerProps> = ({ inputs, weights, bias, output }) => {
    return (
        <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-center text-gray-300">Visualização da Rede</h3>
            <div className="w-full aspect-video flex items-center justify-center">
                <svg viewBox="0 0 400 250" className="w-full h-full">
                    {/* Neurônios de Entrada */}
                    <Neuron label="Entrada 1" value={inputs[0]} x={50} y={50} isActive={inputs[0] === 1} />
                    <Neuron label="Entrada 2" value={inputs[1]} x={50} y={200} isActive={inputs[1] === 1} />
                    
                    {/* Neurônio de Bias */}
                    <g transform="translate(175, 210)">
                         <circle cx="0" cy="0" r="25" className="stroke-2 stroke-gray-500 fill-gray-800" />
                         <text x="0" y="-5" textAnchor="middle" className="fill-gray-300 text-xs font-mono">Bias</text>
                         <text x="0" y="12" textAnchor="middle" className="fill-white text-sm font-bold font-mono">{bias.toFixed(2)}</text>
                    </g>
                    
                    {/* Neurônio de Saída */}
                    <Neuron label="Saída" value={output} x={350} y={125} isActive={output === 1} isOutput />

                    {/* Conexões */}
                    <Connection x1={85} y1={50} x2={315} y2={125} weight={weights[0]} />
                    <Connection x1={85} y1={200} x2={315} y2={125} weight={weights[1]} />
                    <line x1={190} y1={195} x2={315} y2={135} stroke="rgba(200, 200, 200, 0.4)" strokeWidth="2" strokeDasharray="4" />
                </svg>
            </div>
        </div>
    );
};