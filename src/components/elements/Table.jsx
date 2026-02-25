import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';

const Table = ({tableID, data, columns}) => {

	const [sortingState, setSortingState] = useState();

	const table = useReactTable({
		data: data,
		columns: columns,
		// enableRowSelection: true,
		enableMultiRowSelection: false,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		onSortingChange: setSortingState,
		// onRowSelectionChange: setRowSel,
		state: {
			sorting: sortingState,
			// rowSelection: rowSel
		}
	});

	return <table className='table table-striped table-hover table-tanstack' id={tableID}>
		<thead>
			{
				table.getHeaderGroups().map(headerGroup => <tr key={`headerGroup_${headerGroup.id}`}>
					{
						headerGroup.headers.map(header => <th key={`header_${header.id}`} onClick={ header.column.getToggleSortingHandler() }>
							{ flexRender(header.column.columnDef.header, header.getContext() ) }
							<div className={ `table-sort-icos table-sort-icos-${!header.column.getIsSorted() ? 'plain' : header.column.getIsSorted()}` }>
								<FaChevronUp />
								<FaChevronDown />
							</div>
						</th> )
					}
				</tr> )
			}
		</thead>
		<tbody>
			{
				table.getRowModel().rows.map(row => <tr
					key={`row_${row.id}`}
					data-id={row.original.id}
					// onClick={ row.getToggleSelectedHandler() }
					className={ row.getIsSelected() ? 'selected' : null }
				>
					{
						row.getVisibleCells().map(cell => <td key={`cell_${cell.id}`}>
							{ flexRender(cell.column.columnDef.cell, cell.getContext() ) }
						</td>)
					}
				</tr>)
			}
			{
				data.length === 0 &&
				<tr>
					<td colSpan={columns.length} className='text-muted'>Ningún dato disponible en esta tabla</td>
				</tr>
			}
		</tbody>
	</table>
}

export default Table