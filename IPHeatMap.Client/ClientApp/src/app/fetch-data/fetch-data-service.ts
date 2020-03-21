import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeatLayerPoint } from '../models/HeatLayerPoint';

export class FetchDataService {
  private http: HttpClient;
  private baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
  }

  GetHeatLayerPoints() {
    return this.http.get<HeatLayerPoint[]>(this.baseUrl + 'api/HeatMap/GetHeatLayerPoints');
  }
}
