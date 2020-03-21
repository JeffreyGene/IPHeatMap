using IPHeatMap.Data.Models;
using IPHeatMap.Service.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Linq;

namespace TestServices
{
    [TestClass]
    public class FileParserServiceTests
    {
        private FileParserService _service;

        [TestInitialize]
        public void TestInit()
        {
            _service = new FileParserService(new FileHelpers.FileHelperEngine<IPHeatMap.Data.Models.IPv4>());
        }

        [TestMethod]
        public void ParseFileTest()
        {
            IEnumerable<IPv4> result = _service.ParseFile("../../../TestFiles/Test.csv");

            Assert.AreEqual(3, result.Count(), "should return 3 records");
            Assert.AreEqual(result.FirstOrDefault().Network, "1.0.0.0/24", "Network wrong");
            Assert.AreEqual(result.FirstOrDefault().GeonameId, "8349238", "GeonameId wrong");
            Assert.AreEqual(result.FirstOrDefault().RegisteredCountryGeonameId, "2077456", "RegisteredCountryGeonameId wrong");
            Assert.AreEqual(result.FirstOrDefault().RepresentedCountryGeonameId, "", "RepresentedCountryGeonameId wrong");
            Assert.AreEqual(result.FirstOrDefault().IsAnonymousProxy, "0", "IsAnonymousProxy wrong");
            Assert.AreEqual(result.FirstOrDefault().IsSatelliteProvider, "0", "IsSatelliteProvider wrong");
            Assert.AreEqual(result.FirstOrDefault().PostalCode, "5107", "PostalCode wrong");
            Assert.AreEqual(result.FirstOrDefault().Latitude, "-34.7825", "Latitude wrong");
            Assert.AreEqual(result.FirstOrDefault().Longitude, "138.6106", "Longitude wrong");
            Assert.AreEqual(result.FirstOrDefault().AccuracyRadius, "100", "AccuracyRadius wrong");
        }
    }
}
