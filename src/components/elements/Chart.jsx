import { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import VariablePie from 'highcharts/modules/variable-pie';
import 'highcharts/modules/exporting';

// Initialize the variablepie module
if (typeof VariablePie === 'function') {
	VariablePie(Highcharts);
}

const Chart = ({ options }) => {

	const chartRef = useRef(null);

	useEffect(() => {
		if (!options) return;
		const chart = Highcharts.chart(chartRef.current, options);
		return () => chart?.destroy();
	}, [options]);

	return <div ref={chartRef}></div>
}

export default Chart