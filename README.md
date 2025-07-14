# BAT PASS GENERATOR

Aplicativo mobile desenvolvido em React Native com Expo, que gera senhas aleatórias e permite copiar facilmente para a área de transferência.

## Funcionalidades

- **Gerar senha:** Crie uma senha segura e aleatória com apenas um toque.
- **Copiar senha:** Copie a senha gerada para a área de transferência com um botão dedicado.

## Como usar

1. Clique no botão **GENERATE** para gerar uma nova senha.
2. Visualize a senha gerada no campo central.
3. Clique no botão **⚡ COPY** para copiar a senha para a área de transferência.

## Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [expo-clipboard](https://docs.expo.dev/versions/latest/sdk/clipboard/)


## Clone o repositório

## Clone o repositório

```bash
git clone https://github.com/reinaldoper/pass-generator.git
cd pass-generator

## Executando o projeto

```sh
npm install
npm start
```

Ou utilize os scripts para rodar em dispositivos específicos:

- `npm run android`
- `npm run ios`
- `npm run web`

## Estrutura de pastas

```bash
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── BatLogoStyles
│   │   └── styles.tsx
│   ├── BatTextInputStyles
│   │   └── styles.tsx
│   ├── components
│   │   ├── BatLogo.tsx
│   │   ├── BatTextInput.tsx
│   │   ├── Button.tsx
│   │   └── Home.tsx
│   ├── HomeStyle
│   │   └── styles.tsx
│   ├── scress
│   │   └── App.tsx
│   ├── services
│   │   └── password.tsx
│   ├── styleApp
│   │   └── styles.tsx
│   └── styleButton
│       └── styles.tsx
└── tsconfig.json
```


