import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Select from 'react-select';
import MainLayout from '../layouts/MainLayout';
import locals from '../../json/locals.json';

const HomePage = () => {

	const [selectedLocal, setSelectedLocal] = useState(null);

	const navigate = useNavigate();

	return <MainLayout>
		<div className='container py-4'>
			<div className='row my-4'>
				<div className='col-sm-6 offset-sm-3'>
					<h4>Consulta Sobreexistenia</h4>
					<Select placeholder='Seleccione el local a consultar' options={locals} onChange={(e) => setSelectedLocal(e)} value={selectedLocal} />
					{selectedLocal && <div className='d-flex flex-column align-items-end'>
						<button className='btn btn-primary mt-3' onClick={() => navigate(`/consulta/${selectedLocal.value}`)}>Consultar</button>
					</div>}
				</div>
			</div>
		</div>
	</MainLayout>
}

export default HomePage