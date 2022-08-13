<script>

</script>

<main>
    <h1>Registar Paciente</h1>
    <section>
        <title>Crear Pacientes</title>

        <h2>Nombres</h2>
        <input type="text" name="Nombres" id="nombres" placeholder="Ingrese su nombre">

        <h2>Apellidos</h2>
        <input type="text" name="Apellidos" id="apellidos" placeholder="Ingrese su apellido">

        <h2>No. del documento de identidad</h2>
        <input type="number" name="no.documetno" id="documento" placeholder="Ingrese su # de identidad">

        <h2>Direccion de residencia</h2>
        <input type="text" name="Apellidos" id="apellidos" placeholder="Ingrese su direccion">
        
        <div id="seleccion_eps">
            <h2>EPS de afiliacion</h2>
            <select name="seleccion">
                <option value="Valor1">Mutual Ser</option>
                <option value="Valor2">Nueva EPS</option>
                <option value="Valor3">Coomeva</option>
                <option value="Valor4">Caja Copi EPS</option>
            </select>
        </div>

        <div id="seleccion_regimen">
            <h2>seleccione regimen</h2>
            <select name="seleccion">
                <option value="Valor1">Subsidiado</option>
                <option value="Valor2">Contributivo</option>
            </select>
        </div>

        <input type="submit" name="boton_registrar" value="Registrar">
    </section>
</main>

<style>

</style>


