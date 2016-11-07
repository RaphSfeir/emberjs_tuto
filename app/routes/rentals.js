import Ember from 'ember';

let rentals = [{
	id: 'grand-old-manion', 
	title: 'Grand Old Mansion',
	owner: 'Jacques Chirac',
	city: 'Paris',
	type: 'Estate',
	bedrooms: 14,
	image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
}, 
{
	id: 'urban-living',
	title: 'Urban Living', 
	owner: 'Maurice Couillon',
	city: 'Marseille',
	type: 'Condo',
	bedrooms: 1,
	image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
}];

export default Ember.Route.extend({
	model() {
		return this.get('store').findAll('rental'); 
	}
});
