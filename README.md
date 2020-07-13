Nesta implementação, consumimos a API da Marvel Comics utilizando o JavaScript "puro". E renderizamos os resultados das requisições em uma página HTML estilizada com CSS.
Para termos acesso a API devemos acessar o endereço abaixo: 
https://developer.marvel.com

O geração dos endpoints presume a utilização de um hash md5. Para isso, temos o arquivo md5.min.js, que pode ser instalado via "npm" utilizando as instruções do repositório abaixo: 
https://github.com/blueimp/JavaScript-MD5

Como fazemos a utilização apenas da função md5(), podemos simplesmente adicionar o arquivo md5.min.js ao projeto.
