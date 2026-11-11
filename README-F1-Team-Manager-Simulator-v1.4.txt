F1 TEAM MANAGER SIMULATOR · VERSÃO 1.4
FASE 5 · INTEGRAÇÃO GERAL, REVISÃO E ESTABILIZAÇÃO

COMO EXECUTAR
1. Extraia o ZIP para uma pasta.
2. Abra F1-Team-Manager-Simulator-v1.4.html em um navegador atualizado.
3. O progresso é salvo no armazenamento local do navegador.

O QUE FOI REVISADO NESTA VERSÃO
- Restauração de corridas salvas: clima, umidade da pista, bandeiras, Safety Car, VSC, bandeira vermelha, eventos recentes, danos e estado dos carros.
- Restauração correta de pneus slick, intermediários e de chuva extrema, inclusive pneus solicitados para a próxima parada.
- Integridade da temporada: o calendário agora recalcula a próxima etapa a partir das corridas efetivamente concluídas, evitando pular uma etapa em um salvamento inconsistente.
- A temporada só é marcada como concluída quando as 12 etapas constam como concluídas.
- Seleção do piloto da equipe por identificação, sem trocar o piloto controlado quando a classificação altera a ordem do grid.
- Revisão de metadados da versão e rolagem horizontal de tabelas em telas menores.
- Preservada a chave de armazenamento local usada pelas versões anteriores, para manter a compatibilidade das carreiras.

FUNCIONALIDADES MANTIDAS
- 11 equipes e 22 pilotos ficticiamente balanceados para o jogo.
- Gestão financeira, contratos e desenvolvimento técnico.
- Calendário com 12 etapas.
- Fim de semana com TL1, TL2, TL3, Q1, Q2, Q3 e corrida.
- Simulação de corrida, ritmo, pneus, pit stops, clima, bandeiras, incidentes e abandonos.
- Campeonato de pilotos e construtores, histórico e temporadas seguintes.

TESTES EXECUTADOS
- Verificação sintática do JavaScript com Node.js: aprovada.
- Testes automatizados isolados: restauração de dados de corrida, pneus especiais, danos, histórico de eventos, recuperação de etapa pendente, conclusão da temporada, agregação de pontos e seleção correta do piloto: aprovados.
- Integridade do pacote ZIP: verificada após a criação.

LIMITAÇÃO CONHECIDA DA VALIDAÇÃO
A execução automatizada em navegador headless não concluiu neste ambiente. Portanto, esta versão ainda precisa de validação manual no navegador, especialmente para percorrer um fim de semana completo, pausar e reabrir uma corrida salva, concluir um GP e avançar a temporada.

OBSERVAÇÃO
Os atributos, salários, orçamentos, tempos e resultados são parâmetros de simulação do jogo, não dados oficiais ou contratos reais.
