import { NftProvider } from "use-nft";
import BootstrapStyles from "./BootstrapStyles";
import ConnectWalletButton from "./ConnectWalletButton";
import FrogGifs from "./FrogGifs";
import Title from "./Title";

function LogIn({ ethersConfig, connectWalletHandler }) {
  return (
    <NftProvider fetcher={["ethers", ethersConfig]}>
      <BootstrapStyles></BootstrapStyles>
      <div className="log-in">
      <div className="div-login">
        <Title></Title>
        <FrogGifs></FrogGifs>
        <ConnectWalletButton connectWalletHandler={connectWalletHandler}></ConnectWalletButton>
      </div>
      </div>
    </NftProvider>);

}

export default LogIn;