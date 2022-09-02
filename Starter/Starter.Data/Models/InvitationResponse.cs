using Starter.Data.Models;
using System;

namespace Starter.Data.Entities
{
    public class InvitationResponse
    {
        public int Id { get; set; }

        public bool Accepted { get; set; }

        public bool Rejeted { get; set; }
    }
}
