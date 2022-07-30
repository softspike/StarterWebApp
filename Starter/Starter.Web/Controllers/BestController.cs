using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Starter.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Starter.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BestController : Controller
    {
       
       
        [HttpGet("get")]
        public IActionResult Get()
        {
            var Message = new LinkAgencyService();
            var result = new Res("Hello World!");
            return Ok(result);
           
        }

        public class Res
        {
            public Res(string text)
            {
                Text = text;
            }
            public string Text { get; set; }
        }

    }
}
