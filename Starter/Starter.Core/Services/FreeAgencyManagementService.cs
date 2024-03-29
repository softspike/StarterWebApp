using Microsoft.EntityFrameworkCore;
using Starter.Data;
using Starter.Data.Entities;
using Starter.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Starter.Core.Services
{
    public interface IFreeAgencyManagementService
    {
        Task<FreeAgencyModel> Get(int id);
        Task<List<FreeAgencyModel>> GetList(string searchText);

        Task<Invitations> CreateInvitation(InvitationRequest model);
        Task<List<Invitations>> GetOpenInvitation(string playerId);
        Task<Invitations> AcceptInvitation(int invId);
        Task<Invitations> RejectInvitation(int invId);
        Task<FreeAgency> SubmitUser(FreeAgencyModel model);
        Task<FreeAgencyModel> EditUser(FreeAgencyModel model);
    }

    public class FreeAgencyManagementService : IFreeAgencyManagementService
    {
        private StarterDbContext _context;
        public FreeAgencyManagementService(StarterDbContext context)
        { 
           _context = context;
        }

        public async Task<FreeAgencyModel> Get(int id)
        {
            var freeAgency = await _context.FreeAgency.Include(a => a.Country).Include(a => a.Player).FirstOrDefaultAsync(a => a.Id == id);
            var mapped = AutoMapper.Mapper.Map<FreeAgencyModel>(freeAgency);
            return mapped;
        }


        public async Task<List<FreeAgencyModel>> GetList(string searchText)
        {

            var query = await _context.FreeAgency.Include(a => a.Country).Include(a => a.Player).ToListAsync();

            if (!string.IsNullOrEmpty(searchText))
            {
                query = query.Where(a => a.Player.FullName.Contains(searchText)).ToList();
            }

            var mapped = query.Select(a => AutoMapper.Mapper.Map<FreeAgencyModel>(a)).ToList();
           return mapped;
        }

        public async Task<FreeAgency> SubmitUser(FreeAgencyModel model)
        {
            var mapped = AutoMapper.Mapper.Map<FreeAgency>(model);

            _context.FreeAgency.Add(mapped);
            await _context.SaveChangesAsync();
            return mapped;
        }

        public async Task<FreeAgencyModel> EditUser(FreeAgencyModel model)
        {

            var freeAgency = await _context.FreeAgency.FirstOrDefaultAsync(a => a.Id == model.Id);

            AutoMapper.Mapper.Map(model, freeAgency);

            _context.FreeAgency.Update(freeAgency);
            await _context.SaveChangesAsync();

            var res = await Get(model.Id);

            return res;
        }

       


        public async Task<Invitations> CreateInvitation(InvitationRequest model)
        {
            var newInv = new Invitations()
            {
                CaptainId = model.CaptainId,
                PlayerId = model.PlayerId,
                CreatedDateTime = DateTime.Now,
                Accepted = false,
                Rejeted = false
            };

            _context.Invitations.Add(newInv);
            await _context.SaveChangesAsync();
            return newInv;
        }

        public async Task<List<Invitations>> GetOpenInvitation(string playerId)
        {
            var inv = await _context.Invitations.Include(a => a.Captain).Where(a => a.PlayerId == playerId)
                .Where(a => !a.Rejeted)
                .Where(a => a.CreatedDateTime < DateTime.Now.AddMinutes(5))
                .ToListAsync();
            return inv;
        }

        public async Task<Invitations> AcceptInvitation(int invId)
        {
            var inv = await _context.Invitations.FirstOrDefaultAsync(a => a.Id == invId);

           inv.Accepted = true;

            _context.Invitations.Update(inv);
            await _context.SaveChangesAsync();

            return inv;
        }

        public async Task<Invitations> RejectInvitation(int invId)
        {
            var inv = await _context.Invitations.FirstOrDefaultAsync(a => a.Id == invId);

            inv.Rejeted = true;

            _context.Invitations.Update(inv);
            await _context.SaveChangesAsync();

            return inv;
        }

    }

  
}
