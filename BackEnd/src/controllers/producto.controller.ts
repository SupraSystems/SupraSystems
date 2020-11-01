import { Request, Response } from 'express'
import fs from 'fs-extra';
import path from 'path'

// Models
import Producto from '../models/producto';
import Descuento from '../models/descuento'
import Detalle_Combo from '../models/detalle_combo'

export async function getProductos(req: Request, res: Response): Promise<Response> {
    const producto = await Producto.find();
    return res.json(producto);
};

export async function createProducto(req: Request, res: Response): Promise<Response> {
    const {_id,nombre,descripcion,tipo,precio,cantidad,fechavencimiento,coddescuento} = req.body;
    const newPreoducto = {
        _id:_id,
        nombre:nombre,
        descripcion:descripcion,
        tipo:tipo,
        precio:precio,
        cantidad:cantidad,
        fechavencimiento:fechavencimiento,
        coddescuento:coddescuento,
        imagePath:req.file.path
    };
    const producto = new Producto(newPreoducto);
    await producto.save();
    return res.json({
        message: 'Producto guardado exitosamente',
        producto
    })
}

export async function getProducto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const producto = await Producto.findById(id);
    return res.json(producto);
}

export async function deleteProducto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const producto = await Producto.findByIdAndRemove(id);
    if (producto) {
        await fs.unlink(path.resolve(producto.imagePath));
    }
    return res.json({ message: 'Producto Eliminado',
    producto
});
}

export async function updateProducto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { nombre, descripcion,tipo, precio,cantidad,fechavencimiento,coddescuento} = req.body;
    const updatedProducto = await Producto.findByIdAndUpdate(id, {
        nombre,
        descripcion,
        tipo,
        precio,
        cantidad,
        fechavencimiento,
        coddescuento
    });
    return res.json({
        message: 'Producto actualizado exitosamente',
        updatedProducto
    });
}

export async function getDescuentoDeProducto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const producto = await Producto.findById(id);
    //const codDescuento = producto?.coddescuento;
    //const descuento = await Descuento.findById(codDescuento);
    //return res.json(descuento);
    return res.json();
}

export async function getComboDeProducto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const detalle = await Detalle_Combo.find(id);
    return res.json(detalle);
}