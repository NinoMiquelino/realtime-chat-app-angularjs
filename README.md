## 🙋‍♂️ Autor

<div align="center">
  <img src="https://avatars.githubusercontent.com/ninomiquelino" width="100" height="100" style="border-radius: 50%">
  <br>
  <strong>Onivaldo Miquelino</strong>
  <br>
  <a href="https://github.com/ninomiquelino">@ninomiquelino</a>
</div>

---

# 💬 ChatFlow - Plataforma de Chat em Tempo Real

![Angular](https://img.shields.io/badge/Angular-17-DD0031?logo=angular)
![Firebase](https://img.shields.io/badge/Firebase-10-FFCA28?logo=firebase)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Responsive](https://img.shields.io/badge/Design-Responsive-00C7B7)

Uma aplicação moderna de chat em tempo real desenvolvida com Angular e Firebase, oferecendo comunicação instantânea, canais organizados e colaboração eficiente para equipes.

## ✨ Características Principais

### 💬 **Chat em Tempo Real**
- Mensagens instantâneas com atualização em tempo real
- Múltiplos canais de comunicação
- Histórico de conversas persistente

### 🎯 **Sistema de Canais**
- Criação e gerenciamento de canais públicos e privados
- Organização por temas e projetos
- Controle de acesso e permissões

### 👥 **Gestão de Usuários**
- Sistema de autenticação seguro
- Perfis personalizáveis
- Status online/offline/ausente
- Controle de papéis (Admin, Usuário, Convidado)

### 📱 **Design Responsivo**
- Interface otimizada para desktop e mobile
- Experiência adaptável a diferentes tamanhos de tela
- Navegação intuitiva e acessível

### 🚀 **Funcionalidades Avançadas**
- Upload de arquivos e imagens
- Sistema de reações com emojis
- Notificações em tempo real
- Timestamps e indicadores de leitura

## 🛠️ Tecnologias Utilizadas

| Camada | Tecnologias |
|--------|-------------|
| **Frontend** | Angular 17, TypeScript, RxJS, HTML5, SCSS |
| **Backend** | Firebase Authentication, Firestore, Storage |
| **Real-time** | Firebase Realtime Database |
| **Deploy** | Firebase Hosting, GitHub Actions |
| **Ferramentas** | Angular CLI, GitHub, VS Code |

## 📋 Pré-requisitos

- **Node.js** 18.x ou superior
- **npm** 9.x ou superior
- **Angular CLI** 17.x
- Conta no **Firebase**

## 🚀 Instalação e Configuração

### 1. Clonar o Repositório

```bash
git clone https://github.com/NinoMiquelino/realtime-chat-app-angularjs.git
cd realtime-chat-app-angularjs
```

2. Instalar Dependências

```bash
npm install
```

3. Configurar Firebase

1. Crie um projeto no Firebase Console
2. Ative os serviços:
   · Authentication (Email/Password)
   · Firestore Database
   · Storage
3. Faça o download do arquivo de configuração environment.ts

4. Configurar Ambiente

Crie o arquivo src/environments/environment.ts:

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: "sua-api-key",
    authDomain: "seu-projeto.firebaseapp.com",
    projectId: "seu-projeto-id",
    storageBucket: "seu-projeto.appspot.com",
    messagingSenderId: "seu-sender-id",
    appId: "seu-app-id"
  }
};
```

5. Executar a Aplicação

```bash
# Servidor de desenvolvimento
ng serve

# Acesse: http://localhost:4200
```

📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/          # Componentes Angular
│   │   ├── chat/           # Componente principal de chat
│   │   ├── channels/       # Lista e gestão de canais
│   │   ├── profile/        # Perfil do usuário
│   │   └── login/          # Autenticação
│   ├── services/           # Serviços e lógica de negócio
│   │   ├── auth.service.ts
│   │   ├── chat.service.ts
│   │   └── notification.service.ts
│   ├── guards/             # Guards de rota
│   ├── models/             # Interfaces TypeScript
│   └── pipes/              # Pipes personalizados
├── assets/                 # Recursos estáticos
└── environments/           # Configurações de ambiente
```

🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm start          # Servidor de desenvolvimento
ng serve           # Alternativa

# Build
npm run build      # Build de produção
ng build           # Alternativa

# Testes
npm test           # Executar testes unitários
ng test            # Alternativa

# Análise de código
npm run lint       # ESLint
ng lint            # Alternativa
```

🌐 Deploy

Deploy no Firebase Hosting

```bash
# Build da aplicação
ng build --configuration production

# Instalar Firebase CLI
npm install -g firebase-tools

# Login e deploy
firebase login
firebase init hosting
firebase deploy
```

📱 Funcionalidades

🎨 Interface do Usuário

· Layout Responsivo: Adaptável a desktop, tablet e mobile<br>
· Tema Escuro: Interface moderna com tema escuro<b>
· Navegação Intuitiva: Sidebar colapsável em mobile

💬 Sistema de Mensagens

· Tempo Real: Atualização instantânea das mensagens<br>
· Formatação: Suporte a markdown básico<br>
· Citações: Sistema de reply para mensagens<br>
· Reações: Emojis para interação rápida

🔐 Segurança

· Autenticação JWT: Via Firebase Auth<br>
· Controle de Acesso: Baseado em roles<br>
· Regras Firestore: Segurança no nível do banco

📊 Administração

· Painel Admin: Gestão de usuários e canais<br>
· Estatísticas: Métricas de uso<br>
· Moderação: Ferramentas de moderação

🤝 Contribuição

Contribuições são sempre bem-vindas! Por favor, siga estas etapas:

1. Fork o projeto
2. Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)
3. Commit suas mudanças (git commit -m 'Add some AmazingFeature')
4. Push para a branch (git push origin feature/AmazingFeature)
5. Abra um Pull Request

🔄 Changelog

· ✅ Chat em tempo real<br>
· ✅ Sistema de canais<br>
· ✅ Autenticação de usuários<br>
· ✅ Design responsivo<br>
· ✅ Upload de arquivos

---

Desenvolvido com ❤️ usando Angular e Firebase

---

## 🤝 Contribuições
Contribuições são sempre bem-vindas!  
Sinta-se à vontade para abrir uma [*issue*](https://github.com/NinoMiquelino/realtime-chat-app-angularjs/issues) com sugestões ou enviar um [*pull request*](https://github.com/NinoMiquelino/realtime-chat-app-angularjs/pulls) com melhorias.

---

## 💬 Contato
📧 [Entre em contato pelo LinkedIn](https://www.linkedin.com/in/onivaldomiquelino/)  
💻 Desenvolvido por **Onivaldo Miquelino**

---
