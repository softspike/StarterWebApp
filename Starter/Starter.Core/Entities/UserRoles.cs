using Starter.Data.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace Starter.Data.Entities
{
    public class UserRoles
    {
        public string UserId {get; set;}

        public int RoleId { get; set; }

    }
}
