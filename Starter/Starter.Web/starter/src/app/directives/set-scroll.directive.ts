import { HostListener, Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
@Directive({ selector: '[set-scroll]' })

export class SetScrollDirective implements AfterViewInit {

  @Input() footerElement = null;
  constructor(private el: ElementRef) {
  }

  @Input() offsetHeight: number;

  ngAfterViewInit(): void {
    this.calculateAndSetElementHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calculateAndSetElementHeight();
  }

  private calculateAndSetElementHeight() {
    setTimeout(() => {

      if (this.offsetHeight == undefined) {
        this.offsetHeight = 0;
      }

      this.el.nativeElement.style.overflowY = 'auto';
      const trim = 15 + this.offsetHeight;
      const windowHeight = window.innerHeight;
      const elementOffsetTop = this.getElementOffsetTop();
      const footerElementMargin = this.getfooterElementMargin();
      const calcHeight = windowHeight - footerElementMargin - elementOffsetTop - trim;
      this.el.nativeElement.style.height = calcHeight + 'px';
    });
  }

  private getElementOffsetTop() {
    const pos = this.el.nativeElement.getBoundingClientRect().top + window.scrollY;
    return pos;
  }

  private getfooterElementMargin() {
    if (!this.footerElement) { return 0; }
    const footerStyle = window.getComputedStyle(this.footerElement);
    return parseInt(footerStyle.height, 10);
  }
}
