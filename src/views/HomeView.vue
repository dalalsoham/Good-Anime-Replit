<template>
  <div class="row">
    <div class="col-big">
      <h1>GoodAnime</h1>
      <p>
        <b>Quickly find new and old anime that you might enjoy!</b>
      </p>
      <b
        ><a href="/anime/"><span>Click here to get started</span></a></b
      >
    </div>

    <div class="col-small">
      <h1>About</h1>
      <p>
        <strong>
          This is <a href="https://repl.it/@TheDrone7">@TheDrone7</a> 's
          submission for the
          <a
            href="https://repl.it/talk/challenge/Announcing-contest-SPACE/15339"
            >repl.it space contest</a
          >. As per the rules, just press the <code>spacebar</code> key to fetch
          a new anime! They are also supposed to automatically change every 30
          seconds.
        </strong>
      </p>
      <p>
        <strong>
          Also be sure to upvote it on repl.it talk.
          <a href="">Click here to show the repl-talk post!</a>
        </strong>
      </p>
      <p>
        <strong>
          And finally, enjoy the website and let me know if you have any
          suggestions on the
          <a href="https://repl.it/discord/">repl.it discord server</a>.
        </strong>
      </p>
      <h3>Arigatō!</h3>
    </div>
  </div>
</template>

<style>
body {
  background-image: url("/images/indexbg.jpg");
}

@media only screen and (max-width: 640px) {
  body {
    background-size: cover;
    background: url("/images/indexbg_small.jpg") no-repeat center;
  }
}
</style>

<style scoped>
p {
  margin: 1.25rem 0 0.5rem 0;
}

div.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
}

div.col-big {
  width: 60%;
}

div.col-big b {
  margin: 20px 0;
}

div.col-small {
  width: 20%;
  min-width: 350px;
  height: 90vh;
  min-height: 420px;
  background: #040404ab;
  border-radius: 12px;
  padding: 8px 12px 12px 16px;
  justify-self: flex-end;
}

h1 {
  font-size: 2.5rem;
  width: 90%;
  border-bottom: #c0c0cf 2px solid;
  padding: 0 0 0.5rem 0;
}

h3 {
  font-size: 1.75rem;
  padding: 0.25rem 0;
}

@media only screen and (max-width: 984px) {
  div.row {
    justify-content: center;
  }

  div.col-small {
    height: fit-content;
    margin-top: 40px;
  }
}

@media only screen and (max-width: 640px) {
  div.col-big {
    width: 100% !important;
  }

  div.col-small {
    display: none;
  }
}
</style>
