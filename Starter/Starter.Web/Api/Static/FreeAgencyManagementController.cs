//using DynamicData;
//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;


//namespace Starter.Web.Api.Static
//{
//    [Authorize(AuthenticationSchemes = OAuthValidationDefaults.AuthenticationScheme)]
//    [Route("api/[controller]")]
//    public class FreeAgencyManagementController : ControllerBase
//    {

//        private readonly IFreeAgencyService _freeAgencyService;

//        private readonly IExcelConvertService _converter;

//        public FreeAgencyManagementController(IFreeAgencyService freeAgencyService,
//                                   IExcelConvertService converter
//                                // IUserSessionService userSessionService,
//                                //   EdgeDataContext context,
//                                //   IColourService colourService
//                                )

//            _freeAgencyService = freeAgencyService;
//         //   _converter = converter;
//         ///   _userSessionService = userSessionService;
//        //    _context = context;
//        //    _colourService = colourService;
//    }

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
