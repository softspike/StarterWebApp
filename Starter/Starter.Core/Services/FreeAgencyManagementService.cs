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
            var res = new List<FreeAgency>();

            var one = new FreeAgency()
            {
                CountryId = 1,
                Latitude = 33333,
                Longitude = 6666,
                IsAir = false,
                IsSea = true
            };


            res.Add(one);   
            return res;
        }
}

  
}
