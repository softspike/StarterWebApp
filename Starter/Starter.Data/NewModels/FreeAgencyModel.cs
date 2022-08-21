
using Starter.Data.Models;
using System.ComponentModel.DataAnnotations.Schema;


namespace Starter.Data.Entities
{
    public class FreeAgencyModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public ListItem Country { get; set; }

        public string PostCode { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }

        public string AgeGroup { get; set; }

        //public ListItem TournamentType { get; set; }

    }
}
