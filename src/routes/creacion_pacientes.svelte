<script>

</script>

<main>
    <h1>Registar Paciente</h1>
    <section class="form-register">
        <title>Crear Pacientes</title>

        <h2>Nombres</h2>
        <input type="text" class="controls" name="Nombres" id="nombres" placeholder="Ingrese su nombre">

        <h2>Apellidos</h2>
        <input type="text" class="controls" name="Apellidos" id="apellidos" placeholder="Ingrese su apellido">

        <h2>No. del documento de identidad</h2>
        <input type="number" class="controls"  name="no.documetno" id="documento" placeholder="Ingrese su # de identidad">

        <h2>Direccion de residencia</h2>
        <input type="text" class="controls" name="Apellidos" id="apellidos" placeholder="Ingrese su direccion">
        
        <div class="seleccion" id="seleccion_eps">
            <h2>EPS de afiliacion</h2>
            <select class="opciones" name="seleccion">
                <option value="Valor1">Mutual Ser</option>
                <option value="Valor2">Nueva EPS</option>
                <option value="Valor3">Coomeva</option>
                <option value="Valor4">Caja Copi EPS</option>
            </select>
        </div>

        <div class="seleccion" id="seleccion_regimen">
            <h2>seleccione regimen</h2>
            <select class="opciones" name="seleccion">
                <option value="Valor1">Subsidiado</option>
                <option value="Valor2">Contributivo</option>
            </select>
        </div>

        <input type="submit" class="boton" name="boton_registrar" value="Registrar">
    </section>
</main>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1{
       font-family: 'calibri'; 
    }

    .form-register{
        width: 400px;
        background: #24303c;
        padding: 30px;
        margin: auto;
        margin-top: 100px;
        border-radius: 4px;
        font-family: 'calibri';
        color: white;
    }

    .form-register h2{
        font-size: 22px;
        margin-bottom: 20px;
    }

    .controls{
        width: 100%;
        background: #24303c;
        padding: 10px;
        border-radius: 4px;
        margin-bottom: 16px;
        border: 1px solid #1f53c5;
        font-family: 'calibri';
        font-size: 18px;
        color: aliceblue;
    }

    .seleccion{
        width: 100%;
        padding: 10px;
        border-radius: 4px;
    }

    .seleccion .opciones{
        width: 100%;
        border-radius: 5px;
        font-size: 18px;
        font-family: 'calibri';
    }

    .form-register .boton{
        width: 100%;
        background: #1f53c5;
        border: none;
        padding: 12px;
        color: white;
        margin: 16px 0;
        font-size: 16px;
    }
</style>


