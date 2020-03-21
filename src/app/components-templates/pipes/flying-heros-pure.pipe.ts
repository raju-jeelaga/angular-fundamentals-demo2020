import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHerosPure'
})
export class FlyingHerosPurePipe implements PipeTransform {
y
  transform(allHeros: any[]) {
    return allHeros.filter(hero => hero.canFly);
  }

}
