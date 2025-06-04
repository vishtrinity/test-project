import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVideo } from '../ivideo';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  video: IVideo | undefined;

  constructor(private route: ActivatedRoute, private videoService: VideoService) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.videoService.getVideo(id).subscribe(v => this.video = v);
  }
}
