using Microsoft.AspNetCore.Identity;

namespace Starter.Data.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string FullName { get; set; }

        public bool isDeleted { get; set; }

    }
}


