import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map: any;

  constructor() { }

  ngAfterViewInit() {
    this.initMap();
  }

  initMap() {
    this.map = L.map('map', {
      center: [ 41.7354862, -111.834388 ],
      zoom: 15
    });

    console.log('inside init');
    console.log(this.map);

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    
    tiles.addTo(this.map);

    // L.heatLayer([[41.7354862, -111.834388, 0.5], // lat, lng, intensity
    //   ], {radius: 1000}).addTo(this.map);

    this.map.on('moveend', this.onMapMoveEnd);

    console.log(this.map.getBounds());
  }
  
  onMapMoveEnd(e) {
    console.log('inside map move');
    console.log(e);
  }
}
