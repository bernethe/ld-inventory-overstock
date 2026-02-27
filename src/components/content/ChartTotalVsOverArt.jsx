import React from 'react';
import Chart from '../elements/Chart';

const ChartTotalVsOverArt = () => {

	const dataObj = {
		chart: {
			type: 'pie',
			backgroundColor: 'transparent',
			custom: {},
			events: {
				render() {
					const chart = this,
						series = chart.series[0];
					let customLabel = chart.options.chart.custom.label;
					if (!customLabel) {
						customLabel = chart.options.chart.custom.label =
							chart.renderer.label(
								'Total<br/>' +
								'<strong>10,832</strong>'
							)
								.css({
									color: '#000',
									textAnchor: 'middle'
								})
								.add();
					}
					const x = series.center[0] + chart.plotLeft,
						y = series.center[1] + chart.plotTop -
						(customLabel.attr('height') / 2);
					customLabel.attr({
						x,
						y
					});
					// Set font size based on chart diameter
					customLabel.css({
						fontSize: `${series.center[2] / 12}px`
					});
				}
			}
		},
		accessibility: {
			point: {
				valueSuffix: '%'
			}
		},
		title: {
			text: 'Piezas: Total vs Sobre Existencia'
		},
		subtitle: {
			text: ''
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			series: {
				allowPointSelect: true,
				cursor: 'pointer',
				borderRadius: 8,
				dataLabels: [{
					enabled: true,
					distance: 20,
					format: '{point.name}'
				}, {
					enabled: true,
					distance: -15,
					format: '{point.percentage:.0f}%',
					style: {
						fontSize: '0.9em'
					}
				}],
				showInLegend: true
			}
		},
		series: [{
			name: 'Registrations',
			colorByPoint: true,
			innerSize: '75%',
			data: [
				{
					name: 'Piezas <br /> inventario <br /> (6,611)',
					y: 6611
				},
				{
					name: 'Piezas <br /> sobre <br /> existencia <br /> (4,221)',
					y: 4221
				}
			]
		}]
	};

	return <div className='rounded border shadow-sm bg-white p-3 my-2'>
		<Chart options={dataObj} />
	</div>
}

export default ChartTotalVsOverArt