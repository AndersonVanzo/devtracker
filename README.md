# Setup

Antes de tudo, certifique-se de ter o ambiente de desenvolvimento configurado, caso não possua acesse a [documentação do React Native](https://reactnative.dev/docs/environment-setup?guide=native).

Para este projeto foi utilizado o gerenciador de pacotes Yarn e é o recomendado a ser utilizado, caso não possua acesse a [documentação oficial](https://classic.yarnpkg.com/lang/en/docs/install) e siga os passos para instalação. Entretanto, também é possível utilizar o NPM, apenas substituindo os comandos abaixo pelos equivalentes.

- Clone o repositório
- Execute o comando `yarn install`
- (iOS) Execute o comando `npx pod-install`

# Execução

### Android

- Conecte seu dispositivo/emulador Android
- Execute o comando `yarn run android`

### iOS
- Conecte seu dispositivo/simulador iOS
- Execute o comando `yarn run ios`

#

Obs.: Para geração de builds para Android é necessário executar o comando `yarn patch-package` devido a um problema na versão mais recente da biblioteca `react-native-vector-icons`. [Veja mais sobre aqui](https://github.com/oblador/react-native-vector-icons/issues/1508).
