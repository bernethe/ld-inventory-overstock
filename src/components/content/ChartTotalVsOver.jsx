import React from 'react';
import Chart from '../elements/Chart';

const ChartTotalVsOver = () => {

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
								'<strong>₡81,696,370</strong>'
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
			text: 'Costo: Total Inventario vs Sobre Existencia'
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
					name: 'Valor <br /> Inventario <br /> (₡48,250,034)',
					y: 48250034
				},
				{
					name: 'Valor <br /> Sobre <br /> Existencia <br /> (₡33,446,336)',
					y: 33446336
				}
			]
		}]
	};

	return <div className='rounded border shadow-sm bg-white p-3 my-2'>
		<Chart options={dataObj} />
	</div>
}

export default ChartTotalVsOver