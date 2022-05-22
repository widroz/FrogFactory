import MainMint from './MainMint'

function Gallery({ myTokenImages, getMyTokens}) {
    const RELOAD_EMOJI = '🔄';

    if (myTokenImages.length > 0) {
        return (
            <div >
                <div className="mx-5" style={{ display: 'flex', flexDirection: 'column', alignItems:'center' }}>
                    <MainMint ></MainMint>
                    <div className="my-5" style={{ display: 'flex', flexDirection: 'row', alignItems:'center' }}>
                        <h3 style={{marginRight:'1rem'}} >My Collection:</h3>
                        <button className="btn btn-outline-info btn-lg" onClick={getMyTokens} >{RELOAD_EMOJI} Tokens</button>
                    </div>
                </div>

                <div className="gallery">
                    {myTokenImages.map((myTokenImages, i) =>
                        <img className="mx-3 my-2  border rounded-circle border-4" key={i} src={myTokenImages} alt="frog" style={{ maxWidth: '99%' }}></img>)}

                </div>

            </div>
        );
    }

    else {
        return (
            <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <MainMint></MainMint>
                <h4 className="my-3" style={{ marginLeft: '3rem', marginRight: '3rem' }}>or</h4>
                <button className="btn btn-outline-dark btn-lg" onClick={getMyTokens}>{RELOAD_EMOJI} Tokens</button>
            </div>
        );
    }
}


export default Gallery;