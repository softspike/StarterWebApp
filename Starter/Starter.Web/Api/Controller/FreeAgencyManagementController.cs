using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Starter.Data.Models;
using Starter.Core.Services;
using Starter.Services;
using System.IO;
using Starter.Data.Entities;

namespace Starter.Web.Api.Dynamic
{
    [ApiController]
    [Route("api/[controller]")]


    public class FreeAgencyController : ControllerBase
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
        public async Task<Country> Get(int id)
        {
            var res = await _freeAgencyManagementService.Get(id);
            return res;
        }

        [HttpGet("list")]
        public async Task<List<FreeAgencyModel>> GetList()
        {
            var res = await _freeAgencyManagementService.GetList();
            return res;
        }

        [HttpGet("export")]
        public async Task<IActionResult> Export()
        {
            var list = await GetList();
            var stream = _excelConvertService.GetExcelNoFormat(list, "Starter Export");
            var res = ((MemoryStream)stream).ToArray();
            return File(res, "application/octet-stream", $"Starter.xlsx");
        }

    }
}
