import metamask from '../resources/metamask.svg'

function ConnectWalletButton({ connectWalletHandler }) {
    return (
        <div style={{marginBottom:'1rem'}}>
            <button className="shadow btn btn-dark btn-lg" onClick={connectWalletHandler} style={{ fontSize: '2rem', minWidth:'300px' }}>
            <img src={metamask} style={{height:'3rem'}}></img>
            <h4>Connect Wallet</h4>
            </button>
        </div>
    );
}

export default ConnectWalletButton;