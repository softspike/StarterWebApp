using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Starter.Data.Models
{
    public class FreeAgencyListItem : ListItem
    {

        public string Country { get; set; }

        public double Long { get; set; }
        public double Lat { get; set; }
        public bool isAir { get; set; }
        public bool isSea { get; set; }
    }
}
