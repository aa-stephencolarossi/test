import Model from './Model';

export default class ReportSection extends Model {
	name!: string;
	title!: string;

	constructor(props?: any) {
		super(props);
	}

	getFullName() {
		return `${this.title} - ${this.name}`;
	}
}
