import React from 'react';
import TableWrapper from '../elements/TableWrapper';
import Table from '../elements/Table';
import tableDataJSON from '../../json/inventory-overstock.json';

const formatNumber = (value, options = {}) => {
	const num = Number(value);
	if (Number.isNaN(num)) return value ?? '';
	return new Intl.NumberFormat('en-US', {
		minimumFractionDigits: 0,
		maximumFractionDigits: 10,
		...options
	}).format(num);
};

const OverstockLocalTable = () => {

	const myColumns = [
		{
			header: 'ID',
			accessorKey: 'Id_Articulo',
			enableHiding: true,
			cell: (cell) => <div className='text-end'>{cell.getValue()}</div>
		},
		{
			header: 'ID Hijo',
			accessorKey: 'Articulo_Codigo_Hijo',
			enableHiding: true,
			cell: (cell) => <div className='text-end'>{cell.getValue()}</div>
		},
		{
			header: 'Factor Unitario',
			accessorKey: 'Articulo_Factor_Unitario',
			enableHiding: true,
			cell: (cell) => <div className='text-end'>{formatNumber(cell.getValue())}</div>
		},
		{
			header: 'Nombre',
			accessorKey: 'Nombre',
			enableHiding: true,
		},
		{
			header: 'Categoria',
			accessorKey: 'Categoria',
			enableHiding: true,
		},
		{
			header: 'Marca',
			accessorKey: 'Marca',
			enableHiding: true,
		},
		{
			header: 'Casa',
			accessorKey: 'Casa',
			enableHiding: true,
		},
		{
			header: 'Departamento',
			accessorKey: 'Departamento',
			enableHiding: true,
		},
		{
			header: 'Costo Unitario',
			accessorKey: 'Costo_Unitario',
			enableHiding: true,
			cell: (cell) => <div className='text-end'>₡{formatNumber(cell.getValue(), {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
		},
		{
			header: 'ABC',
			accessorKey: 'ABC',
			enableHiding: true,
			cell: (cell) => <div className='text-center'>{cell.getValue()}</div>
		},
		{
			header: 'AxC ABC Auto',
			accessorKey: 'AxC_ABC_Auto',
			enableHiding: true,
			cell: (cell) => <div className='text-end'>{formatNumber(cell.getValue())}</div>
		},
		{
			header: 'Existencia Actual',
			accessorKey: 'Existencia_Actual',
			enableHiding: true,
			cell: (cell) => <div className='text-end'>{formatNumber(cell.getValue())}</div>
		},
		{
			header: 'Existencia Padre/Hijo',
			accessorKey: 'Existencia_PadreHijo',
			enableHiding: true,
			cell: (cell) => <div className='text-end'>{formatNumber(cell.getValue())}</div>
		},
		{
			header: 'Transito',
			accessorKey: 'Transito',
			enableHiding: true,
			cell: (cell) => <div className='text-end'>{formatNumber(cell.getValue())}</div>
		},
		{
			header: 'Politica Reposicion',
			accessorKey: 'Politica_Reposicion',
			enableHiding: true,
			cell: (cell) => <div className='text-end'>{formatNumber(cell.getValue())}</div>
		},
		{
			header: 'PVD',
			accessorKey: 'PVD',
			enableHiding: true,
			cell: (cell) => <div className='text-end'>{formatNumber(cell.getValue())}</div>
		},
		{
			header: 'Stock Minimo',
			accessorKey: 'Stock_Minimo',
			enableHiding: true,
			cell: (cell) => <div className='text-end'>{formatNumber(cell.getValue())}</div>
		},
		{
			header: 'Punto Reorden',
			accessorKey: 'Punto_Reorden',
			enableHiding: true,
			cell: (cell) => <div className='text-end'>{formatNumber(cell.getValue())}</div>
		},
		{
			header: 'Inventario Maximo',
			accessorKey: 'Inventario_Maximo',
			enableHiding: true,
			cell: (cell) => <div className='text-end'>{formatNumber(cell.getValue())}</div>
		},
		{
			header: 'Días Cobertura',
			accessorKey: 'Dias_Cobertura',
			enableHiding: true,
			cell: (cell) => <div className='text-end'>{formatNumber(cell.getValue())}</div>
		},
		{
			header: 'PVD Imputado',
			id: 'PVD_Imputado',
			accessorKey: 'PVD',
			enableHiding: true,
			cell: (cell) => <div className={`point-bull point-bull-${ cell.getValue() === 0 ? 'yes' : 'no' }-inputad`}></div>
		},
		{
			header: 'PVD Usado',
			accessorKey: 'PVD_Usado',
			enableHiding: true,
			cell: (cell) => <div className='text-end'>{formatNumber(cell.getValue())}</div>
		},
		{
			header: 'Cobertura Fuente',
			accessorKey: 'CoberturaFuente',
			enableHiding: true,
		},
		{
			header: 'Días Cobertura Calc',
			accessorKey: 'DiasCoberturaCalc',
			enableHiding: true,
			cell: (cell) => <div className='text-end'>{formatNumber(cell.getValue())}</div>
		},
		{
			header: 'Costo Inventario',
			accessorKey: 'Costo_Inventario',
			enableHiding: true,
			cell: (cell) => <div className='text-end'>₡{formatNumber(cell.getValue(), {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
		},
		{
			header: 'Costo Sobre Existencia',
			accessorKey: 'Costo_Sobre_Existencia',
			enableHiding: true,
			cell: (cell) => <div className='text-end'>₡{formatNumber(cell.getValue(), {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
		},
		{
			header: 'Existencia',
			accessorKey: 'Existencia',
			enableHiding: true,
			cell: (cell) => <div className='text-end'>{formatNumber(cell.getValue())}</div>
		},
		{
			header: 'Sobre Existencia',
			accessorKey: 'Sobre_Existencia',
			enableHiding: true,
			cell: (cell) => <div className='text-end'>{formatNumber(cell.getValue())}</div>
		}
	];
	return <TableWrapper
		tableHeads={myColumns}
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