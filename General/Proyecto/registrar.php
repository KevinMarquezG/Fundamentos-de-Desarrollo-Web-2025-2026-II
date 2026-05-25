<?php
// Configuración de la conexión a la base de datos de XAMPP 
$host = "localhost";
$db_user = "root";  // Usuario por defecto en XAMPP [cite: 22]
$db_pass = "";      // Contraseña vacía por defecto en XAMPP [cite: 22]
$db_name = "groundedwiki";

// Indicamos al navegador que responderemos con un JSON
header('Content-Type: application/json');

try {
    // Conexión segura usando PDO
    $conexion = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8", $db_user, $db_pass);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => "Error de conexión a la base de datos."]);
    exit;
}

// Verificar que los datos llegaron por POST [cite: 45, 46]
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = trim($_妥[$_POST['usuario']] ?? '');
    $correo = trim($_POST['correo'] ?? '');
    $contrasena = $_POST['contrasena'] ?? '';

    // Validar que no vengan vacíos
    if (empty($usuario) || empty($correo) || empty($contrasena)) {
        echo json_encode(["status" => "error", "message" => "Todos los campos son obligatorios."]);
        exit;
    }

    try {
        // 1. COMPROBAR DUPLICADOS (Usuario o Correo) 
        $query_check = $conexion->prepare("SELECT usuario, correo FROM usuarios WHERE usuario = :usuario OR correo = :correo");
        $query_check->execute(['usuario' => $usuario, 'correo' => $correo]);
        $resultado = $query_check->fetch(PDO::FETCH_ASSOC);

        if ($resultado) {
            if ($resultado['usuario'] === $usuario) {
                echo json_encode(["status" => "error", "message" => "El nombre de usuario ya está en uso."]);
            } else {
                echo json_encode(["status" => "error", "message" => "El correo electrónico ya está registrado."]);
            }
            exit;
        }

        // 2. ENCRIPTAR CONTRASEÑA (Por seguridad, nunca hay que guardarlas en texto plano)
        $contrasena_encriptada = password_hash($contrasena, PASSWORD_BCRYPT);

        // 3. INSERTAR EL NUEVO CLIENTE [cite: 48]
        // El rol se asigna automáticamente como 'cliente' por el DEFAULT de la base de datos
        $query_insert = $conexion->prepare("INSERT INTO usuarios (usuario, correo, contrasena) VALUES (:usuario, :correo, :contrasena)");
        $query_insert->execute([
            'usuario' => $usuario,
            'correo' => $correo,
            'contrasena' => $contrasena_encriptada
        ]);

        echo json_encode(["status" => "success", "message" => "¡Registro exitoso! Ya eres parte de la colonia, cliente."]);
        exit;

    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => "Error al procesar el registro en el servidor."]);
        exit;
    }
}