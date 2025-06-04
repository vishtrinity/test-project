import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IVideo } from './ivideo';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videosUrl = 'assets/videos.json';

  constructor(private http: HttpClient) { }

  getVideos(): Observable<IVideo[]> {
    return this.http.get<IVideo[]>(this.videosUrl);
  }

  getVideo(id: number): Observable<IVideo | undefined> {
    return this.getVideos().pipe(
      map(videos => videos.find(video => video.id === id))
    );
  }
}
