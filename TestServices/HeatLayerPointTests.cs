using IPHeatMap.Data.Models;
using IPHeatMap.Service.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Linq;

namespace TestServices
{
    [TestClass]
    public class HeatLayerPointTests
    {
        [TestMethod]
        public void HeatLayerPointFromIPv4Test()
        {
            IEnumerable<IPv4> testData = new List<IPv4> { new IPv4 { 
                    Network = "Network 1",
                    GeonameId = "Geo 1",
                    RegisteredCountryGeonameId = "Registerd 1",
                    RepresentedCountryGeonameId = "Rep 1",
                    IsAnonymousProxy = "Anony 1",
                    IsSatelliteProvider = "Sat 1",
                    PostalCode = "Postal 1",
                    Latitude = "lat 1",
                    Longitude = "long 1",
                    AccuracyRadius = "Acc 2"
                }, new IPv4 {
                    Network = "Network 2",
                    GeonameId = "Geo 2",
                    RegisteredCountryGeonameId = "Registerd 2",
                    RepresentedCountryGeonameId = "Rep 2",
                    IsAnonymousProxy = "Anony 2",
                    IsSatelliteProvider = "Sat 2",
                    PostalCode = "Postal 2",
                    Latitude = "lat 2",
                    Longitude = "long 2",
                    AccuracyRadius = "Acc 2"
                }, new IPv4 {
                    Network = "Network 3",
                    GeonameId = "Geo 3",
                    RegisteredCountryGeonameId = "Registerd 3",
                    RepresentedCountryGeonameId = "Rep 3",
                    IsAnonymousProxy = "Anony 3",
                    IsSatelliteProvider = "Sat 3",
                    PostalCode = "Postal 3",
                    Latitude = "lat 3",
                    Longitude = "long 3",
                    AccuracyRadius = "Acc 3"
                }
            };

            IEnumerable<HeatLayerPoint> result = testData.Select(HeatLayerPoint.FromIPv4());

            Assert.AreEqual(3, result.Count(), "should return 3 records");
            Assert.AreEqual(result.FirstOrDefault().Latitude, "lat 1", "Latitude wrong");
            Assert.AreEqual(result.FirstOrDefault().Longitude, "long 1", "Longitude wrong");
            Assert.AreEqual(result.FirstOrDefault().Intensity, "0.5", "Intensity wrong");
        }
    }
}
