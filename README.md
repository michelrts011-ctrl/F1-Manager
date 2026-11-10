# F1 Team Manager Simulator 0.9

Versão de estabilização baseada no build 0.8. Não adiciona grandes sistemas novos.

## Correções e reforços
- Normalização e validação dos dados da carreira ao carregar salvamentos.
- Preservação da chave de armazenamento existente para manter compatibilidade com carreiras anteriores.
- Validação dos valores financeiros antes do fechamento do mês.
- Proteção contra fechamento duplicado do mês durante o processamento.
- Proteção contra registro duplicado de pontos ao finalizar uma corrida.
- Escape de conteúdo persistido antes de inserir textos na interface HTML.
- Mantidos os sistemas existentes de equipes, contratos, finanças, desenvolvimento e corrida 2D.

## Como executar
Abra `index.html` em um navegador moderno. O jogo usa LocalStorage do próprio navegador.

## Validação realizada
- `node --check` no JavaScript embutido.
- Verificação de IDs HTML duplicados e referências literais ausentes.
- Testes de fumaça em ambiente JavaScript simulado: iniciar carreira, iniciar e concluir desenvolvimento, grid com 22 carros, pontuação de corrida sem duplicação, normalização de salvamento e escape HTML.
- A interface não foi validada manualmente em navegador gráfico nesta execução.
