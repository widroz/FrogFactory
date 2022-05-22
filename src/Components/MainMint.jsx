import { useState } from 'react';
import {ethers, BigNumber} from 'ethers';
import FrogFactory from '../FrogFactory.json';

const contractAddress = '0x2814DC7467A1aFda9ec98799cA5b794433499aFB';

const MainMint = () =>{

    const [mintAmount, setMintAmount] = useState(1);
    const FROG_EMOJI= '🐸';

    async function handleMint(){

        if(window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            const contract = new ethers.Contract(
                contractAddress,
                FrogFactory.abi,
                signer
            );
            try{
                const reponse = await contract.mint(BigNumber.from(mintAmount));
                console.log('reponse: ',reponse);
            } catch(err){console.log("ERROR: ",err)}
        }

    }

    const handleDecrement = () =>{
        if(mintAmount<=1)return;
        setMintAmount(mintAmount-1);
    }

    function handleIncrement (){

        if(mintAmount>9)return;
        setMintAmount(mintAmount+1);
    }

    return(<div  style={{display:'flex',flexDirection:'row'}}>
        <button className="btn btn-primary btn-lg" key={4} onClick={handleDecrement}>-</button>
        <button className="btn btn-primary mx-1 btn-lg" key={5} onClick={handleMint}>
            <h4>Mint {mintAmount} {FROG_EMOJI}</h4></button>
        <button className="btn btn-primary btn-lg" key={6} onClick={handleIncrement}>+</button>
    </div>
    );

}

export default MainMint;