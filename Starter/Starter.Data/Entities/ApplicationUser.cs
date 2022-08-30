using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Starter.Data.Models
{
    public class ApplicationUser : IdentityUser
    {
        //public string Id { get; set; }

        //public string UserName { get; set; }

        //public string Email { get; set; }

        public string FullName { get; set; }

        //public string Token { get; set; }

        public bool isDeleted { get; set; }

    }
}


