using Starter.Data.Models;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Starter.Data.Entities
{
    public class Invitations
    {
        public int Id { get; set; }

        public string CaptainId { get; set; }

        public string PlayerId { get; set; }

        public DateTime CreatedDateTime { get; set; }

        public bool Accepted { get; set; }

        public bool Rejeted { get; set; }

        [ForeignKey("CaptainId")]
        public ApplicationUser Captain { get; set; }
    }
}
