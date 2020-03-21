import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { FetchDataComponent } from '../fetch-data/fetch-data.component';
import { HeatLayerPoint } from '../models/HeatLayerPoint';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map: any;
  private fetchData: FetchDataComponent;
  private heatLayerPoints: string[][];

  constructor(fetchData: FetchDataComponent) {
    this.fetchData = fetchData;
  }

  ngOnInit() {
    this.fetchData.GetHeatLayerPoints().subscribe(result => {
      this.heatLayerPoints = result.map(p => [p.Latitude, p.Longitude, p.Intensity]);
    });
  }

  ngAfterViewInit() {
    this.initMap();
  }

  initMap() {
    this.map = L.map('map', {
      center: [ 41.7354862, -111.834388 ],
      zoom: 15
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    
    tiles.addTo(this.map);

    // L.heatLayer(this.heatLayerPoints, {radius: 1000}).addTo(this.map);
  }
}
