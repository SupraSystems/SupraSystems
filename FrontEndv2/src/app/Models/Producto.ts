export class Producto {
   
    descripcion:string;
    nombre:string;
    tipo:string;
    precio:number;
    cantidad:number;
    foto:string | ArrayBuffer;
    _id:string;
    imagePath: string;
    fechavencimiento:string;
    file:File;
    porcentajedescuento:number=0;

    constructor(descripcion:string,tipo:string,precio:number,cantidad:number,foto: string | ArrayBuffer,_id:string,imagePath: string,nombre:string,fecha?:string, file?:File, porcentajedescuento?:number){

        this.descripcion=descripcion;
        this.tipo=tipo;
        this.precio=precio;
        this.cantidad=cantidad;
        this.foto=foto;
        this._id=_id;
        this.foto=foto;
        this.imagePath=imagePath;
        this.nombre=nombre;
        this.fechavencimiento=fecha;
        this.file=file;
    }
    

    public getDescuento(){
        return this.porcentajedescuento;
    }
    public setDescuento(descuento:number){
         this.porcentajedescuento=descuento;
    }
    public getFecha(){
        return this.fechavencimiento;
    }
    public getPrecio(): number {
        return this.precio;
    }
    public setPrecio(precio:number) {
        this.precio=precio;
    }

    public getCantidad(): number {
        return this.cantidad;
    }
    public getImagePath(): string {
        return this.imagePath;
    }
    public getDescripcion(): string {
        return this.descripcion;
    }
    public getTipo(): string {
        return this.tipo;
    }
    public getId(): string {
        return this._id;
    }
    public getFoto(): string | ArrayBuffer {
        return this.foto;
    }
    public getNombre(): string{
        return this.nombre;
    }
    public getFile(): File{
        return this.file;
    }
    public getPrecio1() {
        if(this.porcentajedescuento>4)
        {
            
            let p;
            
            p= this.precio-this.porcentajedescuento/100*this.precio;
            return Math.round(p* 100) / 100 ;
            

        } else {
            return this.precio;
        }
        
    }
}