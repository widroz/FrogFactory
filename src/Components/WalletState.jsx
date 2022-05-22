import ConnectWalletButton from "./ConnectWalletButton";


function WalletState({ defaultAccount, connectWalletHandler, getMyTokens }) {


    if (defaultAccount) {
        return (
           <> {window.screen.width>=450
            ? <div className="mx-5 my-5" style={{display:'flex', flexDirection:'row'}}>
            <button className="btn btn-outline-primary btn-lg" onClick={function (event) { connectWalletHandler(); getMyTokens(); }}>Refresh Wallet</button>
            <footer className="d-inline-flex border border-2 border-primary p-2 rounded-pill mx-2">
                <b>Wallet connected</b>: {defaultAccount}
            </footer>
            
            </div>
        
            :<div className="my-5"  style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <button className="btn btn-outline-primary btn-lg" onClick={function (event) { connectWalletHandler(); getMyTokens(); }}>Refresh Wallet</button>
            <footer className="d-inline-flex border border-2 border-primary p-2 rounded-pill mx-2">
                <b>Wallet connected</b>
            </footer>
            </div>
            }</>

            
           
        );
    }




    else {

        return (
            <ConnectWalletButton className="btn btn-primary mx-2 my-2" connectWalletHandler={connectWalletHandler}></ConnectWalletButton>
        );

    }



}

export default WalletState;