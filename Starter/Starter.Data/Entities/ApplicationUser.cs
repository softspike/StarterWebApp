﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Starter.Data.Models
{
    public class ApplicationUser : IdentityUser
    {
        //public string UserName { get; set; }

        //public string Email { get; set; }

        //public string Password { get; set; }

        public string FullName { get; set; }
    }
}


