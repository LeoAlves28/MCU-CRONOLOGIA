# Configurar login e sincronização

O app usa Firebase Authentication (e-mail/senha), Cloud Firestore e Google Analytics. A configuração é necessária uma vez; depois, basta entrar com a mesma conta em cada dispositivo.

## 1. Criar o projeto Firebase

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
2. Adicione um app Web e copie os valores da configuração do SDK.
3. Em **Authentication → Sign-in method**, habilite **E-mail/senha**.
4. Em **Firestore Database**, crie um banco de dados.
5. Em **Firestore → Rules**, publique as regras do arquivo `firestore.rules`.
6. Abra `firebase-config.js` e preencha `apiKey`, `authDomain`, `projectId`, `appId` e `measurementId` com os valores do app Web.
7. Para habilitar o Analytics em um projeto existente, ative o Google Analytics em **Configurações do projeto → Integrações** no Firebase Console e confira o `measurementId` do app Web.

A configuração Web do Firebase identifica o projeto e não é uma chave privada. Não coloque neste site uma chave privada de conta de serviço.

## 2. Abrir ou publicar o app

Não abra o site diretamente como `file://`. Sirva a pasta por HTTP durante o desenvolvimento ou publique os arquivos em uma hospedagem estática. Adicione `localhost` e o domínio publicado em **Authentication → Settings → Authorized domains** no Firebase.

## Como funciona

- Sem configurar o Firebase, a watchlist continua funcionando e salva localmente.
- O Google Analytics registra automaticamente visualizações de página quando o `measurementId` está configurado. Confira os acessos em **Analytics → Tempo real** no Firebase Console; relatórios agregados podem levar até 24 horas para aparecer. O Analytics mostra métricas como acessos, localização aproximada e dispositivos, não os nomes das pessoas.
- Informe aos visitantes sobre a coleta de dados e implemente aviso/consentimento quando exigido pelas regras de privacidade aplicáveis ao seu site.
- Ao criar uma conta ou entrar, os itens concluídos localmente são mesclados aos itens já sincronizados na nuvem.
- A seção de login informa se a configuração está ausente ou se houve falha no Authentication/Firestore. Após entrar, use **Testar conexão** para verificar a leitura do documento do usuário.
- Cada usuário pode ler e alterar apenas o próprio documento do Firestore, conforme as regras fornecidas.
- Use a mesma conta em cada dispositivo para receber o mesmo progresso.
