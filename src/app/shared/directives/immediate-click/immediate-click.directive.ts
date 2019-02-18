import { ElementRef, Directive, OnInit } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detetctor.service';

@Directive({
    selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {

    constructor(
        private element: ElementRef,
        private platFormDetector: PlatformDetectorService
    ) { }

    ngOnInit(): void {
        this.platFormDetector.isPlatformBrowser && this.element.nativeElement.click();
    }
}