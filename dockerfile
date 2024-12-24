# Usa a imagem oficial do Node.js como base
FROM node:22-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json /app

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código do projeto para o diretório de trabalho
COPY . /app

# Define a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]