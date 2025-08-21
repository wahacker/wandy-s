import React, { useEffect, useRef, useState } from 'react';

const SpeechRecognition =
  typeof window !== 'undefined' &&
  (window.SpeechRecognition || window.webkitSpeechRecognition);

function parseNameColor(text) {
  if (!text) return {};
  const colorMap = {
    vermelho: 'red',
    vermelha: 'red',
    azul: 'blue',
    verde: 'green',
    amarelo: 'yellow',
    amarela: 'yellow',
    preto: 'black',
    preta: 'black',
    branco: 'white',
    branca: 'white',
    red: 'red',
    blue: 'blue',
    green: 'green',
    yellow: 'yellow',
    black: 'black',
    white: 'white',
  };
  const regex = new RegExp(
    `\\b(\\w+)\\b\\s+(${Object.keys(colorMap).join('|')})`,
    'i'
  );
  const match = text.toLowerCase().match(regex);
  if (match) {
    return { name: match[1], color: colorMap[match[2]] };
  }
  return {};
}

// Dispara a requisição para registrar um cartão entregue.
// Retorna a resposta da API ou lança um erro em caso de falha.
async function giveCard(name, color, qty) {
  const response = await fetch('/api/cards', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, color, qty })
  });

  if (!response.ok) {
    throw new Error('Falha ao registrar o cartão');
  }

  return response.json();
}

export default function ClassCardsApp() {
  const [listening, setListening] = useState(false);
  const [feedback, setFeedback] = useState('');
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (!SpeechRecognition) {
      console.error('Speech recognition not supported');
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR,en-US';
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = async event => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join(' ');
      const { name, color } = parseNameColor(transcript);
      if (name && color) {
        try {
          await giveCard(name, color, 1);
          setFeedback(`Cartão enviado para ${name} (${color}).`);
        } catch (error) {
          console.error('Erro ao dar o cartão', error);
          setFeedback('Não foi possível enviar o cartão.');
        }
      }
    };

    recognition.onerror = event => {
      console.error('Speech recognition error', event);
    };

    recognition.onend = () => {
      if (recognitionRef.current && listening) {
        recognition.start();
      }
    };

    recognitionRef.current = recognition;
    if (listening) {
      recognition.start();
    }

    return () => {
      recognition.stop();
    };
  }, [listening]);

  const toggleListening = () => {
    setListening(prev => !prev);
    const recognition = recognitionRef.current;
    if (!recognition) return;
    if (!listening) recognition.start();
    else recognition.stop();
  };

  return (
    <div>
      <button onClick={toggleListening}>
        {listening ? 'Desativar microfone' : 'Ativar microfone'}
      </button>
      <p>Status: {listening ? 'listening' : 'paused'}</p>
      {feedback && <p>{feedback}</p>}
    </div>
  );
}
