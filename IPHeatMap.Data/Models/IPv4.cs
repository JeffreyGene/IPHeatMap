using FileHelpers;
using System;
using System.Collections.Generic;
using System.Text;

namespace IPHeatMap.Data.Models
{
    [DelimitedRecord(",")]
    public class IPv4
    {
        public string Network { get; set; }
        public string GeonameId { get; set; }
        public string RegisteredCountryGeonameId { get; set; }
        public string RepresentedCountryGeonameId { get; set; }
        public string IsAnonymousProxy { get; set; }
        public string IsSatelliteProvider { get; set; }
        public string PostalCode { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string AccuracyRadius { get; set; }
    }
}
