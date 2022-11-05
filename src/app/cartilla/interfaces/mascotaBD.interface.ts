export interface MascotaBD {
    _id: string
    readonly nombreMascota: string;
    readonly expediente: string;
    readonly fechaMascota: string;
    readonly sexoMascota: string;
    readonly raza: string;
    readonly color: string;
    readonly descripcionMascota: string;
    readonly microchip: string;
    readonly animal: string;

    propietario:{
        _id: string
        readonly nombrePropietario: string;
        readonly direccion: string;
        readonly telefono: string;
        readonly correo: string;
        readonly id_mascota: string[];
        readonly createdAT: Date;
    }
}