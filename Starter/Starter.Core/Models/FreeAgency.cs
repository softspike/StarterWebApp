
using System.ComponentModel.DataAnnotations.Schema;


namespace Starter.Data.Models
{
    public class FreeAgency
    {
        public int CountryId { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }

        public bool IsAir { get; set; }

        public bool IsSea { get; set; }

        public bool IsDeleted { get; set; } //Change to Deleted DateTime?

        //[ForeignKey("CountryId")] public Country Country { get; set; }

    }
}
