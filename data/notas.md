## Informações importantes

Este artigo trás algumas informações importante para trabalhar com os dados da pesquisa de mercado do Android Dev BR.

### Problemas identificados

- Devido a um problema de configuração, algumas pessoas que responderam sobre empresa no exterior acabaram sendo obrigadas a responder sobre trabalho freelacer, mesmo sem fazer esse tipo de função. Devido a esse problema e a baixa taxa de respondentes desta sessão, as informações de freelancer foram **removidos** da base.

- A pesquisa foi realizada durante um período de pandemia e isolamento social e, por isso, algumas informações relacionadas a trabalho remoto podem ter sido mal interpretadas e respondidas de forma diferente do que seria em um período normal. Algumas pessoas responderam relacionado a pandemia que ficou definido como "Remoto devido ao COVID" na coluna "WORK_PLACE".

### Sobre os Dados

- Respostas abertas foram normalizadas e/ou removidas de forma que quando existe uma padronização entre as respostas:
  - "STATE" que representa um campo aberto para falar de cidade e estado ou país de residência, foi normalizado para tratar apenas o estado ou continente. Portanto, no caso de uma resposta: "São Paulo - SP" fica "B-SP" com o prefixo "B" indicando que é um estado do Brasil, enquanto quem respondeu "Alemanha" fica "E-EU" com o prefixo "E" indicando que é do exterior e o continente abreviado.
  - "COMPANY_TYPE" que representa o campo sobre o ramo de atuação da empresa foi normalizado em 10 categorias: Tecnologia (TEC), Financeiro (FIN), Alimentação (ALI), E-commerce/Varejo (VAR), Comunicação (COM), Mobilidade (MOB),Logística (LOG), Educação (EDU), Entretenimento (ENT) e Outros (OUT).
  - o campo aberto sobre salário foi removido dos dados para preservar a privacidade.

- Alguns dados de respostas fechadas também foram normalizados a fim de facilitar o tratamento das informações:
  - O campo "GENDER" ficou foi reduzido: Feminino (F), Masculino (M), Outros/Abstenção (O).
  - "CONTRACT" que diz respeito a forma de contratação da pessoa respondente também foi normalizado: Estagiário, trabalhando até 30h por semana (EST), Empregado trabalhando pelo menos 40h por semana em regime CLT (CLT), Empregado trabalhando pelo menos 40h por semana em regime PJ ou similar (PJS), Trabalhando como freelancer (Freelancer) (FRE), Dono e/ou sócio do próprio negócio (SOC), Não estou trabalhando atualmente (NTR). Demais respostas abertas foram normalizadas e a maioria delas foi considerado como regime PJ ou similar (cooperativas, empresas do exterior, etc.).
  - Informações de faixas numéricas foram configurados para aparecer os números máximos e mínimos da faixa entre "-". No caso da última faixa que representa algo "Maior que x", esse valor ficou representado como x + 1. Por exemplo: ara uma resposta "Mais de 500", o dado foi normalizado para "501". Os campos em que isso ocorre são "COMPANY_SIZE", "SALARY_RANGE" e "ABROAD_SALARY_RANGE".
  - Respostas relacionadas estados do Brasil que tiveram poucas respostas foram tratados como outros, recebendo a sigla "OU".


### Respostas múltiplas

- Em perguntas que a pessoa pudesse escolher mais de uma, como em "BENEFITS" as respostas estão divididas por vírgula (","). No caso da pessoa não responder esta pergunta o dado fica vazio.
