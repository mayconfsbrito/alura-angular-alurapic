import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImmediateClickDirective } from './immediate-click.directive';

@NgModule({
    declarations: [
        ImmediateClickDirective
    ],
    exports: [
        ImmediateClickDirective
    ],
    imports: [
        CommonModule
    ]

})
export class ImmediateClickModule {}