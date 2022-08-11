using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Starter.Data.Models
{
    public class FreeAgencyListItem : ListItem
    {

        public int CountryId { get; set; }

        public string Name { get; set; }

        public string Code { get; set; }

        public double Lat { get; set; }

        public double Long { get; set; }

        public bool IsAir { get; set; }

        public bool IsSea { get; set; }

        public bool IsDeleted { get; set; } //Change to Deleted DateTime?

        //[ForeignKey("CountryId")] public Country Country { get; set; }
    }
}
