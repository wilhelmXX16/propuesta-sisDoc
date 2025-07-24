---
title: Instalación
description: guía de instalcion de dsedit
---

 Para iniciar la configuración del **Sistema de Gestión Fiscal**, tenemos que tener instalado el programa dsedit.

 ## DSEDIT

 :::tip{icon="heart"}
Antes de iniciar con la instalción tener en consideración que la fecha del equipo debe ser diferente a la actual de preferencia del año **2005**.
:::

  <Image src="/src/assets/images/config-data-time.png" alt="Configuración de fecha y hora." width="550" height="550" />

**Continuar con al instalación habitual.**

 - _Iniciando con la ejecución del instalador._

    <Image src="/src/assets/images/1.png" alt="Configuración de fecha y hora." width="550" height="550" />

    <Image src="/src/assets/images/2.png" alt="Configuración de fecha y hora." width="550" height="550" />
 - Una vez terminada la instalación configuraremos la conexion a la base de datos. 

:::note
Verificar el **".ini"** que estén con la configuración corresondiente para el enlace.

  ```sh title="SIATF.INI"
  database = sybase

  ```

:::

## Configuración DSEDIT

- Al iniciar el programa veremos la siguiente ventana

  <Image src="/src/assets/images/d1.png" alt="Ventana de inicio del dsedit" width= "550" height= "550">

- Continuando creando un server

  <Image src="/src/assets/images/d2.png" alt="Ventana de inicio del dsedit" width= "550" height= "550">

  Le damos click derecho y en add
  
  <Image src="/src/assets/images/d3.png" alt="Ventana de inicio del dsedit" width= "350" height= "250">

  Colocamos el nombre del server y en **OK**.

  <Image src="/src/assets/images/d4.png" alt="Ventana de inicio del dsedit" width= "550" height= "550">

  Le asignamos una dirección con un click derecho en **SERVER ADDRESS** y luego click en **Modify Atribute**

  <Image src="/src/assets/images/d5.png" alt="Ventana de inicio del dsedit" width= "450" height= "550">

  Presionamos en **ADD** para añadir una dirección.

  <Image src="/src/assets/images/d6.png" alt="Ventana de inicio del dsedit" width= "450" height= "550">

  Insertamos la dirección **IP** correspondiente y en **OK**

  <Image src="/src/assets/images/d7.png" alt="Ventana de inicio del dsedit" width= "450" height= "550">

  :::tip[Pequeña recomendación]
    Después de la configuración cerrar el programa para guardar los cambios.
  :::
  
  <Image src="/src/assets/images/d8.png" alt="Ventana de inicio del dsedit" width= "450" height= "550">
  

- **Enlace a los servidores** 
  
  - SYBASE
  ```sh title="CONFIG"
    Server Name = sybase
    Server Address = TCP-10.23.100.6,5000

  ```
  - DJPASCO
  ```sh title="CONFIG"
    Server Name = djpasco
    Server Address = TCP-10.23.100.5,5000

  ```
  - CARRION
  ```sh title="CONFIG"
    Server Name = CARRION
    Server Address = TCP-10.23.104.10,5000

  ```
  - PAUCARTAMBO
  ```sh title="CONFIG"
    Server Name = PAUCARTAMBO
    Server Address = TCP-10.23.108.10,5000

  ```
  - HUAYLLAY
  ```sh title="CONFIG"
    Server Name = HUAYLLAY
    Server Address = TCP-10.23.102.10,5000

  ```
  - HUARIACA
  ```sh title="CONFIG"
    Server Name = HUARIACA
    Server Address = TCP-10.23.112.10,5000

  ```
  - TUSI
  ```sh title="CONFIG"
    Server Name = tusi
    Server Address = TCP-10.23.102.10,5000

  ```
