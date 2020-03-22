import { Component, AfterViewInit } from '@angular/core';
// import * as L from 'leaflet';
import { FetchDataService } from '../fetch-data/fetch-data-service';
import { HeatLayerPoint } from '../models/HeatLayerPoint';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map: any;
  private fetchData: FetchDataService;
  private heatLayerPoints: string[][];

  constructor(fetchData: FetchDataService) {
    this.fetchData = fetchData;
  }

  ngAfterViewInit() {
    this.fetchData.GetHeatLayerPoints().subscribe(result => {
      this.heatLayerPoints = result.filter(p => !!p.Latitude && !!p.Longitude).map(p => [p.Latitude, p.Longitude, p.Intensity]);
      // this.heatLayerPoints = [
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      //   ['41.7354862', '-111.834388', '0.5'],
      // ];
      this.initMap();
    });
  }

  initMap() {
    this.map = L.map('map', {
      center: [ 24.4798, 118.0819 ],
      zoom: 15
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    L.heatLayer(this.heatLayerPoints, {radius: 25}).addTo(this.map);
  }
}
