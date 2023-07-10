# Plano de Testes de Software


| Caso de teste        | CT01 - Página inicial                                                                                                         |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | 
| Requisitos Associados        | RF-01  O site deve apresentar na página inicial as funcionalidades disponíveis para o usuário.                                                                                                               |
| Objetivo do Teste        | Verificar se as funcionalidades podem ser acessadas e estão chegando às páginas correspondentes.                                                                        |
| Passos        |1) Acessar a página inicial do site HireMe;                                                                                                                        |
|               |2) Visualizar a página inicial;                                                                                                                     |
|               |3) Clicar na funcionalidade pretendida.
| Critérios de Êxito        | Após a Página inicial carregar, deve ser possível clicar no botão 'Entrar' no cabeçalho, onde o usuário será redirecionado para a página de Login. Além disso, descendo a página, haverá o botão 'Cadastre-se gratuitamente', o qual, ao ser clicado, deverá redirecionar o usuário para a página de cadastro.                                                |
</br>
</br>


| Caso de teste        | CT02 - Separação de telas entre candidatos e recrutadores                                                                                                     |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | 
| Requisitos Associados        | RF-02  O site deve ter separação de telas entre usuários que queiram disponibilizar o currículo e os recrutadores que buscam talentos. |     
|                              | RNF-04  O site deve ter opção de cadastro de usuários. |     
| Objetivo do Teste        | Verificar se o site oferece dois ambientes diferentes. Um para quem quer criar e compartilhar seu currículo e outro para quem está em busca de um profissional para a vaga que tem disponível.                                                                      |
| Passos        |1) Acessar a página de cadastro através da página inicial;                                                                                                                       |
|               |2) Preencher os dados pedidos no cadastro e, no final, escolher a opção "Quero criar e cadastrar meu currículo" ou a opção "Quero buscar profissionais";                                                                                                                  |
|               |3) Clicar em Continuar para ser redirecionado para a página de Login;
|               |4) Realizar o Login com o e-mail e senha escolhidos.
| Critérios de Êxito        | Após clicar em Continuar na página de Login, caso tenha escolhido "Quero criar e cadastrar meu currículo", o site deve ser redirecionado para o Perfil do candidato. Caso tenha escolhido "Quero buscar profissionais", o site deve ser redirecionado para o Perfil do recrutador.                             |
</br>
</br>


| Caso de teste        | CT03 - Criação, edição e compartilhamento de currículo                                                                                                 |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Requisitos Associados        | RF-03  O site deve permitir a criação e edição de um currículo pelo usuário. |
|                             | RF-04  O site deve mostrar os templates de currículos disponíveis para a edição do usuário. |
|                             | RF-05  O site deve oferecer o recurso de selecionar as experiências e habilidades que deseja colocar em cada currículo para a versão de download, de forma a conseguir personalizar para cada tipo de arquivo. |
|                             | RF-09  O site deve permitir que o usuário coloque links externos no currículo. |
| Objetivo do Teste        | Verificar se o site permite a criação e edição de um currículo, se disponibiliza templates para escolha do usuário e se oferece opções de compartilhamento adequadas dentro e fora da plataforma.                                                          |
| Passos        |1) Fazer Login e acessar a página de Perfil do candidato;                                                                                                            |
|               |2) Clicar no menu principal na opção Criar um currículo;                                                                                                                  |
|               |3) Preencher as informações pedidas para o currículo, como habilidades e experiências;|
|               |4) Clicar em Salvar e ver currículo para ser redirecionado para a página com as informações do seu currículo;|
|               |5) Escolher se irá compartilhar o currículo na plataforma HireMe, fazer download do currículo com o layout escolhido e/ou copiar o link do currículo.|
| Critérios de Êxito        | Após clicar em Criar um currículo e preencher todas as informações pedidas, o site deve ser redirecionado para a página de Modelos de currículos para que o usuário possa escolher um layout que mais o agrada. Na página de Modelos de currículos, o usuário deve conseguir clicar em cima do layout para selecioná-lo e, ao clicar no botão de Próximo, o site deve ser redirecionado para a página de compartilhamento. Por fim, na página de compartilhamento, o site deve permitir que o usuário faça download do currículo com o layout escolhido, além de permitir que ele copie o link do currículo criado e que consiga compartilhar seu currículo dentro da plataforma para recrutadores cadastrados.                             |
|</br>||
|</br>||


| Caso de teste        | CT04 - Buscar profissionais                                                                                             |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | 
| Requisitos Associados        | RF-08  O site deve permitir que os recrutadores façam filtros de busca de pessoas de acordo com as experiências. |        
| Objetivo do Teste        | Verificar se o site oferece a opção de buscar profissionais cadastrados na plataforma de acordo com o que o recrutador está procurando.                                                                   |
| Passos        |1) Acessar a página Buscar profissionais;                                                                                                                     |
|               |2) Digitar no campo de pesquisa características que está buscando e clicar Enter para selecionar;                                                                                                              |
| Critérios de Êxito        | Após escolher, o site deve atualizar a página de pesquisa para mostrar apenas currículos com aquelas características selecionadas.                         |
</br>
</br>

| Caso de teste        | CT05 - Caixa de mensagens                                                                                                    |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | 
| Requisitos Associados        | RF-06  O site deve permitir que o recrutador entre em contato com os demais usuários por meio da plataforma. |        
| Objetivo do Teste        | Verificar se o site oferece a opção do recrutador entrar em contato com os candidatos no qual o currículo chamou atenção.                                                                    |
| Passos        |1) Acessar a página Buscar profissionais;                                                                                                                     |
|               |2) Digitar no campo de pesquisa os filtros profissionais que está buscando e clicar Enter para pesquisar currículos;                                                                                                              |
|               |3) Ao escolher um currículo, clicar no botão Enviar mensagem.
| Critérios de Êxito        | Após clicar em Enviar mensagem, o site deve ser redirecionado para uma Caixa de mensagens, onde a conversa com o candidato que teve seu currículo escolhido na pesquisa já esteja aberta para iniciar o diálogo.                           |
</br>
</br>

| Caso de teste        | CT06 - Botão de dicas                                                                                                   |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | 
| Requisitos Associados        | RF-10  O site deve ter um botão de dicas em cada campo para preenchimento das informações do currículo. |        
| Objetivo do Teste        | Verificar se o botão de Dica presente em algumas páginas durante a criação e edição do currículo funciona e aparece a mensagem adequada para cada página.                                                                  |
| Passos        |1) Acessar a Criar um currículo;                                                                                                                   |
|               |2) Passar o mouse por cima das imagens com o símbolo de interrogação;                                                                                                             |
|               |3) Seguir para a página de Modelos de currículos;
|               |4) Passar o mouse por cima da imagem com o símbolo de interrogação.  
| Critérios de Êxito        | Ao passar o mouse por cima do icon de Dica, deve aparecer um card com um texto que irá ajudar o usuário a navegar pelas funcionalidades do site.                         |
</br>
</br>


| Caso de teste        | CT07 - Compatibilidade e Responsividade                                                                                                 |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | 
| Requisitos Associados        | RNF-02  O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge). |   
|                              | RNF-07  O site deve ser responsivo permitindo a visualização tanto em desktops e notebooks, quanto em celulares com telas de variados tamanhos. |        
| Objetivo do Teste        | Verificar se o site abre normalmente nos principais navegadores do mercado e se ele se adequa a diferentes tamanhos de telas.                                                                |
| Passos        |1) Acessar o site em cada um dos seguintes navegadores: Google Chrome, Firefox e Microsoft Edge;                                                                                                                  |
|               |2) Acessar o site no desktop e testar diminuir e aumentar a tela do navegador;                                                                                                          |
|               |3) Acessar o site no tablet;
|               |4) Acessar o site no celular. 
| Critérios de Êxito        | O site deve se apresentar compatível aos diferentes navegadores e se apresentar responsivo aos diferentes tipos de tela.                  |
</br>
</br>

