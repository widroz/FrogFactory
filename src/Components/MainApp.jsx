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
                    <p className="title-gallery">F R O G&nbsp;&nbsp;F A C T O R Y</p>
                    <WalletState defaultAccount={defaultAccount} connectWalletHandler={connectWalletHandler} getMyTokens={getMyTokens}></WalletState>
                </div>
                <Gallery myTokenImages={myTokenImages} defaultAccount={defaultAccount} myTokenIds={myTokenIds} getMyTokens={getMyTokens}></Gallery>
            </div>
        </NftProvider>
    );



}

export default MainApp;