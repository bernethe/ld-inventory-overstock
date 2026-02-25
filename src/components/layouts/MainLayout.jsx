import Header from '../elements/Header';

const MainLayout = ({pageTitle=null, children}) => {
	return <>
		<Header />
		<div className='container-fluid'>
			{
				pageTitle && <div className='row'>
					<div className='col'>
						<h2>{pageTitle}</h2>
					</div>
				</div>
			}
		</div>
		{children}
	</>
}

export default MainLayout