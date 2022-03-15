import classes from './newGame.module.css';
import PlayVideoGame from './playVideoGame';
import Link from 'next/link';

function NewGame() {
  return (
    <section className={classes.newgame}>
      <h1>Game Trailer</h1>
      <PlayVideoGame />
      <br></br>
      <button className={classes.button}>
        <Link href="/playGame">Play Game</Link>
      </button>
      &nbsp;
      <button className={classes.button}>
        <Link href="/pdfFile">Game Instructions</Link>
      </button>
    </section>
  );
}

export default NewGame;
