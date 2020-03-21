using IPHeatMap.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace IPHeatMap.Service.Services
{
    public class HeatMapService
    {
        private FileParserService _fileParserService;
        public HeatMapService(FileParserService fileParserService)
        {
            _fileParserService = fileParserService;
        }

        public IEnumerable<HeatLayerPoint> GetHeatLayerPoints()
        {
            return _fileParserService.ParseFile("../IPHeatMap.Service/Services/Assets/GeoLite2-City-Blocks-IPv4.csv")
                .Select(HeatLayerPoint.FromIPv4());
        }
    }
}
