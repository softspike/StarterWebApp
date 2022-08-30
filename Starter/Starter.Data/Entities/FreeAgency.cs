
using Starter.Data.Enums;
using Starter.Data.Models;
using System.ComponentModel.DataAnnotations.Schema;


namespace Starter.Data.Entities
{
    public class FreeAgency
    {
        public int Id { get; set; }

        public string PlayerId { get; set; }

        public int CountryId { get; set; }

        public string PostCode { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }

        public string AgeGroup { get; set; }

        public TournamentTypeEnum TournamentTypeId { get; set; }

        [ForeignKey("CountryId")] 
        public Country Country { get; set; }

        [ForeignKey("PlayerId")]
        public ApplicationUser Player { get; set; }
    }
}


