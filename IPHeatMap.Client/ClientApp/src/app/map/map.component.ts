import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
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
      // this.heatLayerPoints = result.map(p => [p.Latitude, p.Longitude, p.Intensity]);
      this.heatLayerPoints = [
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
        ['41.7354862', '-111.834388', '0.5'],
      ]
      this.initMap();
    });
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
    //<script src="../../../node_modules/leaflet.heat/dist/leaflet-heat.js"></script>
    var script = document.createElement('script');
    script.onload = function() {
      alert("Script loaded and ready");
    };
    script.src = "../../../node_modules/leaflet.heat/dist/leaflet-heat.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    setTimeout(() => {
      L.heatLayer(this.heatLayerPoints, {radius: 1000}).addTo(this.map);
    });
  }
}
