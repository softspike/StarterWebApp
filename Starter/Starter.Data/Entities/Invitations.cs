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




    //[CaptainId] NVARCHAR(250)     NOT NULL,

    //[PlayerId]    NVARCHAR(250)     NOT NULL,
    //[CreatedDateTime]   DATE NULL,

    //[Accepted]   BIT NULL,

    //[Rejeted]   BIT NULL,
}
