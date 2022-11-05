export interface MascotaForm {
    readonly nombreMascota: string;
    readonly expediente: string;
    readonly fechaMascota: string;
    readonly sexoMascota: string;
    readonly raza: string;
    readonly color: string;
    readonly descripcionMascota: string;
    readonly microchip: string;
    readonly animal: string;

    readonly nombrePropietario: string;
    readonly direccion: string;
    readonly telefono: string;
    readonly correo: string;
    readonly createdAT: Date;
}