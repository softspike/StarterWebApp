using Microsoft.EntityFrameworkCore;
using Starter.Data;
using Starter.Data.Entities;
using Starter.Data.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Starter.Core.Services
{
    public interface IFreeAgencyManagementService
    {
        Task<Country> Get(int id);

        Task<List<Country>> GetList();
    }

    public class FreeAgencyManagementService : IFreeAgencyManagementService
    {
        private StarterDbContext _context;
        public FreeAgencyManagementService(StarterDbContext context)
        {
           // _context = new StarterDbContext(new DbContextOptions<StarterDbContext>());

           _context = context;
        }

        public async Task<Country> Get(int id)
        {

            var country = await _context.Country.FirstOrDefaultAsync(a => a.Id == id);
   
            return country;
;
        }


        public async Task<List<Country>> GetList()
        {

           var query = await _context.Country.ToListAsync();
          
            return query;
        }
}

  
}
