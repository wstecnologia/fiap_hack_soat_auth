# API de Validação de Usuário

Este projeto consiste em uma API de validação de usuário que se integra ao **Amazon Cognito** para autenticação de usuários. A infraestrutura necessária para o serviço Cognito é provisionada utilizando o **Terraform**, garantindo que o ambiente na AWS seja configurado de forma automatizada e consistente.

## Tecnologias

- **API**: Node.js/TypeScript (ou a tecnologia de sua escolha para a implementação da API)
- **Infraestrutura**: Terraform
- **Autenticação**: Amazon Cognito (AWS)

## Requisitos

Antes de executar o projeto, verifique se você tem as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (v12 ou superior)
- [Terraform](https://www.terraform.io/downloads.html) (v1.0 ou superior)
- [AWS CLI](https://aws.amazon.com/cli/) (configurado com as credenciais da AWS)

## Instalação.
**Comandos para iniciar**: 
 1. Npm install
 2. Npm run build
 3. Npm start
   
OBS.: Para utilização e necessario renomear o arquivo .env_exemplo para .env .
E adicionar os valores de cada parametro.
  

## Utilização do Cognito com terraform 
**Comandos** 
  terraform init
  terraform plan
  terraform apply
   



## Utilizar Imagem do docker
docker-compose down && docker-compose pull && docker-compose up -d

## Verificar o log do container 
docker logs -f fiap_hacksoat_notification
