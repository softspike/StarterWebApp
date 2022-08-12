using Microsoft.EntityFrameworkCore;
using Starter.Data;
using Starter.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Starter.Core.Services
{
    public interface IFreeAgencyManagementService
    {
        Task<FreeAgency> Get(int id);

        Task<List<FreeAgency>> GetList();
    }

    public class FreeAgencyManagementService : IFreeAgencyManagementService
    {
        private StarterDbContext _context;
        public FreeAgencyManagementService()
        {
            _context = new StarterDbContext(new DbContextOptions<StarterDbContext>());
        }

        public async Task<FreeAgency> Get(int id)
        {
            var res = new FreeAgency();

            var one = new FreeAgency()
            {
                CountryId = 1,
                Latitude = 33333,
                Longitude = 6666,
                IsAir = false,
                IsSea = true
            };

            return one;
        }


        public async Task<List<FreeAgency>> GetList()
        {

            var query = _context.Port; //.Where(m => m.CountryId == 20);
           
            var results = query.Select(m => new FreeAgency {
                CountryId = m.CountryId,           
                Latitude = m.Latitude,
                Longitude = m.Longitude,
                IsAir = m.IsAir,
                IsSea=m.IsSea, 
                Name = m.Name,
                AgeGroup = m.AgeGroup,
                Location = m.Location,
                PostCode = m.PostCode,
                
                


            }).ToList();
          
            return results;
        }
}

  
}
