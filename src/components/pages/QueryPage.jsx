import React, {useState} from 'react';
import Select from 'react-select';
import MainLayout from '../layouts/MainLayout';
import CountingNumber from '../elements/CountingNumber';
import ChartWithVsWithout from '../content/ChartWithVsWithout';
import ChartTotalVsOver from '../content/ChartTotalVsOver';
import ChartTotalVsOverArt from '../content/ChartTotalVsOverArt';
import OverstockLocalTable from '../content/OverstockLocalTable';
import ChartTreemapCategoryBrand from '../content/ChartTreemapCategoryBrand';
import locals from '../../json/locals.json';

const QueryPage = () => {

	const [selectedLocal, setSelectedLocal] = useState(locals[4]);

	return <MainLayout>
		<div className='container-fluid my-4'>
			<div className='row'>
				<div className='col-12'>
					<h4>{selectedLocal.label}</h4>
				</div>
			</div>
			<div className='row my-2'>
				<div className='col-12'>
					<div className='rounded border shadow-sm bg-white p-3'>
						<div className='row'>
							<div className='col-sm-2'>
								<div className='small text-muted'>Sucursal</div>
								<Select placeholder='Seleccionar' options={locals} value={selectedLocal} onChange={setSelectedLocal} />
							</div>
							<div className='col-sm-2'>
								<div className='small text-muted'>ABC</div>
								<Select placeholder='Seleccionar' />
							</div>
							<div className='col-sm-2'>
								<div className='small text-muted'>Categoría</div>
								<Select placeholder='Seleccionar' />
							</div>
							<div className='col-sm-2'>
								<div className='small text-muted'>Marca</div>
								<Select placeholder='Seleccionar' />
							</div>
							<div className='col-sm-2'>
								<div className='small text-muted'>Departamento</div>
								<Select placeholder='Seleccionar' />
							</div>
							<div className='col-sm-2'>
								<button className='btn btn-outline-secondary mt-4 me-2'>Limpiar</button>
								<button className='btn btn-primary mt-4'>Consultar</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-sm-4 my-2'>
					<div className='rounded border shadow-sm bg-white p-3 text-center'>
						<h6 className='text-muted'>Artículos</h6>
						<div className='h2'><strong><CountingNumber number={1447} milesSeparator='.' /></strong></div>
						<div className='small text-muted'>Número de productos <strong>1.447</strong> (100.0%)</div>
					</div>
				</div>
				<div className='col-sm-4 my-2'>
					<div className='rounded border shadow-sm bg-white p-3 text-center'>
						<h6 className='text-muted'>Costo (₡)</h6>
						<div className='h2'><strong>₡<CountingNumber number={46579977} milesSeparator='.' /></strong></div>
						<div className='small text-muted'>Sobre Existencia: <strong>₡31.776.278</strong> (68.2%)</div>
					</div>
				</div>
				<div className='col-sm-4 my-2'>
					<div className='rounded border shadow-sm bg-white p-3 text-center'>
						<h6 className='text-muted'>Piezas</h6>
						<div className='h2'><strong><CountingNumber number={6427} milesSeparator='.' /></strong></div>
						<div className='small text-muted'>Sobre Existencia: <strong>4.037,526</strong> (62.8%)</div>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-sm-4'>
					<ChartWithVsWithout />
				</div>
				<div className='col-sm-4'>
					<ChartTotalVsOver />
				</div>
				<div className='col-sm-4'>
					<ChartTotalVsOverArt />
				</div>
			</div>
			<div className='row'>
				<div className='col-12'>
					<ChartTreemapCategoryBrand />
				</div>
			</div>
			<div className='row'>
				<div className='col-12'>
					<OverstockLocalTable />
				</div>
			</div>
		</div>
	</MainLayout>
}

export default QueryPage