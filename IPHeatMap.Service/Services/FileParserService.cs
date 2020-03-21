using FileHelpers;
using IPHeatMap.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace IPHeatMap.Service.Services
{
    public class FileParserService
    {
        private FileHelperEngine<IPv4> _FileEngine;
        public FileParserService(FileHelperEngine<IPv4> fileEngine)
        {
            _FileEngine = fileEngine;
        }

        public IEnumerable<IPv4> ParseFile(string fileName)
        {
            var result = _FileEngine.ReadFile(fileName).ToList();

            //remove header
            result.Remove(result.First());
            return result;
        }
    }
}
