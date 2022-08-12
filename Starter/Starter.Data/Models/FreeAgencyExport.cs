using System.ComponentModel;


namespace Starter.Data.Models
{
    public class FreeAgencyExport
    {
        [Description("Country")]
        [Npoi.Mapper.Attributes.Column(0)]
        public string CountryName { get; set; }

        [Description("CountryId")]
        [Npoi.Mapper.Attributes.Column(6)]
        public string CountryId { get; set; }

        [Description("AgeGroup")]
        [Npoi.Mapper.Attributes.Column(7)]
        public string AgeGroup { get; set; }

        [Description("Name")]
        [Npoi.Mapper.Attributes.Column(1)]
        public string Name { get; set; }

        [Description("Code")]
        [Npoi.Mapper.Attributes.Column(2)]
        public string Code { get; set; }

        [Description("Long")]
        [Npoi.Mapper.Attributes.Column(3)]
        public double Long { get; set; }

        [Description("Lat")]
        [Npoi.Mapper.Attributes.Column(4)]
        public double Lat { get; set; }

        [Description("Type")]
        [Npoi.Mapper.Attributes.Column(5)]
        public string Type { get; set; }
    }
}
