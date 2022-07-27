using System.ComponentModel.DataAnnotations.Schema;
using Edge.Data.Shared.Models.Lists;

namespace Edge.Data.Entity.Models
{
    public class Agency : BaseList
    {
        public int CountryId { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }

        [ForeignKey("CountryId")]
        public Country Country { get; set; }

        public bool IsAir { get; set; }

        public bool IsSea { get; set; }

        public bool IsDeleted { get; set; }
    }
}
