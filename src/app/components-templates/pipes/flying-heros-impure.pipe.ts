import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHerosImpure'
})
export class FlyingHerosImpurePipe implements PipeTransform {

  transform(allHeros: any[]) {
    return allHeros.filter(hero => hero.canFly);
  }

}
