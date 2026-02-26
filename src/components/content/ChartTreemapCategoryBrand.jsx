import React, { useMemo } from 'react';
import Highcharts from 'highcharts';
import TreemapModule from 'highcharts/modules/treemap';
import Chart from '../elements/Chart';
import overstockData from '../../json/inventory-overstock.json';

// Enable treemap support once per bundle.
if (typeof TreemapModule === 'function') {
	TreemapModule(Highcharts);
}

const currencyFormatter = new Intl.NumberFormat('es-CR', {
	maximumFractionDigits: 0
});

const ChartTreemapCategoryBrand = () => {
	const treemapData = useMemo(() => {
		const categories = new Map();

		overstockData.forEach((item) => {
			const category = item.Categoria || 'Sin categoría';
			const brand = item.Marca || 'Sin marca';
			const cost = Number(item.Costo_Sobre_Existencia) || 0;

			if (!categories.has(category)) {
				categories.set(category, {
					id: `cat-${categories.size + 1}`,
					name: category,
					value: 0,
					brands: new Map()
				});
			}

			const categoryEntry = categories.get(category);
			categoryEntry.value += cost;

			if (!categoryEntry.brands.has(brand)) {
				categoryEntry.brands.set(brand, {
					id: `brand-${categoryEntry.id}-${categoryEntry.brands.size + 1}`,
					name: brand,
					value: 0,
					parent: categoryEntry.id
				});
			}

			const brandEntry = categoryEntry.brands.get(brand);
			brandEntry.value += cost;
		});

		const flattened = [];
		categories.forEach((category) => {
			flattened.push({
				id: category.id,
				name: category.name,
				value: category.value
			});
			category.brands.forEach((brand) => {
				flattened.push(brand);
			});
		});

		return flattened;
	}, []);

	const options = useMemo(() => ({
		chart: {
			type: 'treemap',
			backgroundColor: 'transparent'
		},
		title: {
			text: 'Costo sobre existencia por categoría y marca'
		},
		subtitle: {
			text: 'Suma de Costo_Sobre_Existencia (CRC - ₡) agrupada por Categoría y Marca'
		},
		tooltip: {
			useHTML: true,
			formatter() {
				const value = currencyFormatter.format(this.point.value || 0);
				return `<strong>${this.point.name}</strong><br/>₡${value}`;
			}
		},
		legend: {
			enabled: false
		},
		colorAxis: {
			minColor: '#E8F1FF',
			maxColor: '#2251FF'
		},
		series: [{
			type: 'treemap',
			layoutAlgorithm: 'squarified',
			allowDrillToNode: true,
			animationLimit: 500,
			levelIsConstant: false,
			levels: [{
				level: 1,
				borderWidth: 2,
				colorByPoint: true,
				dataLabels: {
					enabled: true,
					style: {
						fontWeight: 'bold',
						textOutline: 'none'
					},
					formatter() {
						const value = currencyFormatter.format(this.point.value || 0);
						return `${this.point.name}<br/>₡${value}`;
					}
				}
			}, {
				level: 2,
				borderWidth: 1,
				dataLabels: {
					enabled: true,
					style: {
						textOutline: 'none'
					},
					formatter() {
						const value = currencyFormatter.format(this.point.value || 0);
						return `${this.point.name}<br/>₡${value}`;
					}
				}
			}],
			data: treemapData
		}],
		credits: {
			enabled: false
		}
	}), [treemapData]);

	return <div className='rounded border shadow-sm bg-white p-3 my-2'>
		<Chart options={options} />
	</div>;
};

export default ChartTreemapCategoryBrand;