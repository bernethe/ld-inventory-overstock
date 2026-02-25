import {FaFastForward, FaFastBackward} from 'react-icons/fa';

const TableWrapper = ({table}) => {
    return <>
        <div className='row mt-4'>
			<div className='col-sm-4 offset-sm-8 text-end'>
				<input type='text' className='form-control' placeholder='Buscar' />
			</div>
		</div>
		<div className='row'>
			<div className='col'>
				<div className='row my-4'>
					<div className='col'>
						<div className='table-responsive'>
                            {table}
                        </div>
					</div>
				</div>
			</div>
		</div>
		<div className='row'>
			<div className='col-sm-3 py-2 text-center text-sm-start'>
				<span className='text-muted'>Líneas por Página:</span>
				<label className='mx-2'>
					<select className='form-select'>
						<option value='10'>10</option>
						<option value='25'>25</option>
						<option value='50'>50</option>
						<option value='100'>100</option>
					</select>
				</label>
			</div>
			<div className='col-sm-6 py-2 text-center'>
				<nav aria-label='Page navigation' className='d-inline-block'>
					<ul className='pagination'>
						<li className='page-item disabled'><a className='page-link' href='#'><FaFastBackward /></a></li>
						<li className='page-item active'><a className='page-link' href='#'>1</a></li>
						<li className='page-item'><a className='page-link' href='#'>2</a></li>
						<li className='page-item'><a className='page-link' href='#'>3</a></li>
						<li className='page-item'><a className='page-link' href='#'><FaFastForward /></a></li>
					</ul>
				</nav>
			</div>
			<div className='col-sm-3 py-2 text-muted text-center text-sm-end'>Página 1 de 3 (23 registros)</div>
		</div>
    </>
}

export default TableWrapper