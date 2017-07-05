import {injectable} from 'inversify';
import {StorageDriver} from 'ffc-node';

@injectable()
export class MySQLStorageDriver implements StorageDriver {

	find(entity: string, data: any): Promise<any> {
		return undefined;
	}

	list(entity: string): Promise<any> {
		return undefined;
	}

	save(entity: string, data: any): Promise<any> {
		return undefined;
	}

	registerEntity(constructor: Function): any {
		return undefined;
	}

	createTables(): Promise<any> {
		return undefined;
	}

	clear(): any {
		return undefined;
	}

}
