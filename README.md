# Blocknet Contracts

## requirements
- nodejs
- docker (or change solc compiler in truffle config)


## Install

```
yarn install
```

## run local ethereum chain

```
yarn ganache-cli --mnemonic "your metamask seed phrase" --defaultBalanceEther 10000
```

## compile / deploy

```
yarn compile
yarn deploy
yarn deploy:ropsten
```

