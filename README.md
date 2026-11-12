F1 TEAM MANAGER SIMULATOR - VERSAO 2.0.0

\========================================

PRIMEIRA ENTREGA DA LINHA 2.0: MERCADO DE PILOTOS

COMO EXECUTAR

1. Extraia o arquivo ZIP para uma pasta.
1. Abra F1-Team-Manager-Simulator-v2.0.0.html no navegador (Chrome, Edge ou Firefox).
1. A aplicação funciona localmente e mantém a carreira no LocalStorage do navegador.

NOVIDADES DA VERSAO 2.0.0

- Nova área Mercado de pilotos.
- Seis pilotos fictícios disponíveis como agentes livres.
- Propostas salariais em três níveis: 90%, 100% e 115% da pretensão.
- Contratação de agente livre com escolha do piloto atual que será substituído.
- Troca direta com pilotos de outras equipes, mantendo duas vagas em cada equipe.
- Taxas de contratação/transferência debitadas do caixa.
- Atualização dos elencos da equipe, da grade de corrida e dos campeonatos.
- Histórico de movimentações integrado ao financeiro.
- Bloqueio de transferências durante um final de semana de GP ainda não concluído.
- Migração de carreiras anteriores sem apagar contratos, temporadas ou resultados existentes.

REGRAS DO MERCADO

- Os ratings, salários e taxas são parâmetros fictícios de gameplay.
- Uma proposta abaixo da pretensão salarial é recusada nesta primeira versão.
- Agentes livres são contratados por dois anos.
- Trocas com pilotos de outras equipes preservam duas vagas por escuderia.
- As mudanças de elenco são refletidas no grid das corridas e nas tabelas de campeonato.

COMPATIBILIDADE

- Mantém a chave LocalStorage usada pelas versões anteriores para preservar carreiras existentes.
- A migração cria o estado do mercado automaticamente para carreiras antigas.
- Recomenda-se manter uma cópia do HTML 1.4 e não limpar os dados do navegador antes de testar a migração.

LIMITES CONHECIDOS / PRÓXIMAS ENTREGAS

- A inteligência artificial completa das equipes rivais será desenvolvida na versão 2.0.1.
- O mercado inicial ainda usa um conjunto pequeno de agentes livres fictícios.
- A duração dos contratos é exibida e pode ser renovada; o ciclo completo de vencimento e renegociação automática será aprofundado em uma etapa posterior.
- O comportamento da aceitação de propostas é simplificado nesta primeira entrega.

VALIDACAO REALIZADA NESTA ENTREGA

- Sintaxe JavaScript validada com Node.js.
- Testes isolados de contratação de agente livre e troca entre equipes.
- Verificação de duas vagas por equipe e ausência de nomes duplicados após as movimentações.
- Teste de migração preservando salário e duração de contrato de carreira anterior.
- Verificação da estrutura do arquivo ZIP.
- A inicialização automatizada do Chromium excedeu o tempo limite neste ambiente; é necessário teste manual no navegador.

IMPORTANTE

Faça o teste com uma cópia da sua carreira. Não apague a versão anterior até confirmar que sua carreira foi carregada corretamente.
