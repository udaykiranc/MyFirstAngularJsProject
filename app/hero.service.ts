import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROS} from './mock-heros';

@Injectable()
export class HeroService {
	getHeroes() : Promise<Hero[]> {
		return Promise.resolve(HEROS);
	}

	getHeroesSlowly() : Promise<Hero[]> {
		return (resolve => setTimeout(resolve, 2)).then(() => this.getHeroes());
	}
}