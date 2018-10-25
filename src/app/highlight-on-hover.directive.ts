import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightOnHover]'
})
export class HighlightOnHoverDirective implements OnInit {

  constructor(private elRef : ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, "color", "blue");
  }

  @HostListener("mouseenter") mouseEnterEvent (eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement, "color", "blue");
    this.renderer.setStyle(this.elRef.nativeElement, "fontSize", "2em");
  }

  @HostListener("mouseleave") mouseLeaveEvent (eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement, "color", "black");
    this.renderer.setStyle(this.elRef.nativeElement, "fontSize", "1em");
  }
}
