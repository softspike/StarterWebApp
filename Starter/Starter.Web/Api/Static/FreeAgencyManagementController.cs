using Microsoft.AspNetCore.Mvc;
using Starter.Data;
using Starter.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Starter.Data.Models;
using Starter.Core.Services;
using Starter.Services;
using System.IO;

namespace Starter.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FreeAgencyController : Controller
    {
        private readonly IFreeAgencyManagementService _freeAgencyManagementService;

        private readonly IExcelConvertService _excelConvertService;


        public FreeAgencyController(IFreeAgencyManagementService freeAgencyManagementService,
            IExcelConvertService excelConvertService)
        {
            _freeAgencyManagementService = freeAgencyManagementService;
            _excelConvertService = excelConvertService;
        }

        [HttpGet("get")]
        public async Task<FreeAgency> Get(int id)
        {
            var res = await _freeAgencyManagementService.Get(id);
            return res;
        }

        [HttpGet("list")]
        public async Task<List<FreeAgency>> GetList()
        {
            var res = await _freeAgencyManagementService.GetList();
            return res;
        }

        [HttpGet("export")]
        
        public async Task<IActionResult> Export()
        {
            var list = await GetList();
            var stream = _excelConvertService.GetExcelNoFormat(list, "EWL Export");
            var res = ((MemoryStream)stream).ToArray();
            return File(res, "application/octet-stream", $"Export-{DateTime.UtcNow:ddMMyyyy}.xlsx");
        }

        //var d = await _provider.GetData(_customerCode, cr);
        //_provider = null;
        //        SetSumOfPo(d);
        //var stream = _excelConvertService.GetExcelNoFormat(d, "EWL Export");
        //d.ClearList();
        //        var res = ((MemoryStream)stream).ToArray();
        //stream = null;
        //        return res;
    }
}


//    [HttpGet("get")]
//    public async Task<PortResponse> Get(int id)
//    {
//        var agency = await _freeAgencyService.Get(id);
//        var mappedData = AutoMapper.Mapper.Map<Agency, PortResponse>(agency);
//        return mappedData;
//    }

//    [HttpGet("list")]
//    public async Task<PageResponse<PortListItem>> GetPagedData(PageRequest request)
//    {
//        var pagedData = await _freeAgencyService.GetList(request);
//        return pagedData;
//    }







//}
