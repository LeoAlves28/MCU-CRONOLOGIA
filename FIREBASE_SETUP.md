# Configurar login e sincronização

O app usa Firebase Authentication (e-mail/senha) e Cloud Firestore. A configuração é necessária uma vez; depois, basta entrar com a mesma conta em cada dispositivo.

## 1. Criar o projeto Firebase

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
2. Adicione um app Web e copie os valores da configuração do SDK.
3. Em **Authentication → Sign-in method**, habilite **E-mail/senha**.
4. Em **Firestore Database**, crie um banco de dados.
5. Em **Firestore → Rules**, publique as regras do arquivo `firestore.rules`.
6. Abra `firebase-config.js` e preencha `apiKey`, `authDomain`, `projectId` e `appId` com os valores do app Web.

A configuração Web do Firebase identifica o projeto e não é uma chave privada. Não coloque neste site uma chave privada de conta de serviço.

## 2. Abrir ou publicar o app

Não abra o site diretamente como `file://`. Sirva a pasta por HTTP durante o desenvolvimento ou publique os arquivos em uma hospedagem estática. Adicione `localhost` e o domínio publicado em **Authentication → Settings → Authorized domains** no Firebase.

## Como funciona

- Sem configurar o Firebase, a watchlist continua funcionando e salva localmente.
- Ao criar uma conta ou entrar, os itens concluídos localmente são mesclados aos itens já sincronizados na nuvem.
- A seção de login informa se a configuração está ausente ou se houve falha no Authentication/Firestore. Após entrar, use **Testar conexão** para verificar a leitura do documento do usuário.
- Cada usuário pode ler e alterar apenas o próprio documento do Firestore, conforme as regras fornecidas.
- Use a mesma conta em cada dispositivo para receber o mesmo progresso.
