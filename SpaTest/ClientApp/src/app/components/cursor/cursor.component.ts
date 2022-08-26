import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss'],
  host: {
    '(document:mousemove)': 'onDocumentMouseMove($event)'
  }
})
export class CursorComponent implements OnInit {
  @ViewChild('cursor') cursorElement: ElementRef<HTMLDivElement> | undefined;

  onDocumentMouseMove(event: MouseEvent) {
    if (!this.cursorElement) return;

    this.cursorElement.nativeElement.style.top = `${event.y}px`
    this.cursorElement.nativeElement.style.left = `${event.x}px`
  }

  constructor() { }

  ngOnInit(): void {
  }

}
