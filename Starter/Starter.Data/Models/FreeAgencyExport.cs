using System.ComponentModel;


namespace Starter.Data.Models
{
    public class FreeAgencyExport
    {

        [Description("Player Name")]
        [Npoi.Mapper.Attributes.Column(1)]
        public string Name { get; set; }

        [Description("Country")]
        [Npoi.Mapper.Attributes.Column(0)]
        public string CountryName { get; set; }

        [Description("Postcode")]
        [Npoi.Mapper.Attributes.Column(2)]
        public string Code { get; set; }

        [Description("Long")]
        [Npoi.Mapper.Attributes.Column(3)]
        public double Long { get; set; }

        [Description("Lat")]
        [Npoi.Mapper.Attributes.Column(4)]
        public double Lat { get; set; }

        [Description("Country Id")]
        [Npoi.Mapper.Attributes.Column(6)]
        public string CountryId { get; set; }

        [Description("Age Group")]
        [Npoi.Mapper.Attributes.Column(7)]
        public string AgeGroup { get; set; }

        [Description("Tournament Type")]
        [Npoi.Mapper.Attributes.Column(5)]
        public string Type { get; set; }
    }
}



