# Hackathon: Harmony Hackathon: Terra Challenge
### Host Mirror's Front-End On Skynet
1. [x] Hosting Mirror web-dapp  | https://2009tnf1ojqq6b5fj5q72je656scv3j06bf5tjms9h48krvfk3fbqo0.siasky.net/#/trade
2. [x] Hosting eth-web-app | https://100aq6vcvfedpdtaqkfdp8unjm4cs6p4153ikbnvsjd3sd1dtipeg5g.siasky.net/#/
3. [x] Hosting Terra-Station | https://1001masu2en7jc3d09uurtn0qdi82unsi3ok19cuehorg9veulubkq8.siasky.net/

# Best practices to host front-ends on Skynet
1. [x] adding a working "Save to Homescreen" link in the Github repo (example) | 3 shares
2. [x] using an ENS or HNS decentralized domain name for the web app | 1 share
3. [x] use the Deploy to Skynet Github action for building and deploying your frontend automatically | 1 share
4. [ ] hosting off-chain, mutable application data on Skynet using SkyDB or MySky | 1 share

### Host Mirror's Back-End On Akash

The idea is to deploy arbitrary number of Load Palanced RPC nodes (Terra & Band) along side with mantle as relayer and Mirror graph servers on akash network to assure complete decentralization and prvent front running | currently work is in progress | for a rough idea please refer to current work @  https://github.com/amrosaeed/Akash-Hackathon/blob/solana-omnibus/README.md for network design ( work done for solana) and https://github.com/amrosaeed/Akash-Hackathon/tree/solana-omnibus/solana-omnibus/Production-Ready/devnet ( SDL files design patterns)

# Mirror Web App (Terra)

[![Add to Homescreen](https://img.shields.io/badge/Skynet-Add%20To%20Homescreen-00c65e?style=for-the-badge&labelColor=0d0d0d&logo=data:image/png;base64,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)](https://homeapp.hns.siasky.net/#/skylink/AQC2TDP2zSLBzMXFWg2FYYpXfUizHrIzg0S4pn6l-2TLfg)

![Deploy to Skynet Badge](https://github.com/skynetlabs/skynet-webportal/actions/workflows/deploy-website.yml/badge.svg)

![MirrorProtocol](https://user-images.githubusercontent.com/82784007/132278494-6c9f98c2-0776-4423-b040-537549e514fc.jpg)


**NOTE**: This repository contains the source code for the Terra Mirror Web App, located at https://terra.mirror.finance. For the Ethereum version, visit [here](https://github.com/mirror-protocol/terra-web-app).

The Mirror Web App is a web frontend for interacting with [Mirror Contracts](https://github.com/Mirror-Protocol/mirror-contracts). It is intended to be used with the [Terra Station Extension](https://terra.money/extension) plugin for Chromium browsers.

## Skynet portal URL

```
https://2009tnf1ojqq6b5fj5q72je656scv3j06bf5tjms9h48krvfk3fbqo0.siasky.net/#/trade
```
## HNS decentralized domain name

```
https://000abt.hns.siasky.net/#/trade
```
### Using handshake domain (How To?)

1. [x] Open an account on namebase using my referral link https://www.namebase.io/register/kyohwp
2. [x] Refer to namebase discord and DM @johnnywu with your wallet address and e-mail for free HNS tokens and free HNS domain.
3. [x] Back to Domain Manager at your namebase account and add a blockchain DNS record with your skylink Resolver link (excluding sia://).


# Development on Skynet

### Changes to index.tsx (import HashRouter insted of BrowserRouter)

```
import { HashRouter as Router } from "react-router-dom"
```
Hint: Gatsby & full React Router support coming soon.

## Integrating with Homescreen

### Considerations to take into account

1. [x] Confirm the application front-end supports a static deployment on Skynet (Gatsby & full React Router support coming soon) “Static” means it can be cached for a site (that is, the file is not dynamically generated). Examples include images and CSS generated from LESS.
* Most of Terra-web-dapp pages is cashed under 100 milliseconds and some GraphQL pages are up to 650 milliseconds much under skynet to process, instead of that we are working on a GraphQL decentralized frontend with Skynet.

2. [x] Assure APIs and web requests from your app only depend on decentralized protocols that will remain accessible even with future front-end updates. For web3, this usually means interacting with MetaMask or a Skynet portal, not making HTTP requests to your centralized back-end server. 
* Terra-web-dapp is using Band protocol (On chain decentralized oracle) to query price feed for mAssets.
* we are working on a GraphQL decentralized frontend with Skynet that is only talking to other decentralized protocols for Potential consumers of data include: dashboards, mAsset arbitrage trading bots, dApp activity trackers, etc.
* Terra-web-dapp is intended to be used with the [Terra Station Extension] (https://terra.money/extension) plugin for Chromium browsers (On-Chain wallet)

#### Note: Sites using centralized APIs may still work with Homescreen, but breaking changes to an API might break older builds that users have saved to Homescreen. This is not considered to be a best practice.

### Adding Homescreen (How To?)

```
[![Add to Homescreen](https://img.shields.io/badge/Skynet-Add%20To%20Homescreen-00c65e?style=for-the-badge&labelColor=0d0d0d&logo=data:image/png;base64,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)](https://homeapp.hns.siasky.net/#/skylink/[skylink])
```
NOTE: You'll want to add the above code in your project's Readme, replacing [skylink] with your resolver skylink (excluding sia://).

### Configuring manifest.json

Homescreen first looks for that manifest file to learn about your app. For the best user experience, be sure to set the following fields:

<ul class="list-20526648" data-key="6326ba5d2d81439ca2e9e131f9c3d31e"><li class=""><div data-key="b2bb05848c2b4c1295b2383b8b5ba49f" class="reset-3c756112--listItemContent-756c9114"><p class="blockParagraph-544a408c--noMargin-acdf7afa" data-key="b36963b823314e9fb5a024dc1203a25b"><span class="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1"><span data-key="a56d349d53d24d968f38a84d0416a5c6"><span data-offset-key="a56d349d53d24d968f38a84d0416a5c6:0"><code spellcheck="false" class="code-0458e21e" data-slate-leaf="true">short_name</code></span><span data-offset-key="a56d349d53d24d968f38a84d0416a5c6:1"> or </span><span data-offset-key="a56d349d53d24d968f38a84d0416a5c6:2"><code spellcheck="false" class="code-0458e21e" data-slate-leaf="true">name</code></span></span></span></p></div></li><li class=""><div data-key="84079837b8e8490d9b19bf73d3a0cc40" class="reset-3c756112--listItemContent-756c9114"><p class="blockParagraph-544a408c--noMargin-acdf7afa" data-key="9290180d2c5046ec850c396bbd32357c"><span class="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1"><span data-key="b7da93e4e5a94e4ab8c7dadfd40ffe6e"><span data-offset-key="b7da93e4e5a94e4ab8c7dadfd40ffe6e:0"><code spellcheck="false" class="code-0458e21e" data-slate-leaf="true">description</code></span></span></span></p></div></li><li class=""><div data-key="6565dfeaa893422c96d102c79ff51709" class="reset-3c756112--listItemContent-756c9114"><p class="blockParagraph-544a408c--noMargin-acdf7afa" data-key="b64ae367f1924721b3a3c1926c068538"><span class="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1"><span data-key="5fa9f7a40ccb42388f7624d947b8e600"><span data-offset-key="5fa9f7a40ccb42388f7624d947b8e600:0">an object in the </span><span data-offset-key="5fa9f7a40ccb42388f7624d947b8e600:1"><code spellcheck="false" class="code-0458e21e" data-slate-leaf="true">icons</code></span><span data-offset-key="5fa9f7a40ccb42388f7624d947b8e600:2"> array</span></span></span></p></div></li><li class=""><div data-key="88e21f0ba56d4a46a1e7b494018d7b07" class="reset-3c756112--listItemContent-756c9114"><p class="blockParagraph-544a408c--noMargin-acdf7afa" data-key="3bebefe1e36d4e549d8c199319695847"><span class="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1"><span data-key="f8602739fc5046bd9ff41dfa0b10f17f"><span data-offset-key="f8602739fc5046bd9ff41dfa0b10f17f:0"><code spellcheck="false" class="code-0458e21e" data-slate-leaf="true">theme_color</code></span></span></span></p></div></li><li class=""><div data-key="35b999d7a3834b92b88902eb7a8b1812" class="reset-3c756112--listItemContent-756c9114"><p class="blockParagraph-544a408c--noMargin-acdf7afa" data-key="7c1039c61cc54b909cc81402ea151266"><span class="text-4505230f--TextH400-3033861f--textContentFamily-49a318e1"><span data-key="216c74f89b4d4522aa0cd65396374969"><span data-offset-key="216c74f89b4d4522aa0cd65396374969:0"><code spellcheck="false" class="code-0458e21e" data-slate-leaf="true">skylink</code></span></span></span></p></div></li></ul>

By setting the resolver skylink for your application here, Homescreen will be able to check for updates to the application.

source: https://docs.siasky.net/integrations/homescreen/adding-homescreen-support-to-an-app

For projects full manifest file: https://github.com/amrosaeed/Skynet-Hackathon/blob/pull-request-workflow/public/manifest.json

### Adding Skynet Action to Workflow

Please create a file in your code source “.github/workflows/deploy.yml” with the most basic workflow and add the following:

```
      - name: Deploy to Skynet
        uses: SkynetLabs/deploy-to-skynet-action@v2
        with:
          upload-dir: public
          github-token: ${{ secrets.GITHUB_TOKEN }}
          registry-seed: ${{ secrets.REGISTRY_SEED || '' }}
          registry-datakey: ${{ secrets.REGISTRY_DATAKEY || '' }}
```

source: https://docs.siasky.net/developer-guides/deploy-github-actions

For project's full .yml file: https://github.com/amrosaeed/Skynet-Hackathon/tree/pull-request-workflow

## Quick Installation & Start

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```sh
npm install
npm run build
```

## License

This software is licensed under the Apache 2.0 license. Read more about it [here](./LICENSE).

© 2020 Mirror Protocol
