## Mercado de Desenvolvimento Android - Android Dev BR

Olá,

Com o intuito de entender melhor a nossa comunidade e melhorar nossas iniciativas, criamos essa pesquisa para  avaliar o cenário dos desenvolvedores Android brasileiros no mercado de trabalho (salário, beneficios, regime de contratação etc).
A pesquisa é confidencial e feita exclusiva para fins de informação. Nenhum dado sensível que possa identificar a pessoa que respondeu será divulgado.

Por favor, pedimos honestidade nas respostas para que o nosso resultado seja correspondente com a realidade.

A Android Dev BR agradece :)

### Dados demográficos
Primeiro precisamos entender melhor quem faz parte da nossa comunidade

|              Pergunta               |     Tipo      | Alias  |
| :---------------------------------: | :-----------: | :----: |
| Com qual gênero você se identifica? | Escolha única | GENDER |
**Opções de resposta:**
- [ ] Feminino (F)
- [ ] Masculino (M)
- [ ] Prefiro não dizer (O)
- [ ] Outro (O)

|             Pergunta             |     Tipo      | Alias  |
| :------------------------------: | :-----------: | :----: |
| Qual o seu grau de escolaridade? | Escolha única | DEGREE |
**Opções de resposta:**
- [ ] Ensino médio incompleto
- [ ] Ensino médio completo
- [ ] Ensino superior incompleto
- [ ] Ensino superior completo
- [ ] Pós-graduação
- [ ] Mestrado
- [ ] Doutorado
- [ ] Pós-doutorado
- [ ] Outro

|             Pergunta              |     Tipo      |   Alias   |
| :-------------------------------: | :-----------: | :-------: |
| Em qual faixa etária se encontra? | Escolha única | AGE_RANGE |
**Opções de resposta:**
- [ ] Menos de 17 anos (17)
- [ ] 18 a 20 anos (18-20)
- [ ] 21 a 29 anos (21-19)
- [ ] 30 a 39 anos (30-39)
- [ ] 40 a 49 anos (40-49)
- [ ] Acima de 50 anos (51)

|                    Pergunta                    |       Tipo       |        Alias         |
| :--------------------------------------------: | :--------------: | :------------------: |
| Você se identifica em algum dos grupos abaixo? | Múltipla escolha | BLACK & LGBTQIA_PLUS |
**Opções de resposta:**
- [ ] LGBTQI+ (S/N)
- [ ] Negros (S/N)
- [ ] Indígena
- [ ] PCD

Como o número de pessoas que responderam que se identificam como indígenas ou PCDs não foi suficiente para preservar a privacidade delas, decidimos remover essas informações da base de dados pública.

|                                         Pergunta                                         |     Tipo     | Alias |
| :--------------------------------------------------------------------------------------: | :----------: | :---: |
| Em qual cidade e estado você mora? No caso de pessoas morando no exterior, em qual país? | Campo aberto | STATE |

As informações deste campo foram normalizados conforme indicado nas [notas](notas.md) sobre a base de dados.

|                                 Pergunta                                  |     Tipo      |  Alias   |
| :-----------------------------------------------------------------------: | :-----------: | :------: |
| Qual das seguintes opções descreve o seu cenário empregatício atualmente? | Escolha única | CONTRACT |
**Opções de resposta:**
- [ ] Estagiário, trabalhando até 30h por semana (EST)
- [ ] Empregado trabalhando pelo menos 40h por semana em regime CLT (CLT)
- [ ] Empregado trabalhando pelo menos 40h por semana em regime PJ ou similar (PJS)
- [ ] Trabalhando como freelancer (Freelancer) (FRE) ➜ Sessão sobre [trabalho freelancer](#freelancer)
- [ ] Dono e/ou sócio do próprio negócio (SOC)
- [ ] Não estou trabalhando atualmente (NTR) ➜ Finaliza formulário

### Contexto Trabalhista
Agora queremos entender um pouco o contexto trabalhista em que se encontra atualmente.


|     Pergunta      |     Tipo      |   Alias    |
| :---------------: | :-----------: | :--------: |
| O seu trabalho é: | Escolha única | WORK_PLACE |
**Opções de resposta:**
- [ ] Totalmente presencial
- [ ] Totalmente remoto
- [ ] Parcialmente presencial
- [ ] Outro

Neste campo diversas pessoas sinalizaram estar trabalhando remoto devido a pandemia do COVID-19. Por isso essas respostas foram normalizadas como "Remoto devido ao COVID".

|                Pergunta                 |     Tipo     |    Alias     |
| :-------------------------------------: | :----------: | :----------: |
| Qual o ramo da empresa em que trabalha? | Campo aberto | COMPANY_TYPE |

As informações deste campo foram normalizados conforme indicado nas [notas](notas.md) sobre a base de dados.

|                            Pergunta                            |     Tipo      |    Alias     |
| :------------------------------------------------------------: | :-----------: | :----------: |
| Quantas pessoas, no total trabalham na mesma empresa que você? | Escolha única | COMPANY_SIZE |
**Opções de resposta:**
- [ ] 1 a 5 (1-5)
- [ ] 6 a 10 (6-10)
- [ ] 11 a 50 (11-50)
- [ ] 51 a 100 (51-100)
- [ ] 101 a 500 (101-500)
- [ ] Mais de 500 (501)
- [ ] Não sei (0)

|           Pergunta            |     Tipo      |      Alias       |
| :---------------------------: | :-----------: | :--------------: |
| No exercício do seu trabalho: | Escolha única | ANDROID_ACTIVITY |
**Opções de resposta:**
- [ ] Tem como função principal o desenvolvimento android
- [ ] Tem como função secundária o desenvolvimento android
- [ ] Não está relacionado a desenvolvimento android ➜ Finaliza formulário
- [ ] Não está relacionado a desenvolvimento em geral ➜ Finaliza formulário

### Desenvolvimento Android
Queremos entender melhor o cenário específico do desenvolvimento Android por brasileiros.

|          Pergunta           |     Tipo      |   Alias    |
| :-------------------------: | :-----------: | :--------: |
| Qual o nível da sua função? | Escolha única | WORK_LEVEL |
**Opções de resposta:**
- [ ] Estagiário/Trainee
- [ ] Júnior
- [ ] Pleno
- [ ] Sênior
- [ ] Líder Técnico
- [ ] Especialista
- [ ] Diretor
- [ ] Outro

|                                     Pergunta                                      |     Tipo      |   Alias    |
| :-------------------------------------------------------------------------------: | :-----------: | :--------: |
| Quantas pessoas trabalham diretamente com desenvolvimento android na sua empresa? | Escolha única | WORK_LEVEL |
**Opções de resposta:**
- [ ] 1 a 2 (1-2)
- [ ] 3 a 5 (3-5)
- [ ] 5 a 10 (5-10)
- [ ] Mais de 10 (11)

|           Pergunta            |     Tipo      |       Alias       |
| :---------------------------: | :-----------: | :---------------: |
| A empresa tem sede no Brasil? | Escolha única | COMPANY_IN_BRAZIL |
**Opções de resposta:**
- [ ] Sim (S) ➜ Sessão [empresa no Brasil](#empresa-no-brasil)
- [ ] Não (N) ➜ Sessão [empresa no exterior](#empresa-no-exterior)

### Empresa no Brasil
Queremos entender o contexto de quem trabalha no Brasil, dentro das políticas disponíveis de contratação.

|                    Pergunta                    |       Tipo       |     Alias     |
| :--------------------------------------------: | :--------------: | :-----------: |
| Em qual estado fica a empresa em que trabalha? | Caixa de seleção | COMPANY_STATE |
**Opções de resposta:**
- 26 estados do Brasil e o Distrito Federal

|                Pergunta                 |     Tipo      |     Alias      |
| :-------------------------------------: | :-----------: | :------------: |
| A empresa em que trabalha está situada: | Escolha única | COMPANY_REGION |
**Opções de resposta:**
- [ ] Em uma região metropolitana
- [ ] No interior

|          Pergunta          |     Tipo      |    Alias     |
| :------------------------: | :-----------: | :----------: |
| Qual a sua faixa salarial? | Escolha única | SALARY_RANGE |
**Opções de resposta:**
- [ ] Até R\$ 1.000,00 (1000)
- [ ] De R\$ 1.001,00 a R\$ 3.000,00 (1000-3000)
- [ ] De R\$ 3.001,00 a R\$ 6.000,00 (3000-6000)
- [ ] De R\$ 6.001,00 a R\$ 9.000,00 (6000-9000)
- [ ] De R\$ 9.001,00 a R\$ 12.000,00 (9000-12000)
- [ ] De R\$ 12.001,00 a R\$ 15.000,00 (12000-15000)
- [ ] Mais de R$ 15.000,00 (15001)


|      Pergunta       |     Tipo     | Alias |
| :-----------------: | :----------: | :---: |
| Qual o seu salário? | Campo aberto |   -   |

Esta informação não foi incluída nos dados públicos de forma a preservar a privacidade das pessoas que responderam.

|                  Pergunta                  |       Tipo       |  Alias   |
| :----------------------------------------: | :--------------: | :------: |
| Quais benefícios a sua empresa te oferece? | Múltipla escolha | BENEFITS |
**Opções de resposta:**
- [ ] Plano de saúde
- [ ] Plano odontológico
- [ ] Vale alimentação
- [ ] Vale refeição
- [ ] Vale transporte
- [ ] Estacionamento
- [ ] Seguro de vida
- [ ] Auxílio creche
- [ ] Auxílio para estudo
- [ ] Auxílio para eventos
- [ ] Home office parcial (alguns dias da semana)
- [ ] Home office liberado (sem restrições)
- [ ] Férias (no caso de PJ)
- [ ] 13º Salário (no caso de PJ)
- [ ] Nenhum benefício
- [ ] Outro

|                                          Pergunta                                           |     Tipo      | Alias |
| :-----------------------------------------------------------------------------------------: | :-----------: | :---: |
| Em geral, qual a sua satisfação, em relação a salário, benefícios e trabalho com a empresa? | Escolha única |   -   |
**Opções de resposta:**
- [ ] Muito insatisfeito
- [ ] Pouco insatisfeito
- [ ] Indiferente
- [ ] Pouco satisfeito
- [ ] Muito satisfeito

Esta informação foi removida dos dados públicos para preservar as pessoas que responderam a pesquisa.

➜ Finalizar quetionário

### Empresa no exterior
Queremos entender o contexto de trabalho com desenvolvimento android de quem trabalha no exterior.

|               Pergunta               |     Tipo      |          Alias           |
| :----------------------------------: | :-----------: | :----------------------: |
| Onde fica a empresa em que trabalha? | Escolha única | ABROAD_COMPANY_CONTINENT |
**Opções de resposta:**
- [ ] África (AF)
- [ ] América central (AC)
- [ ] América do norte (AN)
- [ ] América do sul (AS)
- [ ] Antártida (AT)
- [ ] Ásia (AI)
- [ ] Europa (EU)
- [ ] Oceania (OC)

|           Pergunta           |     Tipo     | Alias |
| :--------------------------: | :----------: | :---: |
| Em qual país fica a empresa? | Campo aberto |   -   |

Este campo foi removido para preservar a privacidade das pessoas que responderam a pesquisa

|       Pergunta        |     Tipo      |      Alias      |
| :-------------------: | :-----------: | :-------------: |
| Em qual moeda recebe? | Escolha única | ABROAD_CURRENCY |
**Opções de resposta:**
- [ ] Dólar americano (USD)
- [ ] Euro (EUR)
- [ ] Libra (OUT)
- [ ] Outro (OUT, BRL)

|                     Pergunta                     |     Tipo      |        Alias        |
| :----------------------------------------------: | :-----------: | :-----------------: |
| Qual a sua faixa salarial bruta, na moeda local? | Escolha única | ABROAD_SALARY_RANGE |
**Opções de resposta:**
- [ ] Até \$ 1.000,00 (1000)
- [ ] De \$ 1.001,00 a \$ 3.000,00 (1000-3000)
- [ ] De \$ 3.001,00 a \$ 6.000,00 (3000-6000)
- [ ] De \$ 6.001,00 a \$ 9.000,00 (6000-9000)
- [ ] De \$ 9.001,00 a \$ 12.000,00 (9000-12000)
- [ ] Acima de \$ 12.000,00 (12001)

|                                          Pergunta                                           |     Tipo      |         Alias         |
| :-----------------------------------------------------------------------------------------: | :-----------: | :-------------------: |
| No caso de realocação, recebeu auxílio para fazer os documentos de migração e para moradia? | Escolha única | ABROAD_RELOCATION_AID |
**Opções de resposta:**
- [ ] Sim (S)
- [ ] Não (N)
- [ ] Não tive realocação (N/A)

|                                          Pergunta                                           |     Tipo      | Alias |
| :-----------------------------------------------------------------------------------------: | :-----------: | :---: |
| Em geral, qual a sua satisfação, em relação a salário, benefícios e trabalho com a empresa? | Escolha única |   -   |
**Opções de resposta:**
- [ ] Muito insatisfeito
- [ ] Pouco insatisfeito
- [ ] Indiferente
- [ ] Pouco satisfeito
- [ ] Muito satisfeito

Esta informação foi removida dos dados públicos para preservar as pessoas que responderam a pesquisa.

➜ Finalizar quetionário

### Freelancer
Queremos entender o cenário de quem trabalha como freelancer no desenvolvimento Android

**Importante:** as informações desta sessão foram removidas devido ao baixo número de respostas.

|                            Pergunta                            |     Tipo      | Alias |
| :------------------------------------------------------------: | :-----------: | :---: |
| Em quantos projetos você trabalha com desenvolvimento android? | Escolha única |   -   |
**Opções de resposta:**
- [ ] Nenhum
- [ ] 1 a 2
- [ ] 3 a 5
- [ ] Mais de 5

|                  Pergunta                   |     Tipo      | Alias |
| :-----------------------------------------: | :-----------: | :---: |
| Qual a faixa de valor por hora você recebe? | Escolha única |   -   |
**Opções de resposta:**
- [ ] Até R\$ 50,00
- [ ] De R\$ 51,00 a R\$ 100,00
- [ ] De R\$ 101,00 a R\$ 200,00
- [ ] Mais de R\$ 200,00

|                   Pergunta                   |     Tipo     | Alias |
| :------------------------------------------: | :----------: | :---: |
| Qual o valor por hora você recebe, em média? | Campo aberto |   -   |

|           Pergunta           |     Tipo      | Alias |
| :--------------------------: | :-----------: | :---: |
| Os projetos em que trabalha: | Escolha única |   -   |
**Opções de resposta:**
- [ ] São todos brasileiros
- [ ] Maior parte são brasileiros
- [ ] Metade são brasileiros e metade são estrangeiros
- [ ] Maior parte são estrangeiros
- [ ] São todos estrangeiros

|       Pergunta       |     Tipo      | Alias |
| :------------------: | :-----------: | :---: |
| Você presta serviço: | Escolha única |   -   |
**Opções de resposta:**
- [ ] Apenas para pessoa física
- [ ] A maior parte para pessoa física
- [ ] Metade para pessoa física e metade para pessoa jurídica
- [ ] A Maior parte para pessoa jurídica
- [ ] Apenas para pessoa jurídica
- [ ] Outro

➜ Finaliza questionário

---

### Feedbacks

Para entender melhor a atuação da comunidade e o impacto que ela causa nas pessoas, antes de finalizar o questionário fizemos mais algumas perguntas para obter um feedback dos participantes do Android Dev BR.

Como essas informações são apenas para operacionalização interna, também não serão divulgadas.

#### Android Dev BR
Queremos entender o alcance da nossa comunidade

|                 Pergunta                  |     Tipo      | Alias |
| :---------------------------------------: | :-----------: | :---: |
| Você conhece a comunidade Android Dev BR? | Escolha única |   -   |
**Opções de resposta:**
- [ ] Sim ➜ Vai para [sessão de feedback](#a-comunidade-android-dev-br)
- [ ] Não ➜ Finaliza

|           Pergunta            |     Tipo      | Alias |
| :---------------------------: | :-----------: | :---: |
| Você faz parte da comunidade? | Escolha única |   -   |
**Opções de resposta:**
- [ ] Sim ➜ Vai para [sessão de feedback](#a-comunidade-android-dev-br)
- [ ] Não ➜ Finaliza

#### A Comunidade Android Dev BR
Queremos entender o conteúdo mais relevante pra você e como podemos melhorar nossas iniciativas

|                   Pergunta                    |       Tipo       | Alias |
| :-------------------------------------------: | :--------------: | :---: |
| Você utiliza qual(is) das nossas iniciativas? | Múltipla escolha |   -   |
**Opções de resposta:**
- [ ] Slack
- [ ] Medium
- [ ] Mural de vagas
- [ ] Podcast
- [ ] Material de estudo
- [ ] Canal do YouTube
- [ ] Newsletter
- [ ] Nenhuma
- [ ] Outra


|                                Pergunta                                |     Tipo      | Alias |
| :--------------------------------------------------------------------: | :-----------: | :---: |
| A comunidade Android Dev BR contribui para a evolução do meu trabalho. | Escolha única |   -   |
**Opções de resposta:**
- [ ] Discordo totalmente
- [ ] Discordo parcialmente
- [ ] Não concordo nem discordo
- [ ] Concordo parcialmente
- [ ] Concordo totalmente

|                                          Pergunta                                          |     Tipo      | Alias |
| :----------------------------------------------------------------------------------------: | :-----------: | :---: |
| A comunidade Android Dev BR é inclusiva e propicia a diversidade e respeito às diferenças. | Escolha única |   -   |
**Opções de resposta:**
- [ ] Discordo totalmente
- [ ] Discordo parcialmente
- [ ] Não concordo nem discordo
- [ ] Concordo parcialmente
- [ ] Concordo totalmente

|                          Pergunta                          |     Tipo     | Alias |
| :--------------------------------------------------------: | :----------: | :---: |
| Sente falta de algum conteúdo ou iniciativa na comunidade? | Campo aberto |   -   |

|                                          Pergunta                                           |     Tipo     | Alias |
| :-----------------------------------------------------------------------------------------: | :----------: | :---: |
| Você tem alguma outra sugestão, reclamação ou comentário sobre a comunidade Android DEV BR? | Campo aberto |   -   |
