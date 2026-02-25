import React from 'react';
import TableWrapper from '../elements/TableWrapper';
import Table from '../elements/Table';
import tableDataJSON from '../../json/inventory-overstock.json';

const OverstockLocalTable = () => {

	const myColumns = [
		{
			header: 'ID',
			accessorKey: 'Id_Articulo'
		},
		{
			header: 'ID Hijo',
			accessorKey: 'Articulo_Codigo_Hijo'
		},
		{
			header: 'Factor Unitario',
			accessorKey: 'Articulo_Factor_Unitario'
		},
		{
			header: 'Nombre',
			accessorKey: 'Nombre'
		},
		{
			header: 'Categoria',
			accessorKey: 'Categoria'
		},
		{
			header: 'Marca',
			accessorKey: 'Marca'
		},
		{
			header: 'Casa',
			accessorKey: 'Casa'
		},
		{
			header: 'Departamento',
			accessorKey: 'Departamento'
		},
		{
			header: 'Costo Unitario',
			accessorKey: 'Costo_Unitario'
		},
		{
			header: 'ABC',
			accessorKey: 'ABC'
		},
		{
			header: 'AxC ABC Auto',
			accessorKey: 'AxC_ABC_Auto'
		},
		{
			header: 'Existencia Actual',
			accessorKey: 'Existencia_Actual'
		},
		{
			header: 'Existencia Padre/Hijo',
			accessorKey: 'Existencia_PadreHijo'
		},
		{
			header: 'Transito',
			accessorKey: 'Transito'
		},
		{
			header: 'Politica Reposicion',
			accessorKey: 'Politica_Reposicion'
		},
		{
			header: 'PVD',
			accessorKey: 'PVD'
		},
		{
			header: 'Stock Minimo',
			accessorKey: 'Stock_Minimo'
		},
		{
			header: 'Punto Reorden',
			accessorKey: 'Punto_Reorden'
		},
		{
			header: 'Inventario Maximo',
			accessorKey: 'Inventario_Maximo'
		},
		{
			header: 'Dias Cobertura',
			accessorKey: 'Dias_Cobertura'
		},
		{
			header: 'PVD Usado',
			accessorKey: 'PVD_Usado'
		},
		{
			header: 'Cobertura Fuente',
			accessorKey: 'CoberturaFuente'
		},
		{
			header: 'Dias Cobertura Calc',
			accessorKey: 'DiasCoberturaCalc'
		},
		{
			header: 'Costo Inventario',
			accessorKey: 'Costo_Inventario'
		},
		{
			header: 'Costo Sobre Existencia',
			accessorKey: 'Costo_Sobre_Existencia'
		},
		{
			header: 'Existencia',
			accessorKey: 'Existencia'
		},
		{
			header: 'Sobre Existencia',
			accessorKey: 'Sobre_Existencia'
		}
	];
	return <TableWrapper table={<Table tableID='homeDetailsTable' data={tableDataJSON} columns={myColumns} />} />
}

export default OverstockLocalTable