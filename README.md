## 💭 Descrição e normativa do desafio

<p>Definir uma proposta de plataforma web que traga uma
solução para a área da saúde utilizando o FHIR, da Microsoft</p>

## 💡 Informações do projeto
<p>O HealthUnify é apenas um projeto criado para solicionar o desafio proposto na faculdade de sistemas para internet que simplifica o acesso e o gerenciamento das informações de saúde dos pacientes, trazendo impactos significativos alinhados com os Objetivos de Desenvolvimento Sustentável (ODS) 3 (Saúde e Bem-Estar), 9 (Indústria, Inovação e Infraestrutura) e 12 (Consumo e Produção Sustentáveis). </p>
<p>Lembrando que o projeto acadêmico visa botar em prática os conceitos aprendidos e que modificações e aperfeiçoamentos futuros podem surgir e que nem todas as funcionalidades estão totalmente finalizadas</p>

* [Pitch](https://www.youtube.com/watch?v=fAmKjRlkFE0)
* [Protótipo](https://www.figma.com/file/dlitQz3yASzQyDYcCwPMxh/HealthUnify?type=design&node-id=148%3A744&mode=design&t=irjfhqDwwDWi7LLj-1)


### 👨‍💻 Principais tecnologias e conhecimentos utilizados:

- UX/UI design
- HTML
- CSS
- JavaScript 
- Node.js 
- MySQL
- Express 
- Sequelize
- Azure Database for MySQL
- [Javascript])


## 🛠️ Modificando o projeto

### Siga as seguintes instruções para instalar e poder rodar e modificar o projeto em sua máquina:

### 📋 Pré-requisitos:

Para baixar, executar e modificar o projeto, você precisa (ou pode precisar) ter instalado em sua máquina: 
* ambiente de tempo de execução JavaScript [Node](https://nodejs.org/en/)
* Gerenciador de pacotes [Npm](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* Editor de código ou IDE, como o [VSCode](https://code.visualstudio.com/Download)
* MySQL Workbench

### 📋 OBS:
Caso você queira usar o Azure Database for MySQL (banco de dados na nuvem) você precisará de conhecimento prévio em nuvem, aqui estão algumas instruções rápidas de como realizei no projeto: 
1. Criar uma Conta no Azure
Acesse o Portal do Azure.
Crie uma conta ou faça login se já possuir uma.
2. Criar um Grupo de Recursos
Procure por "Grupo de Recursos" e clique em "Criar" e forneça um nome e uma região para o grupo de recursos(para a região aconcelho dar uma pesquisada sobre a latência). Este grupo será usado para organizar e gerenciar os recursos relacionados ao seu projeto.
3. Criar um Servidor MySQL
No portal procure "Servidores do Banco de Dados do Azure para MySQL" e selecione.
Clique em Criar Servidor Banco de Dados do Azure para MySQL e escolha o servidor flexível.
Preencha todas as informações básicas necessárias, como o seu tipo de assinatura, o grupo de recurso que deseja usar para esse projeto, nome do servidor, região(aconselho colocar a mesma selecionada no grupo de recursos), versão do seu mysql, tipo de carga do trabalho, método de autenticação, nome de usuário adm e senha.
4. Configurar o Firewall
Adicione regras de firewall para permitir o acesso ao banco de dados de endereços IP específicos ou de todas as origens.
5. Revisar e criar
6. No meu projeto utilizei o sequelize, então configure o arquivo api/config/config.json do Sequelize com as informações do seu banco de dados Azure.

##### Conceitos importantes:
- Grupo de Recursos: Um conjunto lógico de recursos do Azure que são gerenciados como uma unidade. Ele permite organizar, implantar e gerenciar recursos de maneira eficiente.
- Servidor MySQL no Azure: É o servidor que hospedará seu banco de dados. É necessário configurar o acesso a partir do portal Azure.
- Firewall: Controla quais endereços IP têm permissão para acessar o servidor MySQL. Configure as regras de firewall para garantir a segurança.
- Cadeia de Conexão: Contém informações como nome do servidor, nome de usuário e senha. Essa cadeia de conexão é essencial para conectar seu aplicativo Node.js ao banco de dados Azure.
- Sequelize: ORM (Object-Relational Mapping) para Node.js. Facilita a interação com o banco de dados MySQL, permitindo a criação de migrations, models e queries de maneira simplificada.


### 🔧 Instalação e execução windows

1. Clone o repositório
```
git clone https://github.com/Bee-Pirez/Fiap_HealthUnify
```
2. Acesse a pasta do projeto
```
cd Fiap_HealthUnify
```
3. Instale as depedências
```
// Com o Npm
npm i // Ou npm install

```
4. Execute as Migrations e Seeders
```
npm run sequelize db:migrate
```
```
npm run sequelize db:seed:all
```
5. Inicie o servidor de desenvolvimento do projeto
```
// Com o Npm:
npm start

Obs: o servidor iniciará - acesse por: <http://localhost:/porta que ele executar>
