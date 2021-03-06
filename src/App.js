import './App.css';
import FrogFactory from './FrogFactory.json';
import { ethers, BigNumber } from 'ethers';
import { useEffect, useState } from 'react';
import LogIn from './Components/LogIn';
import MainApp from './Components/MainApp';


const contractAddress = "0x2814DC7467A1aFda9ec98799cA5b794433499aFB";



function App() {

  const [myProvider, setMyProvider] = useState(new ethers.providers.Web3Provider(window.ethereum));
  const [defaultAccount, setDefaultAccount] = useState("");
  const [connectionButtonText, setConnectionButtonText] = useState('Connect Wallet');

  const [myTokenIds, setMyTokenIds] = useState([]);
  const [myTokens, setMyTokens] = useState([]);
  const [myTokenImages, setMyTokenImages] = useState([]);
  const [myTokenAttributes, setMyTokenAttributes] = useState();

  const ethersConfig = {
    provider: myProvider,
  }

  async function getMyTokens() {
    console.log("Getting tokens, remeber IPFS can take a while to load (even more than 30 minutes), when ipfs links are available, they will be loaded in a very short time.");
    if (window.ethereum) {
      const provider = myProvider;
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        FrogFactory.abi,
        signer
      );
    
      try {
   
        const reponse = await contract.walletOfOwner(defaultAccount);
        
        setMyTokenIds(reponse);
        console.log("MY TOKEN IDS: " + myTokenIds);
        const myImages = [];
        const tokens = []
        const tokenAttributes = [];
        for (var i = 0; i < myTokenIds.length; i++) {
          const reponse2 = await contract.tokenURI(BigNumber.from(myTokenIds[i]));
          const metadataURL = "https://ipfs.io/ipfs/" + reponse2.substring(7);
          const reponse3 = await (await fetch(metadataURL)).json();
          const image = reponse3.image;
          tokenAttributes.push(reponse3.attributes);
          tokens.push(reponse3);
          myImages.push("https://ipfs.io/ipfs/" + image.substring(7));
          setMyTokenImages(myImages);
          setMyTokens(tokens);
          setMyTokenAttributes(tokenAttributes);

          console.log("ITERATION " + i + "|| images:" + myImages);
        }
      } catch (err) { console.log("Error when getting tokens (remember that a simple - and free - access to IPFS files is being used, then 504 can happen until links are reachable. Expected error: Unexpected token < in JSON at position 0) -> ", err)}
    }
    return;
  }


  function connectWalletHandler() {
    if (defaultAccount) {
      setConnectionButtonText('Connect Wallet');
    }

    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(result => {
          setDefaultAccount(result[0]);
          setConnectionButtonText('Wallet Connected');
          getMyTokens();
        })
    } else { setConnectionButtonText('Install Metamask!');window.open("https://metamask.io/", "_blank") }
  }

  useEffect(() => {
    if(defaultAccount)getMyTokens()
    else{console.log("not default account")}
  }, [defaultAccount]);



  if (defaultAccount) {
    return (
      <MainApp myTokenImages={myTokenImages} defaultAccount={defaultAccount} myTokenIds={myTokenIds} getMyTokens={getMyTokens} ethersConfig={ethersConfig} connectWalletHandler={connectWalletHandler}>
      </MainApp>
    );
  } else {
    return (
      <LogIn ethersConfig={ethersConfig} connectWalletHandler={connectWalletHandler}>
      </LogIn>
    );
  }
}

export default App;


