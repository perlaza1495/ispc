<script>

</script>

<main>
    <h1>Agendar Cita</h1>
    <section class="form-register">
        <title>Agendar Cita</title>

        <h2>No. documento</h2>
        <input type="text" class="controls" name="No.documento" id="no.documento" placeholder="Ingrese el # de documento">

        <h2>Fecha para la cita</h2>
        <input type="date" class="controls" name="Fecha_cita" id="fecha_cita">

        <h2>Motivos generales para la cita</h2>
        <input type="number" class="controls"  name="Motivo_cita" id="motivo_cita" placeholder="Ingrese el motivo">

        <h2>Nombre del medico</h2>
        <input type="text" class="controls" name="Nombre_medico" id="nombre_medico" placeholder="Ingrese el nombre del medico">
        
        <h2>Funcionario de la ESE que registra la cita:</h2>

        <input type="submit" class="boton" name="boton_agendar" value="Agendar">
    </section>
</main>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1{
        text-align: center;
        font-family: 'calibri'; 
    }

    .form-register{
        width: 400px;
        background: #99EAF9;
        padding: 30px;
        margin: auto;
        margin-top: 10px;
        border-radius: 4px;
        font-family: 'calibri';
        color: #000;
        box-shadow: 7px 13px 37px #000;
    }

    .form-register h2{
        font-size: 22px;
        margin-bottom: 20px;
    }

    .controls{
        width: 100%;
        padding: 10px;
        border-radius: 4px;
        margin-bottom: 16px;
        border: 1px solid #1f53c5;
        font-family: 'calibri';
        font-size: 18px;
        color: #000;
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
        background: #1E213D;
        border: none;
        padding: 12px;
        color: white;
        margin: 16px 0;
        font-family: 'calibri';
        font-size: 18px;
        cursor: pointer;
    }
</style>