
using System.Collections.Generic;
using System.IO;
using Npoi.Mapper;
using NPOI.XSSF.UserModel;

namespace Starter.Services
{
    public interface IExcelConvertService
    {
        Stream GetExcelNoFormat<T>(List<T> list, string workBookName);
    }

    public class ExcelConvertService : IExcelConvertService
    {
        
        public Stream GetExcelNoFormat<T>(List<T> list, string workBookName)
        {
            var workbook = new XSSFWorkbook();
            var mapper = new Mapper(workbook);
            mapper.Put(list, workBookName);
            var ms = new MemoryStream();
            mapper.Save(ms);
            return ms;
        }
    }
}
