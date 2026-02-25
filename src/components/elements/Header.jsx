import React from 'react'
import { mainTitle, user } from '../../_globals'
import LogoLD from '../svg/LogoLD'

const Header = () => {
	return <header className='main-header'>
		<div className='main-header-up'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col'>
						<div className='main-header-logo'>
							<LogoLD />
						</div>
					</div>
				</div>
			</div>
		</div>
		<nav className='main-header-nav d-print-none'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-6 col-sm-2 main-header-nav-identity'>
						<strong>{mainTitle}</strong>
					</div>
					<div className='col-sm-6 d-none d-sm-block main-header-nav-links'>
						<ul>
							<li><a href='/'>Inicio</a></li>
						</ul>
					</div>
					<div className='col-6 col-sm-4 main-header-nav-user'>
						<img src={user.avatar} alt={user.name} />
						{user.name}
						{/* <FiChevronDown /> */}
					</div>
				</div>
			</div>
		</nav>
	</header>
}

export default Header