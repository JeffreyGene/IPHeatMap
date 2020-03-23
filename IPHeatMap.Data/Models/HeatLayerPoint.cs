using System;
using System.Collections.Generic;
using System.Text;

namespace IPHeatMap.Data.Models
{
    public class HeatLayerPoint
    {
        public double Latitude { get; set; }
        public double Longitude { get; set; }

        public static Func<IPv4, HeatLayerPoint> FromIPv4()
        {
            return i => new HeatLayerPoint
            {
                Latitude = double.Parse(i.Latitude),
                Longitude = double.Parse(i.Longitude),
            };
        }
    }
}
