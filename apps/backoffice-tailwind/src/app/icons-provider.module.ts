import {NgModule} from '@angular/core';
import {NgIconsModule} from '@ng-icons/core';
import {heroUserCircle} from '@ng-icons/heroicons/outline';

const icons = {
  heroUserCircle,
};

@NgModule({
  imports: [NgIconsModule.withIcons(icons)],
  exports: [NgIconsModule],
})
export class IconsProviderModule {}
