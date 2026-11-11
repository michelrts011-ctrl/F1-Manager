F1 TEAM MANAGER SIMULATOR · BUILD 1.1.0
======================================

FASE 2: FIM DE SEMANA DE GRANDE PRÊMIO

Novidades:
- Fim de semana dividido em TL1, TL2, TL3, Q1, Q2, Q3 e Corrida.
- Sessões precisam ser concluídas em ordem para liberar a corrida.
- Treinos livres geram resultados para os 22 pilotos.
- O desempenho nos treinos gera um pequeno bônus de acerto para o carro da equipe do jogador.
- Q1 elimina os seis pilotos mais lentos.
- Q2 elimina mais seis pilotos.
- Q3 define a pole e as dez primeiras posições do grid.
- O grid de largada é aplicado à simulação 2D da corrida.
- Resultados e etapas concluídas são registrados no campeonato.
- A sessão atual e os resultados de treinos/classificação são salvos na carreira.
- O estado da corrida também é salvo periodicamente, ao pausar e ao fechar a página.
- Se a página for reaberta durante uma corrida, a simulação retoma o progresso salvo.
- Carreiras anteriores são normalizadas sem alterar os dados financeiros e de desenvolvimento.

COMO JOGAR:
1. Abra o arquivo HTML em um navegador moderno.
2. Carregue ou inicie uma carreira.
3. Acesse Calendário e clique em "Ir para a próxima etapa".
4. Conclua TL1, TL2, TL3, Q1, Q2 e Q3.
5. Após a classificação, a central de corrida será liberada.
6. Inicie a corrida, controle ritmo e estratégia de pit stop.
7. Ao cruzar a bandeirada, o resultado é registrado e o calendário avança.

OBSERVAÇÕES:
- Temporada compacta de 12 etapas e corridas demonstrativas de 12 voltas.
- Tempos e ratings são parâmetros fictícios de jogo, não dados oficiais.
- O progresso da temporada e das sessões é salvo no armazenamento local do navegador.
- Se limpar os dados do navegador, a carreira salva localmente também será apagada.

VALIDAÇÃO REALIZADA NESTA BUILD:
- Verificação de sintaxe JavaScript com Node.js.
- Teste automatizado em Chromium com fluxo de carreira, seis sessões, grid de 22 pilotos,
  bônus de acerto, início/pausa, restauração do progresso da corrida e conclusão da prova.
- O teste confirmou o registro do resultado e avanço do calendário para a etapa seguinte.
- Nenhum erro JavaScript de página foi observado durante o fluxo automatizado.
