
namespace Starter.Data.Models
{
    public class FreeAgencyResponse : ListItem
    { 
        public ListItem Country { get; set; }

        public string Name { get; set; }
        public double Long { get; set; }
        public double Lat { get; set; }
        public bool IsAir { get; set; }
        public bool IsSea { get; set; }
        public bool IsDeleted { get; set; }
    }
}
