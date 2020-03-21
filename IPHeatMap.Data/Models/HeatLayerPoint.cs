using System;
using System.Collections.Generic;
using System.Text;

namespace IPHeatMap.Data.Models
{
    public class HeatLayerPoint
    {
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string Intensity { get; set; }

        public static Func<IPv4, HeatLayerPoint> FromIPv4()
        {
            return i => new HeatLayerPoint
            {
                Latitude = i.Latitude,
                Longitude = i.Longitude,
                Intensity = "0.5"
            };
        }
    }
}
