using System;
using System.Collections.Generic;
using System.Linq;
using IPHeatMap.Data.Models;
using IPHeatMap.Service.Services;
using Microsoft.AspNetCore.Mvc;

namespace IPHeatMap.Client.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class HeatMapController : Controller
    {
        private readonly HeatMapService _service;

        public HeatMapController(HeatMapService service)
        {
            _service = service;
        }

        [HttpGet]
        public IEnumerable<HeatLayerPoint> GetHeatLayerPoints()
        {
            return _service.GetHeatLayerPoints();
        }
    }
}