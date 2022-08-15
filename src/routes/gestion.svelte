<script>

</script>

<main>
    
    <header>
        <div class="header_superior">
            <h1>BIENVENIDO A ISPC TECHNOLOGY</h1>
            <div class="logo">
                <img src="logo.png" alt="">
            </div>
        </div>
        <div class="container_menu">

            <div class="menu">
                <nav>
                    <ul>
                        <li><a href="#"><img src="icon_home.png" alt=""></a></li>
                        <li><a href="#">Citas</a></li>
                        <li><a href="#">Pacientes</a></li>
                        <li><a href="#">Soporte al Usuario</a></li>
                    </ul>

                </nav>
            </div>

        </div>
    </header>
    

</main>


<style>
    

    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto';
        text-decoration: none;
    }

    /*HEADER SUPERIOR*/
    header{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: #fff;
    }


    .header_superior{
        max-width: 1200px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
    }

    h1{
        margin: 0px 0px 0px 0px;
        color: #1E213D;
        font-family: 'Roboto', sans-serif;
    }

    .logo img{
        width: 100px;
    }

    /*BARRA MENU*/
    .container_menu{
        width: 100%;
        height: 70px;
        background: #1E213D;
        padding: 0px 20px;
    }

    .menu{
        max-width: 1200px;
        margin: auto;
        height: 100%;
    }

    nav{
        height: 100%;
    }

    nav > ul{
        height: 100%;
        display: flex;
    }

    nav  ul  li{
        height: 100%;
        list-style: none;
        position: relative;
    }

    nav > ul > li> a > img{
        width: 120px;
        background-size: 24px;
        background-repeat: no-repeat;
        background-position: center center;
        padding: 20px 40px;
    }

    nav > ul > li a > img:hover{
        background-size: 24px;
        background-repeat: no-repeat;
        background-position: center center;
    }

    nav > ul > li a{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 14px;
        color: #fff;
        text-transform: uppercase;
        font-size: 14px;
        transition: all 300ms ease;
    }

    nav > ul > li a:hover{
        transform: scale(1.1);
        background: #0074c7;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0, 0.5);
    }

</style>