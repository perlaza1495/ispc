<script>
    
</script>

<main class="container">
    <title>Login</title>
    

    <div  class="form_cont" >

        <img src="banner.jpeg" alt="">

        <form action="" class="form">
            
            <h2>Ingresa tu usuario y contraseña</h2>

            <input type="Usuario" placeholder="Usuario">
        
            <input type="password" placeholder="password">
           
            <button on:click={""}>Ingresar</button>           
            
            <a href="#">¿Olvido su contraseña?</a>
        </form>

    </div>

</main>


<style>

   @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    .container{
        margin-top: 190px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .form_cont{
      display: flex;
    }

    .form{
        margin-top: 90px;
        height: 400px;
        width: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    h2{
     font-size: 20px;
     margin-bottom: 30px;
     color: black;
     font-family: 'Roboto', sans-serif;
    }

    .form a{
        margin: 20px 0 0 0;
        font-family: 'Roboto';
        font-size: 18px;
    }

    img{
        margin: 0px 0px 0px 120px;
        width: 400px;
        height: 400;
    }

    input{
        border-radius: 25px;
        width: 250px;
        height: 25px;
        margin: 10px;
        border-color: #1E213D;
        font-family: 'Roboto';
        font-size: 16px;
    }

    button{
        border-radius: 25px;
        width: 200px;
        height: 30px;
        margin: 15px;
        background: #1E213D;
        color: white;
        border: 0px;
        font-family: 'Roboto';
        font-size: 18px;
        
    }

    ::placeholder{
        font-family:'Roboto', sans-serif; 
        text-align: center;
        font-size: 15px;
    }
</style>



