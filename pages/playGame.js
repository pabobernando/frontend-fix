import Script from 'next/script';
// import Head from 'next/head';
import classes from './playGame.module.css';
function PlayGame() {
  return (
    <div>
      <section className={classes.container}>
        <div id="header" className={classes.header}>
          <a href="/">
            <span>{'<<'}</span>
          </a>
          <div id="logo" className={classes.logo}>
            <img src="assets/logo 3.png" alt="" />
          </div>
          <h1 className='text-center'>ROCK PAPPER SCISSORS</h1>
        </div>
        <div id="content" className={classes.content}>
          <div id="pemain" className={classes.pemain}>
            <div className='row'>
              <div className='col-4 text-center'>
                <h1>PLAYER1</h1>
                <div className=''><img src="assets/batu.png" alt="" id='batu' className={classes.batu} /></div>
                <div className=''><img src="assets/kertas.png" alt="" id='kertas' className={classes.kertas} /></div>
                <div className=''><img src="assets/gunting.png" alt="" id='gunting' className={classes.gunting} /></div>
              </div>
              <div className='col-4 text-center'>
                <div id='vs' className={classes.vs}>VS</div>
                <div id='komputer' className={classes.komputer}> </div>
                <div id='refresh' className={classes.refresh}>
                  <img src="assets/refresh.png" alt="" /></div>
              </div>
              <div className='col-4 text-center'>
                  <h1>COM</h1>
                  <img src='assets/batu.png' alt="" id='komputerPilihan' className={classes.komputerPilihan} />
              </div>
            </div>
          </div>
          <Script src="/js/guntingBatu.js"
        strategy='afterInteractive'/>
        </div>  
      </section>
    </div>
  );
}
export default PlayGame;
{/* <div id="vs" className={classes.vs}>VS</div>
          <div id="komputer" className={classes.komputer}> */} 
          {/* <div id="refresh" className={classes.refresh}>
            <img src="assets/refresh.png" alt="" />
        <Script src="/js/guntingBatu.js"
        strategy='afterInteractive'/>
{/* <h1>COM</h1> */}
{/* <img src="assets/batu.png" alt="" id='komputerPilihan' className={classes.komputerPilihan} /> */}