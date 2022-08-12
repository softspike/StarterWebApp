
using System.ComponentModel.DataAnnotations.Schema;


namespace Starter.Data.Models
{
    public class FreeAgency
    {
        public int CountryId { get; set; }

        public string Name { get; set; }

        public string AgeGroup { get; set; }

        public string Location { get; set; }

        public string PostCode { get; set; }

        public string Code { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }

        public bool IsAir { get; set; }

        public bool IsSea { get; set; }

        public bool IsDeleted { get; set; } //Change to Deleted DateTime?

        //[ForeignKey("CountryId")] public Country Country { get; set; }

    }
}
