<template>
  <div class="home-initial">
    <div class="background">
      <div class="overlay"></div>
      <div class="logo">
        <pre>

░░░░░░▄▄▄▄███▄▄▄▄░░░░░░░░░░░░░
░░░▄▄█▀░░░░░░░░░▀▀▄▄░░░░░░░░░░
░░█▀░░░░░░░░░░░░░░░▀█▄░░░░░░░░
░█▀░░░░░░░░░░░░░░░░░░█▄░░░░░░░
██░░░░░░░░░░░░░░░░░░░░█▄░░░░░░
█░░░░░░░░░░░░░░░░░░░░░░█▄░░░░░
██░░░░░░░░░░░░▄▄▄▄▄█▀▀▀██▄░░░░
▀█░░░░░░░░░▄█▀▀░░▀▀█▄░░░░█▄░░░
░█▄░▄░░░░░▄█░░░░░░░░█▄░█░░█░░░
░▄█▄██▄░░░█▄░░██░░░░██▄▄▄██░░░
░████░▀▀░░░█▄░░░░░░▄█░░░░░██░░
░█░░██▄▄░░░░▀██▄▄██▀▄▄▄▄▄▄█░░░
░░▄█▀░░░░░░░░░▄▄██▀▀▀▀▀▀▀░▀█▄░
░░▀█░░░░░░░▄█▀▀░░░░░░░░░░░░░█▄
░░░▀█▄▄█▀░█▀░░░░░░░░░░░░░░░▄█▀
░░░░░░██░▄█░░░█▀██▀▀█▀██▀▀▀▀░░
░░░░░▄█░░▀█░░▀█░█░░██░██░░░░░░
░░░░██▀█▄░▀█▄░▀▀████▀▀██░░░░░░
░░░░█░░░▀▀█▄▀█▄▄▄▄▄▄▄▄██▄░░░░░
       </pre>
       <pre>
 ##   ##  ### ###  ### ##     ####             ## ##     ####   ##   ##  ### ##    ## ##    ## ##   ###  ##
 ## ##    ##  ##   ##  ##     ##             ##   ##     ##     ## ##    ##  ##  ##   ##  ##   ##    ## ##
 # ### #   ##       ##  ##     ##             ####        ##    # ### #   ##  ##  ####     ##   ##   # ## #
 ## # ##   ## ##    ##  ##     ##              #####      ##    ## # ##   ##  ##   #####   ##   ##   ## ##
 ##   ##   ##       ##  ##     ##                 ###     ##    ##   ##   ## ##       ###  ##   ##   ##  ##
 ##   ##   ##  ##   ##  ##     ##             ##   ##     ##    ##   ##   ##      ##   ##  ##   ##   ##  ##
 ##   ##  ### ###  ### ##     ####             ## ##     ####   ##   ##  ####      ## ##    ## ##   ###  ##


       </pre>
      </div>
    </div>
    <h1 class="title">Clinica Medi Simpson - Pacientes</h1>
    <router-link to="/patients" class="go-to-patients">Lista de Pacientes</router-link>
    <div class="footer-initial">
    <hr>
      Desde 1989 curando sua tristeza
    </div>
  </div>
</template>

<style>
.home-initial {
  position: relative;
  background-color: #3399FF;
  color: #FFFFFF;
  text-align: center;
  padding: 20px;
  height: 100vh;
}

.footer-initial {
  margin: 10px;
  padding: 10px;
 
} 

.background {
  position: relative;
 
  background-size: cover;
  background-position: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8));
}

.logo pre {
  font-size: 15px;
  margin: 0;
}

.title {
  font-size: 32px;
  font-weight: bold;
  margin: 20px 0;
}

.go-to-patients {
  text-decoration: none;
  color: #FF3366;
  background-color: #FFFFFF;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  transition: background-color 0.3s;
}

.go-to-patients:hover {
  background-color: #FF3366;
  color: #FFFFFF;
}
</style>
