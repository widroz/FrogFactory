import { NftProvider } from "use-nft";
import BootstrapStyles from "./BootstrapStyles";
import Gallery from "./Gallery";
import Title from "./Title";
import WalletState from "./WalletState";

function MainApp({ myTokenImages, ethersConfig, defaultAccount, myTokenIds, getMyTokens, connectWalletHandler }) {

    return (
        <NftProvider fetcher={["ethers", ethersConfig]}>
            <BootstrapStyles></BootstrapStyles>
            <div>
                <div className="bd-highlight">
                    <Title/>
                    <WalletState defaultAccount={defaultAccount} connectWalletHandler={connectWalletHandler} getMyTokens={getMyTokens}></WalletState>
                </div>
                <Gallery myTokenImages={myTokenImages} defaultAccount={defaultAccount} myTokenIds={myTokenIds} getMyTokens={getMyTokens}></Gallery>
            </div>
        </NftProvider>
    );



}

export default MainApp;