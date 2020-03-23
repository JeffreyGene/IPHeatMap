import { Component, AfterViewInit } from '@angular/core';
import { FetchDataService } from '../fetch-data/fetch-data-service';

declare var L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map: any;
  private fetchData: FetchDataService;
  private heatLayerPoints: any;

  constructor(fetchData: FetchDataService) {
    this.fetchData = fetchData;
  }

  ngAfterViewInit() {
    this.fetchData.GetHeatLayerPoints().subscribe(result => {
      this.heatLayerPoints = result.map(p => [p.latitude, p.longitude, 0.5]);
      this.initMap();
    });
  }

  initMap() {
    this.map = L.map('map', {
      center: [ 41.7354862, -111.834388 ],
      zoom: 5
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    L.heatLayer(this.heatLayerPoints, {radius: 25}).addTo(this.map);
  }
}
