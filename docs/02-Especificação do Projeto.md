# Especificações do Projeto

<div align="justify"> A definição do problema e dos principais pontos a serem discutidos neste projeto foram baseados em informações obtidas em entrevistas com usuários conduzidas pela equipe de trabalho. Os detalhes levantados ao longo desse processo foram consolidados na forma de personas e histórias de usuários. 
  </div>

## Personas

Para ajudar no entendimento do problema e melhor identificar as necessidades dos usuários, foram levantadas as personas a seguir.

**Quadro 1 – Entrevista com a primeira persona** 

|Maria - Recrutadora|
|--------------------|
|<div align="justify"> Psicóloga e com MBA em Gestão de Pessoas. Mais de 10 anos atuando de forma generalista na área de Recursos Humanos. Atualmente trabalha como *Tech Recruiter* em uma multinacional de Tecnologia. O maior obstáculo é encontrar profissionais capacitados tecnicamente e que estão disponíveis e interessados em uma nova oportunidade no mercado de trabalho. Apesar das diversas ferramentas disponíveis para recrutamento, ainda é possível se deparar com currículos pobres em informações e desorganizados que acabam dificultando o trabalho de triagem. Isso também aumenta a possibilidade de que profissionais que poderiam atender ao perfil/requisitos da posição sejam desconsiderados para um processo seletivo. Ferramentas utilizadas para busca de candidatos: *LinkedIn Recruiter, GeekHunter, Revelo.* 
</div>

**Fonte:** Elaborado pelos autores. 



**Quadro 2 – Entrevista com a segunda persona** 

| **Ana – Buscando recolocação**                               |
| ------------------------------------------------------------ |
|<div align="justify"> Formada em Administração com ênfase em RH. Tem 16 anos de experiência na área de Recursos Humanos e Departamento Pessoal. Atualmente, trabalha de forma autônoma. Busca a recolocação profissional na área de RH, a fim de retomar uma rotina e um espaço no mercado de trabalho. A maior dificuldade no momento é a falta de atualização na área profissional, como, por exemplo, sistemas e processos relacionados a área. Já tentou utilizar as ferramentas oferecidas pelo *LinkedIn, Gupy e Sólides*, porém necessita de uma ferramenta mais intuitiva e prática. Gostaria de poder contar com um site de fácil usabilidade e que fosse possível salvar o arquivo do currículo em PDF, pois, em sites como o *Gupy* e *Sólides,* a informação fica retida e, no *LinkedIn,* o layout do arquivo gerado não é muito atrativo. Outros sites que oferecem um serviço mais personalizado, como o *Canva,* são extremamente complicados para usuários com menor domínio da informática.
</div> 

**Fonte:** Elaborado pelos autores. 



**Quadro 3 – Entrevista com a terceira persona** 

| **João - Estudante em busca do primeiro emprego**            |
| ------------------------------------------------------------ |
| <div align="justify"> Estudante de Análise e Desenvolvimento de Sistemas. Ainda não possui experiência profissional, portanto busca sua entrada no mercado de trabalho. Por ser inexperiente, não sabe diferenciar a importância das informações que deve colocar ou não colocar no currículo. E também não compreende como pode modificar seu currículo pra ficar atrativo de acordo com a vaga a qual pretende aplicar. Utiliza ferramentas como *Canva* e *LinkedIn* para confecção de currículo e busca de emprego, mas não consegue navegar com facilidade por esses sites. 
</div> 

**Fonte:** Elaborado pelos autores. 



## Histórias de Usuários

A partir do entendimento das personas identificadas para o projeto, foram estabelecidas as seguintes histórias de usuário. 



**Quadro 4 – História de usuários** 



| **Eu como …** <br /> `PERSONA` | **… quero/desejo …**   <br /> `O QUE`                              | **… para ....** <br />`POR QUE`                              |
| ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| JOÃO                    | um site com variedade de modelos de currículos               | ter diferentes opções de acordo com a necessidade do momento |
| JOÃO                    | ter um currículo atrativo com informações que recrutadores julgam importante | chamar atenção para o meu currículo em uma primeira análise e conseguir uma entrevista |
| JOÃO                    | compartilhar o currículo                                     | alcançar maior número de pessoas e organizações              |
| ANA                     | ter orientações de como fazer um currículo de forma didática | facilitar a utilização de ferramentas online                 |
| MARIA                   | ter acesso a currículos em que as informações estão organizadas e claras | facilitar o processo de triagem de currículos                |
| MARIA                   | encontrar pessoas que buscam emprego imediatamente           | ter profissionais que vão se dedicar ao processo e que tem disponibilidade rápida para início |

**Fonte:** Elaborado pelos autores. 



## Requisitos

O escopo do projeto é definido por meio de requisitos funcionais e não funcionais, a fim de descrever todas as funcionalidades que o usuário poderá encontrar, como também os aspectos gerais que precisam ser apresentados pela ferramenta. 

### Requisitos Funcionais

Na tabela a seguir estão listados os requisitos funcionais do projeto, bem como a prioridade de entrega de cada item. 

**Quadro 5 – Requisitos funcionais** 

| **ID** | **Descrição**                                                | **Prioridade** |
| ------ | ------------------------------------------------------------ | -------------- |
| RF-01  | O site deve apresentar na página inicial as funcionalidades disponíveis para o usuário. | Alta           |
| RF-02  | O site deve ter separação de telas entre usuários que queiram disponibilizar o currículo e os recrutadores que buscam talentos. | Alta           |
| RF-03  | O site deve permitir a criação e edição de um currículo pelo usuário. | Alta           |
| RF-04  | O site deve mostrar os *templates* de currículos disponíveis para a edição do usuário. | Alta           |
| RF-05  | O site deve oferecer o recurso de selecionar as experiências e habilidades que deseja colocar em cada currículo para a versão de download, de forma a conseguir personalizar para cada tipo de arquivo. | Alta           |
| RF-06  | O site deve permitir que o recrutador entre em contato com os demais usuários por meio da plataforma. | Média          |
| RF-07  | O site deve permitir que o recrutador salve currículos em pastas separadas de acordo com perfis diferentes. | Média          |
| RF-08  | O site deve permitir que os recrutadores façam filtros de busca de pessoas de acordo com as experiências. | Média          |
| RF-09  | O site deve permitir que o usuário coloque links externos no currículo. | Média          |
| RF-10  | O site deve ter um botão de dicas em cada campo para preenchimento das informações do currículo. | Baixa          |

### Requisitos não Funcionais

A tabela a seguir especifica os requisitos não funcionais que devem ser atendidos pelo projeto. 

**Quadro 6 – Requisitos não funcionais** 

| **ID** | **Descrição**                                                | **Prioridade** |
| ------ | ------------------------------------------------------------ | -------------- |
| RNF-01 | O site deve ser publicado em um ambiente acessível publicamente no GitHub Pages. | Alta           |
| RNF-02 | O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge). | Alta           |
| RNF-03 | O site deverá ser organizado da melhor forma para facilitar o desempenho do leitor de tela. | Alta           |
| RNF-04 | O site deve ter opção de cadastro de usuários.               | Alta           |
| RNF-05 | O site deve ter bom nível de contraste entre os elementos da tela em conformidade. | Média          |
| RNF-06 | O site deve possuir opção de aumentar sua fonte de acordo com a necessidade visual do usuário. | Baixa          |
| RNF-07 | O site deve ser responsivo permitindo a visualização tanto em desktops e notebooks, quanto em celulares com telas de variados tamanhos. | Baixa          |



## Restrições

As questões que restringem a execução desse projeto e que refletem as obrigações para o desenvolvimento do trabalho, são apresentadas na tabela a seguir.

| **ID** | **Restrição**                                                |
| ------ | ------------------------------------------------------------ |
| RE-01  | O site deve ser construído usando HTML, CSS e Javascript.    |
| RE-02  | O sistema deve estar acessível na web.                       |
| RE-03  | O projeto deve ser entregue no final do semestre letivo, sendo 25/06/2023 a data limite. |
| RE-04  | A equipe desenvolvedora deve ser composta apenas pelos alunos que fazem parte do projeto. |
| RE-05  | O sistema deve estar em conformidade com a Lei Geral de Proteção de Dados (LGPD). |

