import React from 'react';
import TableWrapper from '../elements/TableWrapper';
import Table from '../elements/Table';
import tableDataJSON from '../../json/inventory-overstock.json';

const OverstockLocalTable = () => {

	const myColumns = [
		{
			header: 'ID',
			accessorKey: 'Id_Articulo',
			cell: (cell) => <div className='text-end'>{cell.getValue()}</div>
		},
		{
			header: 'ID Hijo',
			accessorKey: 'Articulo_Codigo_Hijo',
			cell: (cell) => <div className='text-end'>{cell.getValue()}</div>
		},
		{
			header: 'Factor Unitario',
			accessorKey: 'Articulo_Factor_Unitario',
			cell: (cell) => <div className='text-end'>{cell.getValue()}</div>
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
			accessorKey: 'Costo_Unitario',
			cell: (cell) => <div className='text-end'>₡{cell.getValue().toLocaleString('es-CR')}</div>
		},
		{
			header: 'ABC',
			accessorKey: 'ABC',
			cell: (cell) => <div className='text-center'>{cell.getValue()}</div>
		},
		{
			header: 'AxC ABC Auto',
			accessorKey: 'AxC_ABC_Auto',
			cell: (cell) => <div className='text-end'>{cell.getValue()}</div>
		},
		{
			header: 'Existencia Actual',
			accessorKey: 'Existencia_Actual',
			cell: (cell) => <div className='text-end'>{cell.getValue()}</div>
		},
		{
			header: 'Existencia Padre/Hijo',
			accessorKey: 'Existencia_PadreHijo',
			cell: (cell) => <div className='text-end'>{cell.getValue()}</div>
		},
		{
			header: 'Transito',
			accessorKey: 'Transito',
			cell: (cell) => <div className='text-end'>{cell.getValue()}</div>
		},
		{
			header: 'Politica Reposicion',
			accessorKey: 'Politica_Reposicion',
			cell: (cell) => <div className='text-end'>{cell.getValue()}</div>
		},
		{
			header: 'PVD',
			accessorKey: 'PVD',
			cell: (cell) => <div className='text-end'>{cell.getValue()}</div>
		},
		{
			header: 'Stock Minimo',
			accessorKey: 'Stock_Minimo',
			cell: (cell) => <div className='text-end'>{cell.getValue()}</div>
		},
		{
			header: 'Punto Reorden',
			accessorKey: 'Punto_Reorden',
			cell: (cell) => <div className='text-end'>{cell.getValue()}</div>
		},
		{
			header: 'Inventario Maximo',
			accessorKey: 'Inventario_Maximo',
			cell: (cell) => <div className='text-end'>{cell.getValue()}</div>
		},
		{
			header: 'Dias Cobertura',
			accessorKey: 'Dias_Cobertura',
			cell: (cell) => <div className='text-end'>{cell.getValue()}</div>
		},
		{
			header: 'PVD Usado',
			accessorKey: 'PVD_Usado',
			cell: (cell) => <div className='text-end'>{cell.getValue()}</div>
		},
		{
			header: 'Cobertura Fuente',
			accessorKey: 'CoberturaFuente'
		},
		{
			header: 'Dias Cobertura Calc',
			accessorKey: 'DiasCoberturaCalc',
			cell: (cell) => <div className='text-end'>{cell.getValue()}</div>
		},
		{
			header: 'Costo Inventario',
			accessorKey: 'Costo_Inventario',
			cell: (cell) => <div className='text-end'>₡{cell.getValue().toLocaleString('es-CR')}</div>
		},
		{
			header: 'Costo Sobre Existencia',
			accessorKey: 'Costo_Sobre_Existencia',
			cell: (cell) => <div className='text-end'>₡{cell.getValue().toLocaleString('es-CR')}</div>
		},
		{
			header: 'Existencia',
			accessorKey: 'Existencia',
			cell: (cell) => <div className='text-end'>{cell.getValue()}</div>
		},
		{
			header: 'Sobre Existencia',
			accessorKey: 'Sobre_Existencia',
			cell: (cell) => <div className='text-end'>{cell.getValue()}</div>
		}
	];
	return <TableWrapper
		table={
			<Table
				tableID='homeDataTable'
				data={tableDataJSON.slice(0, 10)}
				columns={myColumns}
			/>
		}
	/>
}

export default OverstockLocalTable