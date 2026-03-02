import {FaList, FaFileExcel, FaFastForward, FaFastBackward} from 'react-icons/fa';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const TableWrapper = ({table, tableHeads}) => {
    return <>
        <div className='row mt-4'>
			<div className='col-sm-8 my-2'>
				<button className='btn btn-primary me-2'><FaFileExcel /></button>
				<div className='dropdown d-inline-block'>
					<button className='btn btn-primary dropdown-toggle' type='button' id='dropdownMenuButton' data-bs-toggle='dropdown' aria-expanded='false'>
						<FaList />
					</button>
					<ul className='dropdown-menu' aria-labelledby='dropdownMenuButton' onClick={ e => e.stopPropagation() }>
						{tableHeads.map((head, index) => (
							<li key={head.accessorKey}><label className='d-block px-2 py-1'><input type='checkbox' /> {head.header}</label></li>
						))}
					</ul>
				</div>
			</div>
			<div className='col-sm-4 text-end'>
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