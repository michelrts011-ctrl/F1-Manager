# F1 Team Manager Simulator · v0.7

## Correção principal
- Corrigido o tratamento de clique dos botões de desenvolvimento com delegação de eventos em um contêiner persistente.
- Removida a confirmação modal que interrompia o fluxo de início do projeto.
- O clique agora inicia diretamente o projeto, desconta o custo, registra a transação e atualiza a interface.
- Mensagens explícitas para carreira não iniciada, projeto já ativo, nível máximo e saldo insuficiente.
- A tela de desenvolvimento é atualizada ao ser aberta.

## Compatibilidade
- Mantém a mesma chave de armazenamento local da versão anterior (`ftms_v05_career`) para preservar a carreira salva no navegador.
- Continua sendo um simulador local, executado diretamente no navegador.

## Como usar
1. Extraia o ZIP.
2. Abra `index.html` no navegador.
3. Abra Desenvolvimento do carro e clique em Desenvolver.
4. Vá para Gestão financeira e clique em Fechar mês para concluir o projeto.
