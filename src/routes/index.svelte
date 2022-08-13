<script>

    var usuario = "";
    var password ="";

function clic(){
    alert("hola " + usuario + " tu password es: " + password);
}



</script>

<main class="container">

    <h1>BIENVENIDO A ISPC TECHNOLOGY</h1>

    

    <div  class="form_cont" >

        <img src="img1.jpeg" alt="">

        <form action="" class="form">
            
            <h2>Ingresa tu usuario y contraseña</h2>

            <input type="Usuario" placeholder="Usuario" bind:value={usuario}>
        
            <input type="password" placeholder="password" bind:value={password}>
           
            <button on:click={clic}>Ingresar</button>           
            
        </form>


    </div>
    

    


</main>


<style>

   @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    .container{
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

    h1{
     margin: 60px 0px 40px 0px;
     color: #99EAF9;
     font-family: 'Roboto', sans-serif;
    }

    h2{
     font-size: 18px;
     
     margin-bottom: 30px;
     color: black;
     font-family: 'Roboto', sans-serif;
    }
    img{
        margin: 0px 0px 0px 120px;
       
        width: 200px;
    }

    input{
        border-radius: 25px;
        width: 250px;
        height: 25px;
        margin: 10px;
        border-color: #99EAF9;
    }

    button{
        border-radius: 25px;
        width: 200px;
        height: 30px;
        margin: 10px;
        background-color: #99EAF9;
        color: white;
        border: 0px;
        
    }

    ::placeholder{
        font-family:'Roboto', sans-serif; 
        text-align: center;
        font-size: 15px;
    }
</style>



