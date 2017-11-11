# Minha Bíblia: 
Aplicativo funcional de demonstração do uso do NODE + EXPRESS + MYSQL + EJS + GULP + SASS

Este projeto tem o objetivo de consolidar os conhecimentos relativos às tecnologias citadas.

## Quais as versões contidas no projeto?
Atualmente o projeto conta com uma versão da Bíblia Sagrada em Português Brasileiro (pt-BR):
- Almeida Corrigida e Fiel (ACF)

## Rotas
O Acesso foi construido de forma independente, podendo ser acessado diretamente na URL conforme descrito a seguir:
- Server/: 
  - localhost:3000/ 
  - [Para listagem dos livros da Bíblia]
- Server/Livro: 
  - localhost:3000/Gn 
  - [Para acesso aos Capítulos do livro de Gênesis]
- Server/Livro/Capítulo: 
  - localhost:3000/Ex/12 
  - [Mostra todos os versículos do Livro de Êxodo, Capítulo 12]
- Server/Livro/Capitulo/Versiculo: 
  - localhost:3000/Ap/22/21 
  - [Mostra o versículo 21 do Capítulo 22 do Livro de Apocalipse]

### SQL
Há um arquivo SQL para geração das tabelas e seus respectivos dados; Estão codificados em UTF-8 e possuem a seguinte estrutura:
- Cria e popula a tabela 'biblia-books'
- Cria e popula a tabela 'biblia-verses'

A tabela 'biblia-books' está estruturada da seguinte forma:
- id: é o identificador único do livro
- namecap: é o nome do livro
- abbrv: é a abreviação consolidada do livro
- testament: é a identificação do testamento, (1) Velho Testamento ou (2) Novo Testamento
- qtd: é a quantidade de capítulos do livro

A tabela 'biblia-verses' está estruturada da seguinte forma:
- id: é o identificador único do versículo
- version: é a versão da Bíblia (ACF até o momento)
- testament: é a identificação do testamento, (1) Velho Testamento ou (2) Novo Testamento
- book: é a identificação do livro da Bília (1-66)
- chapter: é o número do capítulo
- verse: é o número do versículo
- text: é o texto do versículo

### Obs: 
O arquivo Index.js principal considera os seguintes dados. Altere-os se for necessário.
```javascript
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'minha-biblia'
})
```

### Iniciando ###
**Faça o clone:**
```javascript
  $ git clone https://github.com/RenatoSiqueira/minha-biblia.git
  ```
**Instale os pacotes necessários:**
```javascript
  $ npm install
```
**Inicie o Servidor:**
```javascript
$ npm start
```
**Caso deseje, abra em outro terminal [para edição Html/Sass em live reload]:**
```javascript
$ gulp
```

- ### Pré-Requisitos ###
    - [NodeJs](https://nodejs.org/en/download/)
    - [Npm](https://docs.npmjs.com/cli/install)

- ### Outros Comandos ###
    - #### Comando: ```$ gulp sass``` ####
    - Descrição: SASS->CSS [Conversão,Minificação]

    - #### Comando: ```$ gulp html``` ####
    - Descrição: HTML EJS->HTML EJS [Minificação]
    
    - #### Comando: ```$ gulp server``` ####
    - Descrição: Inicia o servidor/watches BrowserSync para monitoramento dos arquivos Scss e Ejs, para uso do live-reload    

    - #### Comando: ```$ gulp``` ####
    - Descrição: Inicia em background todos os comandos acima e fica em estado de monitoramento

## Como os arquivos foram montados?
A compilação dos dados (Livro/Capítulo/Versículos) foi obtida por meio de páginas web. Sendo assim, é possível, que haja pequenos erros de coleta.

## Como funcionam as licenças e direitos?
Este projeto é distribuído sob a licença Creative Commons BY-NC. As traduções bíblicas deste projeto são de autoria e propriedade intelectual da Sociedade Bíblica Trinitariana (ACF). Todos os direitos reservados aos autores.

## Como eu posso ajudar?
Ajude-nos a entregar um conteúdo de qualidade. Toda ajuda é bem vinda.

#### Autor #####
- [Renato Siqueira](renatoelysiqueira@gmail.com)
