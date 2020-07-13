![Gravar_2020_07_12_20_56_24_442_Trim](https://user-images.githubusercontent.com/54685310/87312545-16ff0780-c4f7-11ea-84e3-13ed1f332c8b.gif)



# Nesta implementação, consumimos a API da Marvel Comics utilizando o JavaScript "puro". E renderizamos os resultados das requisições em uma página HTML estilizada com CSS.
## Para termos acesso a API devemos acessar o endereço abaixo: 
*_ [Google] https://developer.marvel.com _*

### A geração dos endpoints presume a utilização de um hash md5. Para isso, temos o arquivo md5.min.js, que pode ser instalado via "npm" utilizando as instruções do repositório abaixo: 
*_ https://github.com/blueimp/JavaScript-MD5 _*

Como fazemos a utilização apenas da função md5(), podemos simplesmente adicionar o arquivo md5.min.js ao projeto.

### Os passos, basicamente, são:
- [x] Criar conta da MarvelAPI
- [x] Implementar geração de Hash com algorítimo md5
- [x] Fazer as devidas referências à nossa página HTML
- [x] Implementar o arquivo principal, onde fazemos as requisições
