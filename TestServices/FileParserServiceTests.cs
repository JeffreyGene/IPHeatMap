using IPHeatMap.Service.Services;
using Microsoft.VisualStudio.TestTools.UnitTesting;

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
        public void TestMethod1()
        {
            _service.ParseFile("../../../../IPHeatMap.Service/Services/Assets/GeoLite2-City-Blocks-IPv4.csv");
            Assert.AreEqual(1, 1);
        }
    }
}
