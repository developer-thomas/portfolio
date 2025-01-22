import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  @ViewChild('videoElement', { static: true })
  videoElement!: ElementRef<HTMLVideoElement>;
  ngOnInit(): void {
    if (this.videoElement && this.videoElement.nativeElement) {
      const video = this.videoElement.nativeElement;

      video.muted = true;
      video.loop = true;
      video.autoplay = true;

      video.play().catch((error) => {
        console.error('Erro ao iniciar o vídeo', error);
      });
    }
  }
}
