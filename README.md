<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Treinando Rede Neural

Esta é uma aplicação projetada para estudantes que desejam entender os fundamentos das Redes Neurais e do algoritmo de Retropropagação de uma forma prática e "manual".

Em vez de usar bibliotecas de alto nível (como TensorFlow ou PyTorch) que abstraem a matemática, esta ferramenta permite que **você** seja o algoritmo de otimização. Você ajustará manualmente os pesos e o bias de um neurônio simples para observar diretamente como suas escolhas impactam o erro do modelo.

## Demonstração

https://github.com/user-attachments/assets/2c259175-05f3-4c48-a577-c3bd725c9fcb

## Funcionalidades Principais

* **Visualização Simples:** Uma interface clara mostrando uma rede muito simples), suas entradas, pesos, bias e a saída.
* **Controle Manual:** Campos de entrada onde você pode definir o valor de cada peso e do bias.
* **Feedback Imediato:** A aplicação calcula automaticamente a saída da rede e o erro com base nos seus parâmetros.

## Tecnologias Utilizadas

* **React**
* **TypeScript**
* **Vite** 
* **Node.js** 
* **HTML5**
* **Google Gemini API**

## Como Rodar Localmente

### Pré-requisitos

  * [Node.js](https://nodejs.org/)
  * Uma chave de API do Gemini. Você pode obter a sua no [Google AI Studio](https://ai.studio/).

## 1. Clonagem do Repositório

Abra seu terminal e clone o projeto:

```bash
git clone https://github.com/MaduAraujo/Treinando-Rede-Neural.git
cd Treinando-Rede-Neural
```

### 2. Instalação de Dependências

Instale todas as dependências do projeto:

```bash
npm install
```

### 3. Configuração da Chave de API

Crie um arquivo chamado `.env.local` na raiz do projeto (se ele ainda não existir) e adicione sua chave de API do Gemini:

**.env.local**

```
GEMINI_API_KEY="SUA_CHAVE_DE_API_GEMINI_AQUI"
```

### 4. Execução da Aplicação

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```
A aplicação estará acessível em `http://localhost:5173` (ou outra porta indicada pelo Vite).
