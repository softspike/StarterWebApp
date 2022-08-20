
using System.ComponentModel.DataAnnotations.Schema;


namespace Starter.Data.Entities
{
    public class FreeAgency
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int CountryId { get; set; }

        public string PostCode { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }

        public string AgeGroup { get; set; }

        public int TournamentTypeId { get; set; }
    }
}
