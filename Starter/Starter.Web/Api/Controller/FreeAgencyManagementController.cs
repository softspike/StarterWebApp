using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Starter.Data.Models;
using Starter.Core.Services;
using Starter.Services;
using System.IO;
using Starter.Data.Entities;
using Starter.Data;

namespace Starter.Web.Api.Dynamic
{
    [ApiController]
    [Route("api/[controller]")]


    public class FreeAgencyController : ControllerBase
    {
        private readonly IFreeAgencyManagementService _freeAgencyManagementService;

        private readonly IExcelConvertService _excelConvertService;

        private StarterDbContext _context;


        public FreeAgencyController(IFreeAgencyManagementService freeAgencyManagementService,
            IExcelConvertService excelConvertService,
            StarterDbContext context)
        {

            _freeAgencyManagementService = freeAgencyManagementService;
            _excelConvertService = excelConvertService;
            _context = context;
        }

        [HttpGet("get")]
        public async Task<FreeAgencyModel> Get(int id)
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

        [HttpPost("edit-user")]
        public async Task<IActionResult> EditUserInvitation([FromBody] FreeAgencyModel request)
        {
            var res = await _freeAgencyManagementService.EditUser(request);
            return Ok(res);
        }

        [HttpPost("delete-user")]
        public async Task<IActionResult> DeleteUserInvitation([FromBody] FreeAgencyModel request)
        {
            var res = await _context.FreeAgency.FindAsync(request.Id);

            _context.FreeAgency.Remove(res);
            await _context.SaveChangesAsync();

            return Ok(res);
        }


    }
}
