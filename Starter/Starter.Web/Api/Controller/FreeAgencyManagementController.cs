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
        public async Task<List<FreeAgencyModel>> GetList(string searchText)
        {
            var res = await _freeAgencyManagementService.GetList(searchText);
            return res;
        }

        [HttpGet("export")]
        public async Task<IActionResult> Export()
        {
            var list = await GetList(string.Empty);
            var stream = _excelConvertService.GetExcelNoFormat(list, "Starter Export");
            var res = ((MemoryStream)stream).ToArray();
            return File(res, "application/octet-stream", $"Starter.xlsx");
        }

        [HttpGet("get-invitations")]
        public async Task<List<Invitations>> GetOpenInvitation(string playerId)
        {
            var res = await _freeAgencyManagementService.GetOpenInvitation(playerId);
            return res;
        }

        [HttpPost("create-invitation")]
        public async Task<IActionResult> CreateInvitation([FromBody]InvitationRequest request)
        {
            var res = await _freeAgencyManagementService.CreateInvitation(request);
            return Ok(res);
        }

        [HttpPost("accept-invitation")]
        public async Task<IActionResult> AcceptInvitation([FromBody] IdModel request)
        {
            var res = await _freeAgencyManagementService.AcceptInvitation(request.Id);
            return Ok(res);
        }

        [HttpPost("reject-invitation")]
        public async Task<IActionResult> RejecttInvitation([FromBody] IdModel request)
        {
            var res = await _freeAgencyManagementService.RejectInvitation(request.Id);
            return Ok(res);
        }

        [HttpPost("submit-user")]
        public async Task<IActionResult> CreateSubmitUserInvitation([FromBody] FreeAgencyModel request)
        {
            var res = await _freeAgencyManagementService.SubmitUser(request);
            return Ok(res);
        }



    }
}
