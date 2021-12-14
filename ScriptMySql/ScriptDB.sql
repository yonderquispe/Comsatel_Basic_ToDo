/*
* ===================================== script basico =================================
*	fecha:		14/12/2021
*	autor:		yonder quispe chura
*	proyecto:	Prueba programador jr. comsatel
* =====================================================================================
*/

#DROP DATABASE IF EXISTS DBpruebaJrComsatel;
CREATE DATABASE DBpruebaJrComsatel;
USE DBpruebaJrComsatel;

# -------------tabla tareas--------------------
CREATE TABLE Tb_Tarea
(
	Id INT AUTO_INCREMENT PRIMARY KEY,
    Tarea varchar(200),
    EstadoFinalizado bool
);

/* datos iniciales para la tabla Tarea*/
insert into Tb_Tarea(Tarea, EstadoFinalizado) values('Reunion Diaria | 08:30 am',false);
insert into Tb_Tarea(Tarea, EstadoFinalizado) values('Coordinar reunion con el AreaComenrcial',false);

select * from Tb_Tarea;