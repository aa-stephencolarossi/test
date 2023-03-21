import _ from 'lodash';

export default class Model {
	constructor(props: any) {
		_.extend(this, props);
	}
}
