using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Starter.Data.Models
{
    public class FreeAgencyRequest : IValidatableObject
    {
        public int? Id { get; set; }

        [Required]
        public ListItem Country { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Code { get; set; }

        [Required]
        [Range(-180, 180, ErrorMessage = "Invalid longitude, range should be between -180 and 180")]
        public double Long { get; set; }

        [Required]
        [Range(-90, 90, ErrorMessage = "Invalid latitude, range should be between -90 and 90")]
        public double Lat { get; set; }

        public bool IsAir { get; set; }

        public bool IsSea { get; set; }

        public bool IsDeleted { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            var results = new List<ValidationResult>();
            if (Code.Length != 5)
            {
                results.Add(new ValidationResult("Code must be 5 chars"));
            }

            if (!Country.Code.StartsWith(Code.Substring(0, 2), StringComparison.InvariantCultureIgnoreCase))
            {
                results.Add(new ValidationResult("Code must start with country code"));
            }

            return results;
        }
    }
}
